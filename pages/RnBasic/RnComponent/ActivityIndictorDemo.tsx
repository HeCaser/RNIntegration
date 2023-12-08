import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, ActionSheetIOS, ActivityIndicator } from "react-native"

export const ActivityIndictorDemo = () => {

    return <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='small' color="blue"></ActivityIndicator>
        <ActivityIndicator size='large' color="purple"></ActivityIndicator>
        <ActivityIndicator size='small' color="red"></ActivityIndicator>
        <ActivityIndicator size='large' color="black"></ActivityIndicator>
    </View>
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around"
    }

})
