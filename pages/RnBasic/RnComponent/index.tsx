import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"
import { ActivityIndictorDemo } from "./ActivityIndictor/ActivityIndictorDemo"
import { FlatListDemo } from "./FlatList/FlatListDemo"
import { KeyboardAvoid } from "./KeyboardAvoid"
import { ModalDemo } from "./ModalDemo"
import { PressableDemo } from "./PressableDemo"
import { RefreshControlDemo } from "./RefreshControl"
import { SectinListDemo } from "./SectionListDemo"

const RnComponentDemo = () => {

    return <View style={{ flex: 1 }}>
        {/* <RefreshControlDemo></RefreshControlDemo> */}
        {/* <ModalDemo></ModalDemo> */}
        <SectinListDemo></SectinListDemo>
    </View>
}

export default RnComponentDemo