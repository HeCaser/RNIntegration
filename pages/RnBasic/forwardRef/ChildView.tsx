import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { View, Text } from "react-native";


const ChildView = forwardRef((props, ref) => {

    const [activeTab, setActiveTab] = useState(0);

    // 利用 useImperativeHandle 暴露方法和属性
    useImperativeHandle(ref, () => ({
        setActiveTab: (active: number) => {
            setActiveTab(active);
        },
        activeTab
    }));

    return (<View>
        <Text>{`我是传入的 titles = ${JSON.stringify(props)}`}</Text>
        <Text>{`activeTab - ${activeTab}`}</Text>
    </View>)

});


export default ChildView