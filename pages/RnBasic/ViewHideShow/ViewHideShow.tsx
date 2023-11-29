import React, { useEffect, useMemo, useRef, useState } from "react"
import { Alert, Button, View, Text, TextInput } from "react-native"
import ChideView from "./ChildeView"

const ViewHideShow = () => {

    const [index, setIndex] = useState(-1)
    

    return <View>
        <Text>点击按钮控制 View 的展示和隐藏, View 切换后保持各自状态</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Button onPress={() => { setIndex(0) }} title="View1" color={'darkorange'} ></Button>
            <Button onPress={() => { setIndex(1) }} title="View2" color={'gray'}></Button>
            <Button onPress={() => { setIndex(2) }} title="View3"></Button>

        </View>

        <ChideView show={index === 0} index={index}></ChideView>
        <ChideView show={index === 1} index={index}></ChideView>
        <ChideView show={index === 2} index={index}></ChideView>

    

    </View>
}

export default ViewHideShow