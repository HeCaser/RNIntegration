import Svg, { Line } from 'react-native-svg';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function LineDemo() {

    const a = 30
    return (
        <View width={"100%"} height={60}>
            <Svg height="90%" width="100%" style={{ backgroundColor: '#0ff' }}>
                <Line x1={0} y1={a} x2={50} y2={25}  strokeWidth={0.5}  stroke="red" > </Line>
            </Svg>
        </View>
    )
}

export default LineDemo