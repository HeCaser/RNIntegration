import React from "react";
import { View, Text, AppState, Button, DevSettings } from 'react-native'

function RnBasicDemo() {

    function testFunc() {
        DevSettings.reload()
        // DevSettings.addMenuItem('Show Secret Dev Screen', () => {
        //     Alert.alert('Showing secret dev screen!');
        // });
    }
    return (
        <View>
            <Text>{AppState.currentState}</Text>
            <Button title="测试按钮" onPress={() => {
                testFunc()
            }}></Button>
        </View>
    )
}

export default RnBasicDemo