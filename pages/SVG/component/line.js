import Svg, { Line } from 'react-native-svg';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function LineDemo() {

    const [width, setWidth] = useState(0)

    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        setWidth(width)
    }

    return (
        <View width={"100%"} height={60} onLayout={onLayout}>
            <Svg height="90%" width="100%" style={{ backgroundColor: '#0ff' }}>
                <Line x1={0} y1={25} x2={width} y2={25} strokeWidth={0.5} stroke="red" > </Line>
            </Svg>
        </View>
    )
}

export default LineDemo