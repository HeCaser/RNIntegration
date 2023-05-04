import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

import MemoTodo from './MemoTodo'
// 每次调用 increment 都会刷新
const Todos1 = ({ todos }) => {
    console.log("Todos1 render");
    return (
        <>
            <Text>Todos1</Text>
            {todos.map((todo, index) => {
                return <Text  key={index}>TODO NAME: {todo}</Text>
            })}
        </>
    )
}


function MemoLearn() {
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <View>
            <Todos1 todos={todos}></Todos1>
            <MemoTodo todos={todos}></MemoTodo>
            <Text>count = {count}</Text>
            <Button onPress={increment} title='++'></Button>
        </View>
    );

}


export default MemoLearn