import React, { useEffect, useState, useContext } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';
import { RootTagContext } from 'react-native';
function RnItem2(props) {

    // 获取当前组件的 rootTag
    const rootTag = useContext(RootTagContext);

    useEffect(() => {
        console.log('i am render')
    }, [])


    const [isAddWeChat, setIsAddWeChat] = useState(true)

    const isResult = props.native_data_string // 接收来自 native 端的数据
    return (
        <View>
            <Text style={{ color: '#dd7AFF' }}>RnItem22 </Text>
            <Text style={{ color: '#dd7AFF' }}> rootTag = {rootTag} </Text>
            <Text>从移动端获取的数据 {props.native_data_string}</Text>
            <Text>从移动端获取的数据 rootTag {props.rootTag}</Text>

        </View>
    )
}
export default RnItem2


