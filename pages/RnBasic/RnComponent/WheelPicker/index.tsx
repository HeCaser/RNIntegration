import React, { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"

/**
 * 
 * @returns 利用 RN 基础组件实现一个滚轮组件
 * 
 * 1. 接收一个列表数据并展示
 * 2. 响应滑动相关事件
 * 3. 停止滑动自动定位 item
 *
 */
export const WheelPicker = () => {

    const items = ["标题1", "标题2", "标题3", "标题4"]

    const itemHeight = 40
    const ItemView = (item: string) => {
        return <Text style={{ height: itemHeight, width: '100%' }}>{`${item}`}</Text>
    }
    return <View style={{ height: itemHeight * 3 }}>
        <Text>滚轮选择器1</Text>
        <View style={{}}>
            <View style={{ position: 'absolute', backgroundColor: 'gray', height: itemHeight, width: 1000, marginTop: itemHeight }}>
            </View>

            <ScrollView>
                {ItemView('')}
                {items.map(item => {
                    return ItemView(item)
                })}
                {ItemView('')}
            </ScrollView>


        </View>
    </View>
}