import Svg, { Line, Polyline, Circle } from 'react-native-svg';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LINES from './DATA.json'

function BaseChart() {

  const [width, setWidht] = useState(0)
  const height = 100

  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidht(width)
  }

  function renderLine() {

    if (width <= 0) {
      return null
    }
    let size = LINES.length
    let span = width / size
    const minY = Math.min(...LINES.map(point => parseFloat(point.fund_point)))
    const maxY = Math.max(...LINES.map(point => parseFloat(point.fund_point)))
    const ySpan = maxY - minY

    let points = LINES.map((point, index) => `${index * span},${height - (parseFloat((point.fund_point) - minY) / ySpan * height)}`).join(' ')
    return <Polyline 
    fill={"none"}
    points={points} 
    strokeWidth={1} 
    strokeLinejoin='round'
     stroke={"#f00"}/>
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
