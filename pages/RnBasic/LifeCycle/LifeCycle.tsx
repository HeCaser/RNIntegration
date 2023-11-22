import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native'

const LifeCycle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`hepan 渲染结束`)
        setCount(1)
    }, [])

    console.log(`hepan 渲染`)

    if (count > 0) {
        return <View>
            <Text>渲染 count</Text>
        </View>
    }

    return null
}

export default LifeCycle