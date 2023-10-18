import React, { useEffect, useRef, useState } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

const logmsg = 'hepan lifecycle  '

function RnItem1(props) {

    const a = useRef(0)
    const [isAddWeChat, setIsAddWeChat] = useState(true)

    function hh() {
        console.log('hepan 哈哈')
    }
    useEffect(() => {
        console.log('hepan 哈哈66')
    }, [])

    a.current += 1

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

// class 写法的 RnItem, 验证生命周期
class RnItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            param: props.param,
            show_child: true
        };
        console.log(logmsg + "constructor() ")
    }

    render() {
        console.log(logmsg + "render() ")
        return (
            <View>
                <Text style={{ color: '#007AFF' }}>RnItem Class </Text>
                <Text>Native 传递的参数 param = {`${this.props.param}`}</Text>

                <Image source={require('./fund_hot.png')} style={{ width: '100%', height: 120 }} />
                <Button onPress={() => { this.setState({ show_child: !this.state.show_child }) }} title={`点击改变 child = ${this.state.show_child}`} />
            </View>
        );
    }

}
export default RnItem


