import React from 'react';
import { StyleSheet, Text, TextStyle, ScrollView } from 'react-native';
import Txt from './Txt';

const SnowBoxDemo = () => {

    return (<ScrollView>
        <Txt cl='#f00' f={14} hh={7}>我是 Txt</Txt>
        <Txt cl='#00f' f={20}>我是 MarkDown</Txt>
    </ScrollView>)
}

export default SnowBoxDemo