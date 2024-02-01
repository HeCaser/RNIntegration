import React, { useEffect, useState } from "react"
import { Animated, Easing, StyleSheet, View } from "react-native";

/**
 * 同时进行缩放和旋转的动画
 */
const ScaleRotateAnimation = () => {

  const rotation = new Animated.Value(0);
  const scale = new Animated.Value(1);


  useEffect(() => {
    console.log(`hepan 触发`)

    const anim1 = Animated.timing(
      rotation,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,

      }
    )
    const anim2 = Animated.timing(
      scale,
      {
        toValue: 2,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )

    const anim = Animated.parallel([anim1, anim2])
    Animated.loop(anim, { iterations: -1 }).start()

  }, [rotation, scale])

  // 插值器, 利用 0-1 区间映射为实际使用的值
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ rotate: spin }, { scale: scale }] },
        ]}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    marginTop:300,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 122, 255, 0.8)', // Semi-transparent blue
  },
});

export default ScaleRotateAnimation