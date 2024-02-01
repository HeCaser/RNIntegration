import React, { useEffect, useState } from "react"
import { Animated, View, Text } from "react-native"

const TranslateAnimation = () => {
    const translateY = new Animated.Value(0)

    useEffect(() => {
        Animated.timing(translateY,
            {
                toValue: 200,
                duration: 1000,
                useNativeDriver: false // Natvie Module 不支持 marginTop 属性
            }).start()

    }, [translateY])

    return (<Animated.View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginTop: translateY
    }}>

        <Text>这是一个竖向移动动画演示</Text>

    </Animated.View>)

}

export default TranslateAnimation