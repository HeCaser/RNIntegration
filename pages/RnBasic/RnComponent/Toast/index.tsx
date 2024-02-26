import React, { useEffect, useState } from "react"
import { Button, View, Text } from "react-native"
import ToastWrapper from "./ToastWrapper"
import { ToastView } from "./ToastView"
export const ToastDemo = () => {
    return (<View>
        <Button onPress={() => {

        }} title="点击弹出tost"></Button>

<Text style={{height:40}}>9s89dfs</Text>
        {
            ToastWrapper({ view: <ToastView></ToastView>})
        }
    </View>)
}