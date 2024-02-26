import React, { ReactNode, useEffect, useState } from "react"
import { StyleSheet, View } from 'react-native';


export interface ToastWrapperProps {
    view: ReactNode | null
}
function ToastWrapper(props: ToastWrapperProps) {

    const { view } = props
    return (
        <View style={styles.rootView} pointerEvents="box-none">
            {view}
        </View>
    );
}


const styles = StyleSheet.create({
    rootView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 999,
        backgroundColor:'red'
    },
});

export default ToastWrapper