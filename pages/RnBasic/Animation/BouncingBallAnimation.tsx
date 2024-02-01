import React, { useEffect, useState } from "react"
import { Animated, View, StyleSheet } from "react-native";

/**
 * 
 * @returns 上下来回移动的动画
 */
const BouncingBallAnimation = () => {
    const positionY = new Animated.Value(0);

    useEffect(() => {
        const startAnim = Animated.timing(positionY, {
            toValue: 300,
            duration: 1000,
            useNativeDriver: true,
        })
        const backAnim = Animated.timing(positionY, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        })
          
        // 顺序执行, 先向下移动然后回到原来位置
        const anim = Animated.sequence([startAnim, backAnim])
        // 开启循环
        Animated.loop(anim, { iterations: -1 }).start()

    }, [positionY])

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.ball, { translateY: positionY }]} />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
    },
});


export default BouncingBallAnimation