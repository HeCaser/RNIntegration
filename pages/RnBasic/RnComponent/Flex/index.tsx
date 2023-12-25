import React, { useEffect, useState } from "react"
import { ScrollView, View, Text } from "react-native"

export const FlexDemo = () => {
    return (<ScrollView>
        <View style={{ flex: 1, backgroundColor: 'gray' }}>

            <Text>Flex 使用</Text>
            <Demo1></Demo1>

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