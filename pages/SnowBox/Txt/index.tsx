import React from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';
import { TxtTypes } from './props';

/***
 * Txt 是对 Text 的封装, 
 */
const Txt = ({ children, ...props }: TxtTypes) => {

    const {suffix} = props
    const newProps = { f: 14, ...props };
   
    console.log(`hepan res = ${JSON.stringify(newProps)}`)

    return (
        <Text>{children}.{suffix}</Text>
    )
}

export default Txt