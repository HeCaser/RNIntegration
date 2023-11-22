import React, { memo, useEffect } from "react";
import { View, Text, Button } from "react-native";

/**
 * 初始化参数只接收对象参数, 没有 function 参数
 * @param param0 
 * @returns 
 */
const PureCat = ({name}) => {

    useEffect(() => {
        console.log(`hepan-PureCat ${name} render`)
    })
    return <View>
        <Text >{name}</Text>
        {/* <Button onPress={()=>{meow(cat.name)}} title="点击咪咪"></Button> */}
    </View>
}

// export default PureCat  // 父组件刷新,  Cat 会刷新
export default memo(PureCat) // 父组件刷新, Cat 不会刷新