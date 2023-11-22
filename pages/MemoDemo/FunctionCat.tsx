import React, { memo, useEffect } from "react";
import { View, Text, Button } from "react-native";

/**
 * 接收 function 参数
 * @returns 
 */
const FunctionCat = ({ name, meow = f => f }) => {

    useEffect(() => {
        console.log(`hepan-FunctionCat1 ${name} render`)
    })
    return <View>
        <Text >{name}</Text>
        <Button onPress={() => { meow(name.name) }} title="点击调用 function"></Button>
    </View>
}

// export default FunctionCat  // 父组件刷新,  Cat 会刷新
// export default memo(FunctionCat) // 父组件刷新, Cat 也会刷新, 因为接收了 function 参数, 在父组件刷新时, 父组件的 function 会重建, 所以 FunctionCat 的入参会变化
export default memo(FunctionCat, () => true) // 自定义对比函数, 当返回 true 时,代表数据相同(不刷新). 若一直返回 true, 则只会在创建时刷新一次(注意:修改后需要重新加载页面)