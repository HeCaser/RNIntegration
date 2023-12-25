import React, { useEffect, useMemo, useRef, useState } from "react"
import { Alert, Button, View, Text, TextInput } from "react-native"
import Stock from "./Stock"
import Time from "./Time"

/**
 * 目的, 实现点击按钮切换 View 时, 子 View 的状态可以保持. 
 * 参加基金详情页业绩球解: 当择时贡献 与 选股贡献相互切换时, 选股贡献中的排序状态可以保持
 * 
 * 结论: Time 与 Stock 组件用到了 memo 缓存, 实测无需 memo , 子组件仍然可以正确保留 industryDescending 状态值
 */
const ViewHideShow = () => {

    const [index, setIndex] = useState(-1)

    const show = (child_index: number) => child_index === index

    return <View>
        <Text>点击按钮控制 View 的展示和隐藏, View 切换后保持各自状态</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Button onPress={() => { setIndex(0) }} title="View1" color={'darkorange'} ></Button>
            <Button onPress={() => { setIndex(1) }} title="View2" color={'gray'}></Button>
            <Button onPress={() => { setIndex(2) }} title="View3"></Button>

        </View>
        <Time show={show(0)} ></Time>
        <Stock show={show(1)} ></Stock>

    </View>
}

export default ViewHideShow