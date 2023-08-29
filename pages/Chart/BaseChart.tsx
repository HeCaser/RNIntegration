// /* eslint-disable react/destructuring-assignment,react/sort-comp,react/no-did-update-set-state */
// // eslint-disable-next-line react/prefer-stateless-function

// import React from 'react'
// import { IBaseChartModel, IBaseChartProps, IBaseChartSeries, IBaseChartState } from '@/pages/funding/[code]/components/Chart/interface'
// import { Box, getRnSize, OS, SVG, THEME, ThemeColor } from 'snowbox-ui'
// import { GestureResponderEvent, LayoutChangeEvent, PanResponder, PanResponderGestureState, PanResponderInstance } from 'react-native'
// import RNBridge from '@/common/js/RNBridge'
// import { formatPercent } from '@/common/js/Numeral'

// const { Svg, Line, Polyline, Text: SvgText, Circle, G, } = SVG


// /**
//  * 实现了绘制折线、网格线、y轴刻度、占位图，以及长按手势操作的基础折线图
//  */
// class BaseChart<
//   T extends IBaseChartModel = IBaseChartModel,
//   Props extends IBaseChartProps<T> = IBaseChartProps<T>,
//   State extends IBaseChartState<T> = IBaseChartState<T>
// > extends React.Component<Props, State> {

//   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
//     const { layout } = this.state
//     const { series } = this.props
//     const shouldUpdate = series !== prevProps?.series || layout !== prevState?.layout
//     if (shouldUpdate) {
//       const { max, min } = this.generateYAxisMaxAndMinValues()
//       if (max == null || min == null) {
//         this.setState({
//           lines: [],
//           yAxisMaxValue: 0,
//           yAxisMinValue: 0,
//         })
//         this.clearTouchPointImmediately()
//         return true
//       }

//       const lines = this.generateLines(series, max, min)
//       this.setState({
//         lines,
//         yAxisMaxValue: max,
//         yAxisMinValue: min,
//       })
//       this.clearTouchPointImmediately()
//       return true
//     }

//     return false
//   }

//   componentWillUnmount() {
//     clearTimeout(this.startTouchingTimeoutId)
//     clearTimeout(this.clearTouchPointTimeoutId)
//   }

//   state: State = {
//     lines: [],
//     closestPoints: [],
//     layout: null,
//     yAxisMaxValue: 0,
//     yAxisMinValue: 0,
//     lineCount: 6,
//     paddingLeft: getRnSize(44),
//     paddingTop: getRnSize(6),
//     paddingRight: getRnSize(4),
//     paddingBottom: getRnSize(32),
//     gestureEnabled: true
//   }

//   isLongPressing: boolean = false

//   longPressYAxisThreshold: number = 6

//   /* 启动长按操作的定时任务 */
//   startTouchingTimeoutId: any = null

//   /* 清除触摸点的定时任务 */
//   clearTouchPointTimeoutId: any = null

//   panResponder: PanResponderInstance = PanResponder.create({
//     // 是否阻断原生响应
//     onShouldBlockNativeResponder: () => false,
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderGrant: (event: GestureResponderEvent) => {
//       const { gestureEnabled } = this.state
//       if (!gestureEnabled) {
//         return false
//       }
//       const { gestureInterceptor, } = this.props
//       const { nativeEvent: { locationX, locationY, } } = event
//       const delay = this.getGestureDelay()
//       this.startTouchingTimeoutId = setTimeout(() => {
//         gestureInterceptor?.(true)
//         this.isLongPressing = true
//         this.updateTouchPoint(locationX, locationY)
//       }, delay)
//       if (OS === 'web') {
//         event.preventDefault()
//       }
//       return true
//     },
//     onPanResponderMove: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//       const { gestureEnabled } = this.state
//       if (!gestureEnabled) {
//         return false
//       }
//       // 手势产生的y轴位移距离。当长按尚未开始时，用于判断是否是长按，还是滑动页面。若大于阈值则是滑动页面，撤销长按操作。
//       const { dy } = gestureState
//       if (Math.abs(dy) > this.longPressYAxisThreshold && !this.isLongPressing) {
//         // console.log(`onPanResponderMove: dy -> ${Math.abs(dy)}, long press cancelled`)
//         clearTimeout(this.startTouchingTimeoutId)
//         return false
//       }
//       // console.log(`onPanResponderMove: dy -> ${Math.abs(dy)}`)
//       const { nativeEvent: { locationX, locationY, } } = event
//       this.updateTouchPoint(locationX, locationY)
//       clearTimeout(this.clearTouchPointTimeoutId)
//       if (OS === 'web') {
//         event.preventDefault()
//       }
//       return true
//     },
//     onPanResponderRelease: () => {
//       const { gestureEnabled } = this.state
//       if (!gestureEnabled) {
//         return false
//       }
//       this.stopTouching()
//       return true
//     },
//     // 其他视图想接管手势控制，不释放当前视图的控制
//     onPanResponderTerminationRequest: () => false,
//     onPanResponderTerminate: () => {
//       const { gestureEnabled } = this.state
//       if (!gestureEnabled) {
//         return false
//       }
//       this.stopTouching()
//       return true
//     }
//   })

//   stopTouching() {
//     const { gestureInterceptor } = this.props
//     gestureInterceptor?.(false)
//     this.clearTouchPointDelayed()
//     this.isLongPressing = false
//     clearTimeout(this.startTouchingTimeoutId)
//     RNBridge.gestureConfig({
//       panBackDisable: false,
//     })
//   }

//   updateTouchPoint(x: number, y: number) {
//     if (!this.state?.lines?.length) {
//       return
//     }
//     if (!this.isLongPressing) {
//       return
//     }
//     RNBridge.gestureConfig({
//       panBackDisable: true,
//     })
//     const closestPoints = this.findClosestPoints(x)
//     this.setState(state => ({
//       ...state,
//       closestPoints,
//     }))
//     const { onTouch } = this.props
//     onTouch?.(closestPoints)
//   }

//   clearTouchPointImmediately() {
//     this.setState({
//       closestPoints: [],
//     })
//     const { onTouch } = this.props
//     onTouch?.([])
//   }

//   clearTouchPointDelayed() {
//     const { touchPointDisplayDuration: delay = 1000 } = this.props
//     clearTimeout(this.clearTouchPointTimeoutId)
//     this.clearTouchPointTimeoutId = setTimeout(() => {
//       this.clearTouchPointImmediately()
//     }, delay || 1000)
//   }

//   setSvgProps() {
//     return null
//   }

//   getChartWidth(): number {
//     const { layout, paddingLeft, paddingRight, } = this.state
//     if (!layout) {
//       return 0
//     }
//     const { width } = layout
//     return width - paddingLeft - paddingRight
//   }

//   getChartHeight(): number {
//     const { height } = this.props
//     const { paddingTop, paddingBottom } = this.state
//     return height - paddingTop - paddingBottom
//   }

//   getGestureDelay(): number {
//     let gestureDelay: number
//     switch (OS) {
//       case 'ios':
//       case 'android': {
//         gestureDelay = 200
//         break
//       }
//       case 'web': {
//         gestureDelay = 100
//         break
//       }
//       default:
//         gestureDelay = 200
//     }
//     return gestureDelay
//   }

//   layoutHandler(event: LayoutChangeEvent): void {
//     const { layout } = event.nativeEvent
//     this.setState((state) => ({
//       ...state,
//       layout
//     }))
//   }

//   generateYAxisMaxAndMinValues() {
//     const { series } = this.props
//     const aggregate: number[] = (
//       series?.flatMap(it => it?.data)
//         ?.map(data => data?.value != null ? +data.value : null)
//         ?.filter(value => value != null && !Number.isNaN(value)) || []
//     ) as number[]
//     if (!aggregate.length) {
//       return {}
//     }

//     const maxValue = +aggregate.reduce((prev, next) => prev > next ? prev : next, aggregate[0])
//     const minValue = +aggregate.reduce((prev, next) => prev < next ? prev : next, aggregate[0])

//     const magicNumber = 18 // 魔法数字...
//     const offset = (maxValue - minValue) / magicNumber
//     const max = maxValue + offset
//     const min = minValue - offset
//     return { max, min, }
//   }

//   /**
//    * 依据触摸点x坐标找出折线最接近的端点
//    */
//   findClosestPoints(x: number): T[] {
//     const { lines } = this.state
//     if (!lines?.length) {
//       return []
//     }

//     // 先找出各折线最接近的端点
//     const candidates = lines
//       .map(line => {
//         const indexOfFirst = line.points.findIndex(point => point?.x != null && point?.y != null)
//         if (indexOfFirst === -1) {
//           return null
//         }
//         const firstPoint = line.points[indexOfFirst]
//         return line.points.reduce((prev, next, index) => {
//           if (index <= indexOfFirst) {
//             return prev
//           }
//           if (next?.x == null) {
//             return prev
//           }
//           return Math.abs(x - (prev.x as number)) > Math.abs(x - next.x) ? next : prev
//         }, firstPoint)
//       })
//       .filter(point => point?.x != null && point?.y != null) as T[]
//     if (!candidates.length) {
//       return []
//     }

//     // 找出所有端点中最小的x坐标
//     const minX = Math.min(...candidates.map(point => point.x as number))

//     /**
//      * 过滤掉x坐标大于最小x坐标的端点
//      * 对于部分产品, 如养老金, 本产品端点数可能少于其它指标, 只画一部分折线, 呈现对比的效果, 因此长按时只需要展示其它指标的触摸点, 过滤掉本产品的触摸点
//      */
//     const offset = 1
//     return candidates.filter(point => ((point.x as number) - minX) < offset)
//   }

//   getIdealSize(series: IBaseChartSeries): number {
//     const { data, minimalSize, maximumSize } = series
//     if (minimalSize && maximumSize && minimalSize > maximumSize) {
//       throw new Error('BaseChart minimalSize cannot be larger than maximumSize')
//     }
//     if (minimalSize && minimalSize > data.length) {
//       return minimalSize
//     }
//     if (maximumSize && maximumSize < data.length) {
//       return maximumSize
//     }
//     return data.length
//   }

//   getRawValueFromSeries(series: IBaseChartSeries, idealSize: number): (number | undefined)[] {
//     if (!series.data.length) {
//       return []
//     }
//     const indexOfFirst = series.data.findIndex(({ value }) => value != null && !Number.isNaN(+value))
//     if (indexOfFirst === -1) {
//       return []
//     }

//     // to satisfy compiler...
//     const first = series.data[indexOfFirst].value as string | number
//     const firstValue = !Number.isNaN(+first) ? +first : null
//     if (firstValue == null) {
//       return []
//     }

//     const rawValues: (number | undefined)[] = new Array(idealSize).fill(undefined)
//     rawValues[indexOfFirst] = firstValue

//     series.data.forEach((data, index) => {
//       if (index <= indexOfFirst) {
//         return
//       }
//       let value: number | null = data?.value != null && !Number.isNaN(+data.value) ? +data.value : null
//       /* 若值为空, 则取上一个点的值 */
//       if (value == null) {
//         let i = index
//         while (i > indexOfFirst) {
//           const previousValue = rawValues?.[i - 1]
//           if (previousValue != null) {
//             value = previousValue
//             break
//           }
//           i -= 1
//         }
//       }
//       rawValues[index] = value ?? firstValue
//     })

//     return rawValues
//   }

//   generateLines(series: IBaseChartSeries<T>[], max: number, min: number) {
//     const { layout, paddingLeft, paddingTop, paddingRight, } = this.state
//     if (!layout) {
//       return []
//     }
//     const { width } = layout
//     if (!width) {
//       return []
//     }
//     const { height } = this.props
//     if (!height) {
//       return []
//     }
//     if (max == null || min == null) {
//       return []
//     }

//     return series.map(_series => {
//       if (_series.data?.length == null || !(_series.data.length > 1)) {
//         return {
//           ..._series, points: [],
//         }
//       }

//       const idealSize = this.getIdealSize(_series)
//       const rawValues = this.getRawValueFromSeries(_series, idealSize)

//       const actualWidth = width - paddingLeft - paddingRight
//       const actualHeight = this.getChartHeight()
//       const xPortion = actualWidth / (idealSize - 1)
//       const yDiff = max - min

//       const points: T[] = rawValues
//         .map((value, index) => {
//           if (value == null) {
//             return null
//           }
//           const x = paddingLeft + index * xPortion
//           const y = yDiff === 0 ? paddingTop + actualHeight / 2 : paddingTop + ((max - value) / yDiff) * actualHeight
//           return {
//             ..._series?.data?.[index], x, y, value
//           }
//         })
//         .filter(point => point?.x != null && point?.y != null) as T[]

//       return {
//         ..._series, points,
//       }
//     }).sort((a, b) => (a?.zIndex || 0) > (b?.zIndex || 0) ? 1 : -1)
//   }

//   /**
//    * 生成网格线以及刻度y轴坐标
//    */
//   generateYAxisCoordinates(): number[] {
//     const { yAxisMaxValue, yAxisMinValue, paddingTop, lineCount } = this.state

//     /* 最大值与最小值相等时仅在中心绘制网格与刻度 */
//     if (yAxisMaxValue === yAxisMinValue) {
//       const yCenter = paddingTop + this.getChartHeight() / 2
//       return [yCenter]
//     }

//     const yTop = paddingTop
//     const yBottom = yTop + this.getChartHeight()
//     const yDiff = yBottom - yTop
//     const yPortion = yDiff / (lineCount - 1)
//     const coordinates: number[] = []
//     for (let i = 0; i < lineCount; i += 1) {
//       const y = yTop + i * yPortion
//       coordinates.push(y)
//     }
//     return coordinates
//   }

//   /**
//    * 一些数据校验工作
//    */
//   isPrepared(): boolean {
//     const { layout, lines, yAxisMaxValue, yAxisMinValue } = this.state
//     const isMeasured = layout != null
//     const hasData = !!lines?.length
//     return isMeasured && hasData && yAxisMaxValue != null && yAxisMinValue != null
//   }

//   renderPlaceholder(): JSX.Element | null {
//     const { layout, paddingTop, lineCount, } = this.state
//     if (!layout) {
//       return null
//     }
//     const { width } = layout
//     const xText = width / 2
//     const yText = paddingTop + this.getChartHeight() / 2

//     const yTop = paddingTop
//     const yBottom = yTop + this.getChartHeight()
//     const yDiff = yBottom - yTop
//     const yPortion = yDiff / (lineCount - 1)
//     const coordinates: number[] = []
//     for (let i = 0; i < lineCount; i += 1) {
//       const y = yTop + i * yPortion
//       coordinates.push(y)
//     }

//     const left = getRnSize(12)
//     const right = width - getRnSize(12)

//     return (
//       <>
//         {
//           coordinates.map(y => (
//             <Line key={`${y}_placeholder`} x1={left} y1={y} x2={right} y2={y} stroke={ThemeColor.L010[THEME]} strokeWidth={getRnSize(0.5)} strokeOpacity={0.5}/>
//           ))
//         }
//         <SvgText
//           x={xText}
//           y={yText}
//           fill={ThemeColor.T030[THEME]}
//           fontSize={getRnSize(12)}
//           textAnchor='middle'
//           alignmentBaseline='central'>暂无数据</SvgText>
//       </>
//     )
//   }

//   renderBackground(): JSX.Element | null {
//     return null
//   }

//   renderGrid(): JSX.Element | null {
//     const yAxisCoordinates = this.generateYAxisCoordinates()
//     const { paddingLeft } = this.state
//     if (!yAxisCoordinates?.length) {
//       return null
//     }

//     const lineColor = ThemeColor.L010[THEME]
//     const x1 = paddingLeft
//     const x2 = x1 + this.getChartWidth()

//     return <>{
//       yAxisCoordinates.map(y => (
//         <Line key={`${y}_y_axis_coordinate`} x1={x1} y1={y} x2={x2} y2={y} stroke={lineColor} strokeWidth={getRnSize(0.5)} strokeOpacity={0.5}/>
//       ))
//     }</>
//   }

//   /**
//    * y轴刻度
//    */
//   renderYAxis(): JSX.Element | null {
//     const { paddingLeft, yAxisMaxValue, yAxisMinValue, lineCount } = this.state
//     const yAxisCoordinates = this.generateYAxisCoordinates()
//     if (!yAxisCoordinates?.length) {
//       return null
//     }

//     const offsetX = OS === 'android' ? getRnSize(-4) : getRnSize(-2)

//     if (yAxisCoordinates.length === 1) {
//       const y = yAxisCoordinates[0]
//       return (
//         <SvgText
//           key={`0_${y}_y_axis_metric`}
//           x={paddingLeft + offsetX}
//           y={y}
//           fill={ThemeColor.T020[THEME]}
//           fontSize={getRnSize(10)}
//           textAnchor='end'
//           alignmentBaseline='central'
//           fontFamily='DIN-Medium'
//           fontWeight='500'
//         >
//           0.00%
//         </SvgText>
//       )
//     }

//     const yPortion = (yAxisMaxValue - yAxisMinValue) / (lineCount - 1)
//     return <>{
//       yAxisCoordinates.map((y, index) => {
//         const value = formatPercent((yAxisMaxValue - yPortion * index) * 100)
//         return (
//           <SvgText
//             key={`${index}_${value}_y_axis_metric`}
//             x={paddingLeft + offsetX}
//             y={y}
//             fill={ThemeColor.T020[THEME]}
//             fontSize={getRnSize(10)}
//             textAnchor='end'
//             alignmentBaseline='central'
//             fontFamily='DIN-Medium'
//             fontWeight='500'
//           >
//             {value}
//           </SvgText>
//         )
//       })
//     }</>
//   }

//   renderLine(): JSX.Element | null {
//     const { lines } = this.state
//     if (!lines?.length) {
//       return null
//     }
//     return <>
//       {
//         lines.map(line => {
//           if (!line?.points) {
//             return null
//           }
//           const points = line.points.filter(point => point?.x != null && point?.y != null).map(point => `${point.x},${point.y}`).join(' ')
//           return (
//             <Polyline
//               key={line.key}
//               fill='none'
//               points={points}
//               stroke={line.lineStyle?.color || ThemeColor.Chart008[THEME]}
//               strokeWidth={line.lineStyle?.width || getRnSize(1)}
//               strokeLinejoin='round'
//             />
//           )
//         })
//       }
//     </>
//   }

//   renderShade(): JSX.Element | null {
//     const { lines } = this.state
//     if (!lines?.length) {
//       return null
//     }
//     return <>{
//       lines.map(line => {
//         if (!line?.shadeStyle) {
//           return null
//         }
//         if (!line?.points?.length) {
//           return null
//         }
//         const { color, opacity } = line.shadeStyle
//         if (!color) {
//           return null
//         }
//         const { paddingTop } = this.state
//         const firstPoint = line?.points?.find(point => point?.x != null && point?.y != null) || null
//         const lastPoint = line?.points.reduceRight((prev, next) => prev?.x != null && prev.y != null ? prev : next) || firstPoint
//         if (firstPoint?.x == null || lastPoint?.x == null) {
//           return null
//         }
//         const bottom = paddingTop + this.getChartHeight()
//         const leftBottomPoint: IBaseChartModel = {
//           x: firstPoint.x,
//           y: bottom,
//         }
//         const rightBottomPoint: IBaseChartModel = {
//           x: lastPoint.x,
//           y: bottom,
//         }
//         const linePoints: T[] = line.points.filter(point => point?.x != null && point?.y != null)
//         const points = [leftBottomPoint, ...linePoints, rightBottomPoint, leftBottomPoint].map(point => `${point.x},${point.y}`).join(' ')
//         return (
//           <Polyline
//             key={`shade_${line.key}`}
//             fill={color}
//             points={points}
//             fillOpacity={opacity?.toString() ?? '0.05'}
//           />
//         )
//       })
//     }</>
//   }

//   renderCursor(): JSX.Element | null {
//     return null
//   }

//   renderTouchPoint(): JSX.Element | null {
//     const { closestPoints, lines, paddingTop } = this.state
//     if (!closestPoints?.length || !lines?.length) {
//       return null
//     }
//     return <>
//       {lines.map((line, index) => {
//         const { x, y } = closestPoints?.[index] || {}
//         if (x == null || y == null) {
//           return null
//         }
//         const color = line?.lineStyle?.color
//         return color ? (
//           <G key={`touch_point_${index}_${x}_${y}_${color}`}>
//             {
//               index === 0 ? (
//                 <Line
//                   x1={x} x2={x}
//                   y1={paddingTop} y2={paddingTop + this.getChartHeight()}
//                   stroke={ThemeColor.L010[THEME]} strokeWidth={getRnSize(0.5)} strokeOpacity={0.5}/>
//               ) : null
//             }
//             <Circle cx={x} cy={y} r={getRnSize(4)} fill={color}/>
//             <Circle cx={x} cy={y} r={getRnSize(3)} fill={ThemeColor.B020[THEME]}/>
//             <Circle cx={x} cy={y} r={getRnSize(1.5)} fill={color}/>
//           </G>
//         ) : null
//       })}
//     </>
//   }

//   renderXAxis(): JSX.Element | null {
//     const { lines, layout, paddingBottom } = this.state
//     if (!layout) {
//       return null
//     }
//     const { width } = layout
//     if (!width) {
//       return null
//     }

//     const firstPoint = lines
//       ?.filter(line => line?.points?.length)
//       ?.flatMap(line => line?.points?.find(point => point != null))
//       ?.find(point => point?.date != null && point?.x != null)

//     const lastPoint = lines
//       ?.filter(line => line?.points?.length)
//       ?.flatMap(
//         line =>
//           line?.points?.reduceRight((prev, next) => prev.date != null && prev.x != null ? prev : next,)
//       )
//       ?.find(point => point?.date != null && point?.x != null)

//     const y = this.getChartHeight() + paddingBottom - getRnSize(10)

//     const first = firstPoint != null ? (
//       <SvgText
//         x={firstPoint.x}
//         y={y}
//         fill={ThemeColor.T020[THEME]}
//         fontSize={getRnSize(10)}
//         textAnchor='start'
//         alignmentBaseline='central'
//         fontFamily='DIN-Medium'
//         fontWeight='500'
//       >
//         {firstPoint.date}
//       </SvgText>
//     ) : null

//     const androidXOffset = OS === 'android' ? getRnSize(8) : 0

//     const last = lastPoint != null ? (
//       <SvgText
//         x={(lastPoint.x as number) - androidXOffset}
//         y={y}
//         fill={ThemeColor.T020[THEME]}
//         fontSize={getRnSize(10)}
//         textAnchor='end'
//         alignmentBaseline='central'
//         fontFamily='DIN-Medium'
//         fontWeight='500'
//       >
//         {lastPoint.date}
//       </SvgText>
//     ) : null
//     return (
//       <>
//         {first}
//         {last}
//       </>
//     )
//   }

//   renderForeground(): JSX.Element | null {
//     return null
//   }

//   render() {
//     return (
//       <Box w='100%' col onLayout={event => this.layoutHandler(event)} {...this.panResponder.panHandlers}>
//         <Svg height={this.props.height} width={this.props?.width || '100%'} {...this.setSvgProps()} >
//           {
//             this.isPrepared()
//               ? (<>
//                 {this.renderBackground()}
//                 {this.renderGrid()}
//                 {this.renderLine()}
//                 {this.renderShade()}
//                 {this.renderCursor()}
//                 {this.renderTouchPoint()}
//                 {this.renderXAxis()}
//                 {this.renderYAxis()}
//                 {this.renderForeground()}
//               </>)
//               : this.renderPlaceholder()
//           }
//         </Svg>
//       </Box>
//     )
//   }
// }


// export default BaseChart

