import React from 'react';
import { StyleSheet, Text, TextStyle, ScrollView } from 'react-native';
import Txt from './Txt';

const SnowBoxDemo = () => {

    return (<ScrollView>
        <Txt suffix='txt'>我是 Txt</Txt>
        <Txt suffix='md'>我是 MarkDown</Txt>
    </ScrollView>)
}

export default SnowBoxDemo