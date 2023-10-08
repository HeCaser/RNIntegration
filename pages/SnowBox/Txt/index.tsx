import React from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';
import { TxtTypes, fontProps } from './props';

/***
 * Txt 是对 Text 的封装, 
 */
const Txt = ({ children, ...props }: TxtTypes) => {

    const newProps = { ...props };

    let fontStylesObj: TextStyle = {
        fontSize:16
    };

    Object.keys(newProps).map((item) => {
        if (item in fontProps) {
            console.log(`hepan key = ${item} realkey = ${fontProps[item].property}`)
            // 转换 cl 属性为 color
            if (item === 'cl' && newProps.cl) {
                fontStylesObj[fontProps[item].property] = newProps[item]
            }
            // 转换 f 属性为 fontSize
            if(item === 'f' && newProps.f){
                fontStylesObj[fontProps[item].property] = newProps[item]
            }

        }
    })

    console.log(`hepan res = ${JSON.stringify(fontStylesObj)}`)


    return (
        <Text style={[fontStylesObj]}>{children}</Text>
    )
}

export default Txt