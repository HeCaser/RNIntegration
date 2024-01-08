import React, { useEffect, useState } from "react"
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Button } from "react-native"

/**
 * https://reactnative.dev/docs/keyboardavoidingview
 */
export const KeyboardAvoid = () => {

    return <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                    <Button title="Submit" onPress={() => null} />
                </View>
            </View>
        </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
