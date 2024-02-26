import { vi } from "@faker-js/faker";
import React, { useEffect, useState } from "react"
import { Animated, View, StyleSheet, Dimensions, Easing,Text } from "react-native"
const { width } = Dimensions.get('window');

export const ToastView = () => {

    const moveAnim = new Animated.Value(26);

    const opacityAnim = new Animated.Value(0);

    const [visible,setVisible] = useState(true)
    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(moveAnim, {
              toValue: 56,
              duration: 200,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]).start(()=>{
            setTimeout(() => {
                setVisible(false)
            }, 1000);
          
          });
    }, [])

    if(!visible){
        return null
    }

    return (
        <View style={styles.container} pointerEvents="none">
            <Animated.View style={[styles.textContainer, { top: moveAnim, opacity: opacityAnim }]}>
                    <Text>我是 Toast</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        maxWidth: width * 0.8,
        alignSelf: 'center',
        position: 'absolute',
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    displayNone: {
        display: 'none',
    },
    textWrap: {
        maxWidth: width * 0.8 - 58,
    },
});