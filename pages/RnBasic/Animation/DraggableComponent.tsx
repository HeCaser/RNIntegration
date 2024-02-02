import React, { useEffect, useRef, useState } from "react"
import { Animated, PanResponder, View } from "react-native"

const DraggableComponent = () => {
    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            // onPanResponderMove: Animated.event([
            //     null,
            //     {
            //         dx: pan.x,
            //         dy: pan.y
            //     }
            // ]),

            onPanResponderMove: (e, gestureState) => {
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