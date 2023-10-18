
import React, { useEffect, useState } from 'react';
import { View,Text } from 'react-native';


function Wrapper(WrappedComponent) {
    return (props) => {
        // eslint-disable-next-line react/prop-types
        const { version, uid, moduleName, url, model, client = 'xueqiu' } = props;

        useEffect(() => {
            console.log(`hepan wrap useEffect`)

        }, []);

        return (
            <View>
                <Text>Wrapper 包裹了</Text>
                <WrappedComponent {...props} />

            </View>
        );
    };
}

export default Wrapper;
