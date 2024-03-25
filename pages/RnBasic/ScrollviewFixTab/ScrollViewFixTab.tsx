import React, { useEffect, useRef, useState } from "react"
import { View, Text, ScrollView, NativeScrollEvent, Button } from "react-native"
import ScrollviewTab from "./ScrollviewTab"


/**
 * 本例展示 ScrollView 包含多个模块时, 配合 Tab 定位 交互
 * 1. 滚动到特定位置后, 顶部固定展示一个 Tab
 * 2. Tab 选择项随着 ScrollView 滚动而自动切换
 * 3. 根据 Tab 选项点击, 控制 ScrollView 滚动
 */
const ScrollViewFixTab = () => {

    const Banner_Height = 100
    const Tab_Height = 40
    const [isShowFixTab, setIsShowFixTab] = useState(false)

    type ItemBean = {
        name: string,
        color: string,
        index: number
    }

    const itemArray = [
        {
            'name': 'Banner',
            'color': 'red',
            index: 0
        },
        {
            'name': '模块1',
            'color': 'blue',
            index: 1
        },
        {
            'name': '模块2',
            'color': 'gray',
            index: 2
        },
        {
            'name': '模块3',
            'color': 'yellow',
            index: 3
        },
        {
            'name': '模块4',
            'color': 'pink',
            index: 4
        }
    ]

    const scrollViewRef = useRef<ScrollView>(null);
    const itemPosition = useRef<number[]>([]).current;
    const [scrollTop, setScrollTop] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const onScroll = (e) => {
        const scrollTop = e.nativeEvent.contentOffset.y;
        setScrollTop(scrollTop)
    }

    // 根据滚动距离改变逻辑
    useEffect(() => {
        // 是否展示 FixTab
        setIsShowFixTab(scrollTop > Banner_Height)

        // 修改 Tab 选中项
        let targetIndex = selectedIndex
        itemPosition.slice(1).map((it, index) => {
            if (scrollTop + Tab_Height + 10 > it) {
                targetIndex = index
            }
        })
        setSelectedIndex(targetIndex)

    }, [scrollTop])

    const Item = (item: ItemBean) => {
        return <View style={{ backgroundColor: item.color, height: item.index === 0 ? Banner_Height : 300 }} onLayout={(e) => {
            let y = e.nativeEvent.layout.y
            // 记录每个模块的位置
            itemPosition[item.index] = Number(y.toFixed(2))
            console.log(`hepan index = ${item.index} y = ${JSON.stringify(itemPosition)}`)
        }}>
            <Text style={{ alignContent: 'center', textAlign: 'center', textAlignVertical: 'center', height: '100%' }}>{item.name}</Text>
        </View>

    }
    return (<View style={{ height: '100%' }}>
        <Text style={{ padding: 10 }}>ScrollViewFixTab-Demo</Text>

        <View style={{ height: '100%' }}>
            <ScrollView
                ref={scrollViewRef}
                onScroll={onScroll}>
                {itemArray.splice(0, 1).map(it => Item(it))}
                {/* 滚动控件中的 Tab */}
                <ScrollviewTab onTabClick={(index) => {
                    scrollViewRef.current?.scrollTo({ y: itemPosition[index + 1] - Tab_Height })
                }} />
                {itemArray.splice(0).map(it => Item(it))}
                <Text style={{ height: 400, textAlignVertical: 'center', textAlign: 'center' }}>Bottom</Text>
            </ScrollView>

            {/* 顶部固定 Tab */}
            <View style={{ position: 'absolute', width: '100%' }}>
                {isShowFixTab && <ScrollviewTab selectedIndex={selectedIndex} onTabClick={(index) => {
                    scrollViewRef.current?.scrollTo({ y: itemPosition[index + 1] - Tab_Height })

                }}></ScrollviewTab>}
            </View>
        </View>


    </View>)

}

export default ScrollViewFixTab