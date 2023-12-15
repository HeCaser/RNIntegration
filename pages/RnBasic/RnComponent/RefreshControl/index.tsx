import { fa } from "@faker-js/faker"
import React, { memo, useCallback, useEffect, useState } from "react"
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native"

export const RefreshControlDemo = () => {

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])
    return <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>}
        >
            <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});