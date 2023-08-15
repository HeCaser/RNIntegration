import React, { useEffect} from 'react';
import { AppRegistry, Button, StyleSheet, Text, View ,Image} from 'react-native';

export default RnItem = () => {
   
    return (
        <View>
            <Text>下面是 RN  内容</Text>
            <Image source={require('./fund_hot.png')} style={{width: '100%', height: 120}}/>
        </View>
        
    )
}


