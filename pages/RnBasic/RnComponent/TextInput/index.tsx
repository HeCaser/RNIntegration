import React, { useEffect, useState } from "react"
import { TextInput, View, Text } from "react-native"

export const TextInputDemo = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [count, setCount] = useState(0)
    return (<View>
        <TextInput style={{ borderWidth: 1, padding: 10, margin: 10 }}
            value={text}
            onChangeText={onChangeText}></TextInput>

        <TextInput style={{ borderWidth: 1, padding: 10, margin: 10 }}
            value={number}
            onChangeText={onChangeNumber}
            placeholder="输入数字"
            keyboardType="numeric"
        ></TextInput>
        
        <Text style={{ margin: 10,color:'#000' }} onPress={() => {
            setCount(count + 1)
        }}> 点击增加: {`${count}`}</Text>
    </View>)

}