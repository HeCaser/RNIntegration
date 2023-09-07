import React from "react";
import {Dimensions,View,Text,useWindowDimensions} from 'react-native';

function WindowSizeDemo() {
    const windowWidth = Dimensions.get('window').width;

    const {height, width} = useWindowDimensions();

    return(
        <View>
            <Text> width = {windowWidth}</Text>
            <Text> width2 = {width}</Text>
        </View>
    )

}

export default WindowSizeDemo