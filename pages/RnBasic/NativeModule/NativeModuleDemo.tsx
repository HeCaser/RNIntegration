import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"

import { NativeModules } from 'react-native';

const NativeModuleDemo = () => {
    const { CalendarModule } = NativeModules;

    const test = () => {
        // 调用 Native 侧, CalendarModule 中的 createCalendarEvent() 方法
        CalendarModule.createCalendarEvent('testName', 'testLocation');
    }

    return <View>
        <Text>测试 Native Module</Text>
        <Button onPress={test} title="点击测试"   color="#841584"></Button>

    </View>
}

export default NativeModuleDemo