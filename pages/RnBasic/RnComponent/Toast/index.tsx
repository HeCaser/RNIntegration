import React, { useEffect, useState } from "react"
import { Button, View, Text } from "react-native"
import ToastWrapper from "./ToastWrapper"
import { ToastView } from "./ToastView"
import Toast from "./Toast"
export const ToastDemo = () => {
    const [toastVisible, setToastVisible] = useState(false);

    const showToast = () => {
        console.log(`hepan show`)
        setToastVisible(true);
    };

    const hideToast = () => {
        setToastVisible(false);
    };

    return (<View>
        <Button title="Show Toast" onPress={showToast}  />
        <Toast message="This is a toast message from the top!" isVisible={toastVisible} onHide={hideToast} />
    </View>)
}