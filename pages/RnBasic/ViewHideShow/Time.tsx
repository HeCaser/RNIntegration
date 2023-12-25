import React, { useEffect, useState, useMemo, memo } from "react"
import { Alert, Button, View, Text, TextInput } from "react-native"

/**
 * 
 * 择时贡献
 * @returns 
 */
const Time = ({ show = false}) => {

    const [industryDescending, setIndustryDescending] = useState<boolean>(true)

    const content = useMemo(() => {
        return <View>
            <Text>择时贡献</Text>
            <Text>排序状态: {`${industryDescending}`}</Text>

            <Button onPress={() => {
                setIndustryDescending(!industryDescending)
            }} title="点击切换排序状态"></Button>
        </View>
    }, [industryDescending])


    return show ? content : null
}

export default Time