import React, { useEffect, useState } from "react"
import { Animated, Text } from "react-native"

/**
 * rn 动画 API 基本用法, 渐入 View
 */
const FadeInAnimation = () => {

    // 初始化透明度 0
    const fadeIn = new Animated.Value(0)

    useEffect(() => {
        Animated.timing(fadeIn, // 需要驱动的动画
            {
                toValue: 1, // 目标值
                duration: 2000, // 时长: 毫秒
                useNativeDriver: true // 使用 Native 驱动
            }).start()

    }, [fadeIn])

    return (
        <Animated.View // Animated.View 包裹实现动画效果
            style={{ alignItems: 'center', height: 100, width: 100, backgroundColor: 'red', opacity: fadeIn }}>
            <Text>这是一个渐入的 View</Text>

        </Animated.View>
    )
}

export default FadeInAnimation