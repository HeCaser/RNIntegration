import { vi } from '@faker-js/faker';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onHide }: ToastProps) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        if (isVisible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                easing: Easing.inOut(Easing.ease),
                duration: 1500,
                useNativeDriver: true,
            }).start(() => {
                hideToast()
            });
        }
    }, [isVisible]);

    const hideToast = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            onHide();
        });

    };

    if (!isVisible) {
        return null
    }
    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Text style={styles.message}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 56, // Adjust as needed
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
    },
    message: {
        color: 'white',
    },
});

export default Toast;
