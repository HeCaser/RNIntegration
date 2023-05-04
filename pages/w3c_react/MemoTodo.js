import React from 'react'
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { memo } from "react";

const MemoTodo = ({ todos }) => {
    console.log("MemoTodo render");
    return (
        <>
            <Text>MemoTodo</Text>
            {todos.map((todo, index) => {
                return <Text  key={index}>TODO NAME: {todo}</Text>
            })}
        </>
    )
}


// 利用 memo 包裹则不会触发务必要的刷新
export default memo(MemoTodo)