import Svg, { Circle } from 'react-native-svg';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function CircleDemo() {

    return (
        <View >
            <Svg height="50%" width="50%" viewBox='0 0 50 50' style={{ backgroundColor: '#0ff' }}>
                <Circle cx={25} cy={25} r={25} fill={"#f00"}></Circle>
            </Svg>
        </View>
    )
}

export default CircleDemo

// 说明
/**
 * <Svg> 宽高
 * 1 height="50%" width="50%", 百分比设置宽高,具体值依赖于 <View > 的宽高
 * 2 实测 <View > 的宽高会根据 <Svg> height="n%" 的 n 的值不同而变动. 这里不影响 Demo 演示
 */


/**
 * viewBox
 * 1 viewBox 由四个值组成, 代表 min-x, min-y, width , height
 * 2 height = 50 时, circle 半径 r = 25 , 则 circle 会和 Svg 边界相切
 */

