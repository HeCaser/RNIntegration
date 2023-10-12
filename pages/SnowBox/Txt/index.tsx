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
            fontStylesObj[ViewProps[item].property] = newProps[item]
        }
    })


    return (
        <Text style={[fontStylesObj, style]}>{children}</Text>
    )
}

export default Txt