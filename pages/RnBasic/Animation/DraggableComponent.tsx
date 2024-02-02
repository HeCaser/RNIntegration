import React, { useEffect, useRef, useState } from "react"
import { Animated, PanResponder, View } from "react-native"

const DraggableComponent = () => {
    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            // Animated.event : 解析参数,并调用 setValue 方法. 
            // onPanResponderMove: Animated.event([
            //     null, // 忽略第一个参数
            //     {
            //         dx: pan.x,   // 解析 gestureState dx, 并设置给 pan.x
            //         dy: pan.y
            //     }
            // ]),

            onPanResponderMove: (e, gestureState) => {
                // 解析 gestureState 得到移动的坐标, 设置给 pan
                const { dx, dy } = gestureState
                pan.setValue({ x: dx, y: dy })
            },

            onPanResponderRelease: () => {
                // 手势结束, 位置还原
                Animated.timing(pan, {
                    toValue: { x: 0, y: 0 },
                    duration: 400,
                    useNativeDriver: false

                }).start()
            }

        })
    ).current

    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
            }}
            {...panResponder.panHandlers}
        >
            {/* Your draggable component content goes here */}
            <View
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'blue',
                    borderRadius: 100,
                }}
            />
        </Animated.View>
    );

}

export default DraggableComponent