import React, { useEffect, useState } from "react"
import { Button, View, Text } from "react-native"
import Toast, { ToastProps } from "./Toast"
export const ToastDemo = () => {
    const [toastProps, setToastProps] = useState({} as ToastProps)

    const showToast = () => {
        setToastProps({ ...toastProps, isVisible: true, message: `Time: ${new Date()}` })
    };

    const hideToast = () => {
        setToastProps({ ...toastProps, isVisible: false })
    };

    return (<View>
        <Button title="Show Toast" onPress={showToast} />
        <Toast message={toastProps.message} isVisible={toastProps.isVisible} onHide={hideToast} />
    </View>)
}