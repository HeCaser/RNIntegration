import React, { useEffect, useState } from "react";
import { View,Text, Button } from "react-native";
import useIteration from "./useIteration";

const CustomHookDemo = ()=>{

    // 控制当前组件组我刷新
    const [selfCount,setSelfCount] = useState(0) 

    const [item,next,pre] = useIteration([0,1,2,3,4],0)

   
    useEffect(()=>{
        console.log(`hepan 选中了 ${item}`)
    },[item])
    

    return <View>
        <Text>用于展示自定义 Hook 使用的 Demo: selfcount = {selfCount}</Text>
        <View>
            <Text>当前展示项 = {item}</Text>
            <Button onPress={next} title="下一个 >"></Button>
            <Button onPress={pre} title="上一个 <"></Button>
        </View>


         <Button onPress={()=>{
            setSelfCount(selfCount+1)
         }} title="自我刷新"></Button>
    </View>
}

export default CustomHookDemo