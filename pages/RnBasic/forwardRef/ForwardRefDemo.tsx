import React, { forwardRef, useEffect, useRef, useState } from "react"
import { View, Text, Button } from "react-native"
import ChildView from "./ChildView"

const ForwardRefDemo = () => {

    // 定义持有的对象, 与 ChildView 中 useImperativeHandle 返回的对象一致, 也可以不定义具体类型, 直接调用 tabItemRef.current?.***() 相关方法也可
    interface TabCallBack {
        setActiveTab: (active: number) => void;
        activeTab: number;
    }
    const tabItemRef = useRef<TabCallBack>(null);

    return <View>
        <Text>测试</Text>
        <Button title="点击调用子 View 方法" onPress={() => {
            tabItemRef.current?.setActiveTab(100)
        }}></Button>
        <ChildView title='标题' param='params' ref={tabItemRef}></ChildView>

    </View>
}


export default ForwardRefDemo