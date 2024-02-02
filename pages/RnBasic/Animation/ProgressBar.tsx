import React, { useEffect, useRef, useState } from "react"
import { Animated, PanResponder, View } from "react-native"

/**
 * 
 * @returns ProgressBar
 */
const ProgressBar = () => {
    const pan = useRef(new Animated.ValueXY()).current

    // 手势监听
    const responser = PanResponder.create(
        {
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { moveX: pan.x } // moveX 代表当前触摸点的屏幕坐标
            ])
        }
    )

    return (
        <View style={{ width: '100%', height: 60, backgroundColor: 'gray' }}   {...responser.panHandlers} >
            <Animated.View
                style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
                {...responser.panHandlers}
            >
                <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red', }}></View>
            </Animated.View>
        </View>
    )
}

export default ProgressBar