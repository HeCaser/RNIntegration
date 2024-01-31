import React, { useEffect, useState, useContext } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';
import { RootTagContext } from 'react-native';
function RnItem2(props) {

    const rootTag = useContext(RootTagContext);

    const [isHavePwd, setHavePwd] = useState(props.native_data_string);

    useEffect(() => {
        console.log('i am render')
        hh()
    }, [])

    function hh() {
        let d =  Date()
        alert(typeof d)
    }
    const [isAddWeChat, setIsAddWeChat] = useState(true)

    return (
        <View>
            <Text style={{ color: '#dd7AFF' }}>RnItem22 </Text>
            <Text style={{ color: '#dd7AFF' }}> rootTag = {rootTag} </Text>
            <Text>从移动端获取的数据 {props.native_data_string}</Text>
            <Text>从移动端获取的数据 rootTag {props.rootTag}</Text>

            <Text>{isHavePwd}</Text>
        </View>
    )
}
export default RnItem2


