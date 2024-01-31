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

    const [selectIndex, setSelectIndex] = useState(0)

    const itemHeight = 40
    const ItemView = (item: string, index: number) => {
        const color = index === selectIndex ? 'red' : 'green'
        return <Text style={{ height: itemHeight, width: '100%', color: color, textAlign: 'center', textAlignVertical: 'center' }}>{`${item}`}</Text>
    }

    const onScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.y / itemHeight); // Assuming each item has a height of 50
        setSelectIndex(index);
    }
    const onEnd = (event) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.y / itemHeight); // Assuming each item has a height of 50
        setSelectIndex(index);

        console.log(`hepan 选中了 ${index}`)
  
    }
    return <View style={{ height: itemHeight * 3 }}>
        <Text>滚轮选择器</Text>
        <View style={{}}>
            <View style={{ position: 'absolute', backgroundColor: 'gray', height: itemHeight, width: 1000, marginTop: itemHeight }}>
            </View>

            <ScrollView
                snapToInterval={itemHeight}
                showsVerticalScrollIndicator={false}
                onScroll={onScroll}
                onScrollEndDrag={onEnd}>
                {ItemView('', 0)}
                {items.map((item, index) => {
                    return ItemView(item, index)
                })}
                {ItemView('', 0)}
            </ScrollView>


        </View>
    </View>
}