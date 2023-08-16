import React, { useEffect ,useState} from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

function RnItem(props) {

    const [isAddWeChat, setIsAddWeChat] = useState(true)
    return (
        <View>
            <Text>index =  {props.index}</Text>
            <Text>我的状态 {`${isAddWeChat}`}</Text>
            <Button onPress={()=>{
                setIsAddWeChat(false)
            }} title='点击'></Button>
            <Image source={require('./fund_hot.png')} style={{ width: '100%', height: 120 }} />
        </View>
    )
}
export default RnItem


