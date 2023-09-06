import Svg, { Line, Polyline, Circle } from 'react-native-svg';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LINES from './DATA.json'

function BaseChart() {

  const [width, setWidht] = useState(0)

  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidht(width)
  }

  function renderLine() {

    if (width === 0) {
      return null
    }

    return <Polyline></Polyline>
  }

  return (
    <View width={"100%"} height={160} style={{ borderColor: '#0ff', borderWidth: 1 }} onLayout={onLayout} >
      <Svg height="100%" width="100%" >
        {renderLine()}
      </Svg>
    </View>
  )
}

export default BaseChart
