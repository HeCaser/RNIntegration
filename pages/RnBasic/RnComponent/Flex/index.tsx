import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"

export const FlexDemo = () => {
    return (<ScrollView>
        <View style={{ flex: 1, backgroundColor: 'aliceblue' }}>

            <Text>Flex 使用. 详细用法见官网 https://reactnative.dev/docs/flexbox </Text>
            <Demo1></Demo1>
            <Demo2></Demo2>

        </View>
    </ScrollView>)
}

const Demo1 = () => {
    return <View>
        <Text>1. 比例分配宽度 1:2:3 </Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>
    </View>
}


const Demo2 = () => {
    return <View>
        <Text>2. width = 'auto' 自适应宽度, 剩余空间按需分配 </Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex:3, backgroundColor: 'green' }} />
            <Text style={[styles.box, { width: 'auto', backgroundColor: 'oldlace' }]}>自适应宽度</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
        minHeight: 200,
    },
    box: {
        width: 50,
        height: 50,
    }
})

