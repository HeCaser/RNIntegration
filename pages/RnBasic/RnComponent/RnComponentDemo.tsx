import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"
import { ActivityIndictorDemo } from "./ActivityIndictorDemo"
import { FlatListDemo } from "./FlatList/FlatListDemo"

const RnComponentDemo = () => {

    return <View style={{ flex: 1 }}>
        <FlatListDemo></FlatListDemo>
    </View>
}

export default RnComponentDemo