import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { TsTestFunction } from "./TsTestFunction"

/**
 * 测试入口
 */
export const TsLearnDemo = () => {
    
    const test = () => {
        // 注意: 当修改了 TsTestFunction 逻辑, 保存后不会立即生效, 需要修改本页面(UI 页面) 才会生效
        TsTestFunction.test()
    }
    return (<View>
        <Text >TsLearnDemo</Text>
        <Button title="点击测试" onPress={()=>{
            test()
        }} ></Button>
    </View>)
}