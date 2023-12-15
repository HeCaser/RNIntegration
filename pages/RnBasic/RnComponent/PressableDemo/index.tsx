import React, { useEffect, useState } from "react"
import { View, StyleSheet, Pressable, Text } from "react-native";


export const PressableDemo = () => {

    const [count, setCount] = useState(0)

    function rgb(arg0: number, arg1: number, arg2: number): import("react-native").ColorValue | undefined {
        throw new Error("Function not implemented.");
    }

    return <View style={styles.container}>
        <Pressable onPress={() => {
            setCount(count + 1)
        }}
            onLongPress={() => { alert(`long click`) }}
            // 扩大点击范围
            hitSlop={40}

            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
                },
                styles.wrapperCustom
            ]}>

            {/* 可以根据 pressed 状态设置状态 */}
            {({ pressed }) => (
                <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
            )}
        </Pressable>
        <View style={styles.logBox}>
            <Text testID="pressable_press_console">{`点击次数 ${count}`}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});
