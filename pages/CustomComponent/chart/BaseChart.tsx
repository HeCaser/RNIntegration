import Svg, { Line, Polyline, Circle } from 'react-native-svg';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LINES from './DATA.json'
import { IBaseChartModel } from './interface';

/**
 * 
 * 这是一个折线 Demo
 * 利用 Svg 包的 Polyline 展示折线
 */
function BaseChart() {

  const [width, setWidht] = useState(0)
  const height = 100 //控件高度
  const point_number = LINES.length // 折线点的数量

  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidht(width)
  }

  function renderLine() {

    if (width <= 0) {
      return null
    }

    let linePoints: Array<IBaseChartModel> = []
    for (let i = 0; i < point_number; i++) {
      linePoints.push({ x: i, y: parseFloat(LINES[i].fund_point) })
    }

    let minValue = Math.min(...linePoints.map(p => p.y as number))
    let maxValue = Math.max(...linePoints.map(p => p.y as number))
    let scopeY = maxValue - minValue 
    let spanX = width / point_number // 横轴每格间距

    // 横轴坐标按自然数递增, 纵轴坐标根据 y 值计算(y 值越大, 位置越靠上)
    let points = linePoints.map((point, index) => `${index * spanX},${height - ((point.y as number - minValue)/ scopeY * height)}`).join(' ')

    return <Polyline
      fill={"none"}
      points={points}
      strokeWidth={1}
      strokeLinejoin='round'
      stroke={"#f00"} />
  }


  return (
    <View width={"100%"} height={height} style={{ borderColor: '#0ff', borderWidth: 1 }} onLayout={onLayout}>
      <Svg height="100%" width="100%" >
        {renderLine()}
      </Svg>
    </View>
  )
}

export default BaseChart
