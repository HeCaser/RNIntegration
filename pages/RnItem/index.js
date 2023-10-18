import React, { useEffect, useRef, useState } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

function RnItem(props) {

    const a = useRef(0)
    const [isAddWeChat, setIsAddWeChat] = useState(true)

    function hh() {
        console.log('hepan 哈哈')
    }
    useEffect(() => {
        console.log('hepan 哈哈66')
    },[])

    a.current +=1
    
    return (
        <View>
            <Text style={{ color: '#007AFF' }}>RnItem </Text>
            <Text>我的状态 {`${isAddWeChat}`}</Text>
            <Text>Native 传递的参数 param = {`${props.param}`}</Text>
            <Text>a = {`${a.current}`}</Text>
            <Button onPress={() => {
                setIsAddWeChat(!isAddWeChat)
            }} title='我是 RnItem'></Button>
            <Image source={require('./fund_hot.png')} style={{ width: '100%', height: 120 }} />
        </View>
    )
}
export default RnItem


