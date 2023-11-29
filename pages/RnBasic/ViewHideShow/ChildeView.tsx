import React, { useEffect, useState, useMemo, memo } from "react"
import { Alert, Button, View, Text, TextInput } from "react-native"
const ChideView = ({ show = false,index = -1 }) => {


    console.log(`hepan render out index = ${index}`)
    if (!show) return null

    const [text,setText] = useState('')
    const v1 = useMemo(() => {
        return <View>
            {console.log(`hepan render inner index = ${index} text=${text}`)}
         
            <TextInput style={{ height: 100, backgroundColor: '#aaa' }} onChangeText={(t)=>setText(t)} value={text}>
            </TextInput>
        </View>
    }, [text])

    return <View>
           <Text>我是第 {index} 个 View</Text>
           {v1}
    </View>
}

export default ChideView