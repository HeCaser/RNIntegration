import React from 'react';
import { StyleSheet, Text, TextStyle, ScrollView, Button, View } from 'react-native';
import Txt from './Txt';

const SnowBoxDemo = () => {
    return (<ScrollView>
        <Txt cl='#f00' f={14} >我是 Txt</Txt>
        <Txt cl='#00f' f={20} style={{backgroundColor:'#0ff'}}>我是 MarkDown</Txt>
        <View style={{width:10,height:10,backgroundColor:'#00f',transform:[{rotate:'45deg'}]}}></View>
    </ScrollView>)
}

export default SnowBoxDemo