import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"
import { ActivityIndictorDemo } from "./ActivityIndictor/ActivityIndictorDemo"
import { FlatListDemo } from "./FlatList/FlatListDemo"
import { KeyboardAvoid } from "./KeyboardAvoid"
import { ModalDemo } from "./ModalDemo"
import { PressableDemo } from "./PressableDemo"
import { RefreshControlDemo } from "./RefreshControl"
import { SectinListDemo } from "./SectionListDemo"
import { FlexDemo } from "./Flex"
import { StatusBarDemo } from "./StatusBar"
import { SwitchDemo } from "./Switch"
import { TextDemo } from "./Text"
import { TextInputDemo } from "./TextInput"
import { WheelPicker } from "./WheelPicker"
import RandomDisperse from "../RandomDisperse/RandomDisperse"
import FadeInAnimation from "../Animation/FadeInAnimation"
import { ToastDemo } from "./Toast"
import LinkedScrollViewDemo from "../LinkedScrollView/LinkedScrollViewDemo"
/**
 * https://reactnative.dev/docs/components-and-apis
 * 
 */
const RnComponentDemo = () => {

    return <View style={{ flex: 1 }}>
        {/* <RefreshControlDemo></RefreshControlDemo> */}
        {/* <ModalDemo></ModalDemo> */}
        {/* <SectinListDemo></SectinListDemo> */}
        {/* <SwitchDemo></SwitchDemo> */}
        {/* <TextDemo></TextDemo> */}
        {/* <RandomDisperse></RandomDisperse> */}
        {/* <ToastDemo></ToastDemo> */}
        <LinkedScrollViewDemo></LinkedScrollViewDemo>
    </View>
}

export default RnComponentDemo