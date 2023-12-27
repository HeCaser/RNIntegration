import React, { useEffect, useReducer, useState } from "react"
import { View, Text, Button, Switch, SwitchChangeEvent } from "react-native"

export const SwitchDemo = () => {


    const [enable, setEnable] = useState(false)
    const changeEnable = () => setEnable(!enable)

    /**
     * 当用户试图改变值时触发, 用户可自行管理行为. 优先级低于 onValueChange
     */
    const onChange = (e: SwitchChangeEvent) => {
        let targetValue = e.nativeEvent.value // 期待改变的值, 与当前状态相反
        alert(`当前状态 = ${!targetValue}`)
    }


    return <View>
        <Text>{`enable = ${enable}`}</Text>
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={enable ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={onChange}
            value={enable}
            onValueChange={changeEnable}
        />
        <Button title="点击" onPress={changeEnable}></Button>

    </View>
}