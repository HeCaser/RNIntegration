import React from 'react';
import { StyleSheet, Text, TextStyle, ScrollView, Button, View } from 'react-native';
import Txt from './Txt';

const SnowBoxDemo = () => {
    return (<ScrollView>
        <Txt cl='#f00' f={14} >我是 文案</Txt>
        <Txt cl='#00f' f={20} bg='#0ff' pl={10} pt={10}>随机文案,打发打发打付款哈发打发阿达地方阿道夫 </Txt>
        <View style={{ width: 10, height: 10, backgroundColor: '#00f', transform: [{ rotate: '45deg' }] }}></View>
    </ScrollView>)
}

export default SnowBoxDemo