import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { TsTestFunction } from "./TsTestFunction"

export const TsLearnDemo = () => {

    const test = () => {
        TsTestFunction.test()
    }
    
    return (<View>
        <Text>TsLearnDemo</Text>
        <Button title="点击测试" onPress={test}></Button>
    </View>)
}