import React, { useEffect ,useState} from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

function RnItem2(props) {

    const [isAddWeChat, setIsAddWeChat] = useState(true)
    return (
        <View>
            <Text style={{color:'#dd7AFF'}}>RnItem22 </Text>
            <Text>从移动端获取的数据 {props.native_data}</Text>
        </View>
    )
}
export default RnItem2


