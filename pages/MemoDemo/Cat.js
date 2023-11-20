import React, { memo, useEffect } from "react";
import { View, Text, Button } from "react-native";
const Cat = ({ cat, meow = f => f }) => {

    useEffect(() => {
        console.log(`hepan1 ${cat} render`)
    })
    return <View>
        <Text>{cat}</Text>
        {/* <Button onPress={()=>{meow(cat.name)}} title="点击咪咪"></Button> */}
    </View>
}

export default memo(Cat,()=>false)