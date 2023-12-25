import React, { useEffect, useState, useMemo, memo } from "react"
import { Alert, Button, View, Text, TextInput, StyleSheet } from "react-native"

/**
 * 
 *选股贡献, 参见 dj-rn 个基页模块 FundAchievementStockAnalysis
 * @returns 
 */
const Stock = ({ show = false }) => {

    const [industryDescending, setIndustryDescending] = useState<boolean>(false)

    const content = useMemo(() => {
        let style = industryDescending ? styles.btn_selected : styles.btn_normal
        return <View>
            <Text>选股贡献</Text>
            <Text>排序状态: {`${industryDescending}`}</Text>
            <Text style={style}>{`收益率 ${style.sub_tag}`}</Text>

            <Button onPress={() => {
                setIndustryDescending(!industryDescending)
            }} title="点击切换排序状态"></Button>
        </View>
    }, [industryDescending])


    return show ? content : null

}

const styles = StyleSheet.create({
    btn_selected: {
        backgroundColor: "blue",
        sub_tag: '选中了'
    },
    btn_normal: {
        backgroundColor: "gray",
        sub_tag: ''
    }
})

export default Stock