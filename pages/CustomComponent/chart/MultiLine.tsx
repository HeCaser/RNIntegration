import React, { useState } from "react";
import { IBaseChartModel, IBaseChartSeries } from "./interface";
import { View, Text } from "react-native";
import LINES from './DATA.json'
import Svg, { Line, Polyline, Circle } from 'react-native-svg';
/**
 * 
 * @param props 接收折线数组, 绘制多个折线
 */
function MultiLine(props) {
    const [width, setWidht] = useState(0)
    const height = 100 //控件高度

    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        setWidht(width)
    }

    function renderLine() {

        let lines: IBaseChartSeries<IBaseChartModel>[] = props.lines

        if (lines === null || lines.length <= 0 || width <= 0) {
            return <Text>未设置数据</Text>
        }

        let minY = Math.min(...lines.map(line => Math.min(...line.data.map(p => p.y!!))))
        let maxY = Math.max(...lines.map(line => Math.max(...line.data.map(p => p.y!!))))
        let scopeY = maxY - minY

        // 横轴坐标点数量
        let xLength = Math.max(...lines.map(line => line.data.length))
        let xSpan = width / xLength

        let points: string[] = []
        lines.map(line => {
            let point = line.data.map((point, index) => `${index * xSpan},${height - ((point.y as number - minY) / scopeY * height)}`).join(' ')
            points.push(point)
        })

        return <>
            {
                lines.map((line, index) => {
                    return (
                        <Polyline
                            fill={"none"}
                            points={points[index]}
                            strokeWidth={1}
                            strokeLinejoin='round'
                            stroke={line.lineStyle?.color} />
                    )
                })
            }
        </>

    }

    return (
        <View width={"100%"} height={height} style={{ borderColor: '#0ff', borderWidth: 1 }} onLayout={onLayout}>
            <Svg height="100%" width="100%" >
                {renderLine()}
            </Svg>
        </View>
    )

}

/**
 * 多折线展示, 主要是构造数据源
 * 
 */
function MultiLineDemo() {
    let lines: IBaseChartSeries<IBaseChartModel>[] = []

    const point_number = LINES.length // 折线点的数量

    let fundPoints: Array<IBaseChartModel> = []
    for (let i = 0; i < point_number; i++) {
        fundPoints.push({ x: i, y: parseFloat(LINES[i].fund_point) })
    }

    let stockPoints: Array<IBaseChartModel> = []
    for (let i = 0; i < point_number; i++) {
        stockPoints.push({ x: i, y: parseFloat(LINES[i].stock_point) })
    }

    let fundLine: IBaseChartSeries<IBaseChartModel> = {
        data: fundPoints,
        lineStyle: {
            color: '#f00'
        }
    }
    let stockLine: IBaseChartSeries<IBaseChartModel> = {
        data: stockPoints,
        lineStyle: {
            color: '#00f'
        }
    }

    lines.push(fundLine, stockLine)

    return (
        <MultiLine lines={lines} ></MultiLine>
    )

}

export default MultiLineDemo

