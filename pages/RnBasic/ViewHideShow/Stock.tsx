import React, { useEffect, useState, useMemo, memo } from "react"
import { Alert, Button, View, Text, TextInput } from "react-native"

/**
 * 
 *选股贡献, 参见 dj-rn 个基页模块 FundAchievementStockAnalysis
 * @returns 
 */
const Stock = ({ show = false }) => {

    const [industryDescending, setIndustryDescending] = useState<boolean>(true)

    const content = useMemo(() => {
        return <View>
            <Text>选股贡献</Text>
            <Text>排序状态: {`${industryDescending}`}</Text>

            <Button onPress={() => {
                setIndustryDescending(!industryDescending)
            }} title="点击切换排序状态"></Button>
        </View>
    }, [industryDescending])


    return show ? content : null

}

export default Stock