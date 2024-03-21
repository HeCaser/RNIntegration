import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { TsLearnDemo } from "../TsLearn/Demo"
import ForwardRefDemo from "../RnBasic/forwardRef/ForwardRefDemo"

const HomePage2 = () => {
    return <View>
        <Text>我是首页</Text>
        <TsLearnDemo></TsLearnDemo>
        <ForwardRefDemo></ForwardRefDemo>
    </View>
}

export default HomePage2