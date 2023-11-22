import React, { useReducer, useState, useCallback } from "react";
import PureCat from "./PureCat";
import { View, Text, Button } from "react-native";
import FunctionCat from "./FunctionCat";


const MemoDemo = () => {

    const [cats, addCat] = useReducer((pre, newCat) => [...pre, newCat], [{ name: "猫1" }, { name: "猫2" }, { name: "猫3" }])
    const [count, setCount] = useState(0)

    const catFunction = () => {
        console.log(`hepan count = ${count}`)
    }
    
    const catFunction2 = useCallback(() => {
        console.log(`hepan count = ${count}`)
    },[])

    return <View>
        <Text>count = {count}</Text>
        {cats.map((cat, index) => (<PureCat key={index} name={cat.name} ></PureCat>))}
        {cats.map((cat, index) => (<FunctionCat key={index} name={cat.name} meow={catFunction}></FunctionCat>))}
        <Button onPress={() => {
            setCount(pre => pre + 1)
        }} title="父组件刷新"></Button>
    </View>
}

export default MemoDemo