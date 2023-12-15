import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"
import { ActivityIndictorDemo } from "./ActivityIndictor/ActivityIndictorDemo"
import { FlatListDemo } from "./FlatList/FlatListDemo"
import { KeyboardAvoid } from "./KeyboardAvoid"
import { ModalDemo } from "./ModalDemo"
import { PressableDemo } from "./PressableDemo"
import { RefreshControlDemo } from "./RefreshControl"

const RnComponentDemo = () => {

    return <View style={{ flex: 1 }}>
        <RefreshControlDemo></RefreshControlDemo>
    </View>
}

export default RnComponentDemo