import React from "react";
import {Dimensions,View,Text} from 'react-native';

function WindowSizeDemo() {
    const windowWidth = Dimensions.get('window').width;
    return(
        <View>
            <Text> width = {windowWidth}</Text>
        </View>
    )

}

export default WindowSizeDemo