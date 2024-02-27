import { vi } from '@faker-js/faker';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';

export interface ToastProps {
    message: string;
    isVisible: boolean;
    onHide?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onHide }: ToastProps) => {
    const Duration = 600
    const startTop = 0
    const endTop = 56

    const fadeAnim = new Animated.Value(0)
    const moveAnim = new Animated.Value(startTop)

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: startTop,
            left: 0,
            right: 0,
            alignItems: 'center',
          
            padding: 10,
        },
        message: {
            color: 'white',
            textAlign:'center',
            verticalAlign:'middle',
            minHeight:40,
            backgroundColor: 'blue',
            paddingLeft:10,
            paddingRight:10,
            marginLeft:16,
            marginRight:16,
            borderRadius:48,
            fontSize:14

        },
    });

    useEffect(() => {
        if (isVisible) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    easing: Easing.linear,
                    duration: Duration,
                    useNativeDriver: false,
                }),
                Animated.timing(moveAnim, {
                    toValue: endTop,
                    easing: Easing.linear,
                    duration: Duration,
                    useNativeDriver: false,
                })]).start(hideToast)

        }
    }, [isVisible]);

    const hideToast = () => {

        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: Duration,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
            Animated.timing(moveAnim, {
                toValue: startTop,
                easing: Easing.linear,
                duration: Duration,
                useNativeDriver: false,
            })
        ]).start(onHide)

    };

    if (!isVisible) {
        return null
    }

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim, top: moveAnim }]}>
            <Text style={styles.message}>{message}</Text>
        </Animated.View>
    );
};


export default Toast;
