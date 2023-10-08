import React from 'react';
import { StyleSheet, Text, TextStyle, ScrollView, Button } from 'react-native';
import Txt from './Txt';

const SnowBoxDemo = () => {

    const hh = () => {
        alert(19)
    }
    return (<ScrollView>
        <Txt cl='#f00' f={14} >我是 Txt</Txt>
        <Txt cl='#00f' f={20} style={{backgroundColor:'#0ff'}}>我是 MarkDown</Txt>
        <Button onPress={hh} title='点击我' style={{transform: [{ rotate: '45deg' }] ,}}></Button>
    </ScrollView>)
}

export default SnowBoxDemo