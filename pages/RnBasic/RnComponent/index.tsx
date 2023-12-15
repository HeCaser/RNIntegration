import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"
import { ActivityIndictorDemo } from "./ActivityIndictor/ActivityIndictorDemo"
import { FlatListDemo } from "./FlatList/FlatListDemo"
import { KeyboardAvoid } from "./KeyboardAvoid"

const RnComponentDemo = () => {

    return <View style={{ flex: 1 }}>
        <KeyboardAvoid></KeyboardAvoid>
    </View>
}

export default RnComponentDemo