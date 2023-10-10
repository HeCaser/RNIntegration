import React from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';
import { TxtTypes, ViewProps } from '../props/props';

/***
 * Txt 是对 Text 的封装, 
 */
const Txt = ({ style, children, ...props }: TxtTypes) => {

    const newProps = { ...props };

    let fontStylesObj: TextStyle = {
        fontSize: 16
    };

    Object.keys(newProps).map((item) => {
        // 转换属性简称
        if (item in ViewProps) {
            console.log(`hepan key = ${item} realkey = ${ViewProps[item].property}`)
            fontStylesObj[ViewProps[item].property] = newProps[item]
        }
    })

    console.log(`hepan res = ${JSON.stringify(fontStylesObj)}`)

    return (
        <Text style={[fontStylesObj, style]}>{children}</Text>
    )
}

export default Txt