import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native'

export const TextDemo = () => {
    return (<View>
        <Demo1></Demo1>
    </View>)
}


const Demo1 = () => {
    const titleText = "Bird's Nest"
    const bodyText = 'This is not really a bird nest.';
    return (
        <View>
            <Text>1. Text 嵌套, 不同格式</Text>
            <Text style={styles.baseText}>
                <Text style={styles.titleText} >
                    {titleText}
                    {'\n'}
                </Text>
                <Text numberOfLines={5}>{bodyText}</Text>
            </Text>
            
            <Text style={{ fontWeight: 'bold', marginTop: 6 }} accessibilityLabel="adfafs">
                i am bold
                <Text style={{ color: 'red', backgroundColor: '#ddd', fontWeight: 'normal' }}>  i am red with bg</Text>
            </Text>

            <Text onPress={()=>{alert('click')}} style={{marginTop:10}}>Text 支持点击, click me</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});