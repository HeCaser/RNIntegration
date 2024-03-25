import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { TsLearnDemo } from "../TsLearn/Demo"
import ForwardRefDemo from "../RnBasic/forwardRef/ForwardRefDemo"
import ScrollViewFixTab from "../RnBasic/ScrollviewFixTab/ScrollViewFixTab"

const HomePage2 = () => {
    return <View>
        {/* <TsLearnDemo></TsLearnDemo> */}
        {/* <ForwardRefDemo></ForwardRefDemo> */}
        <ScrollViewFixTab></ScrollViewFixTab>
    </View>
}

export default HomePage2