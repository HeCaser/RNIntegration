import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"

/**
 * 随机分散
 * 模拟随机点同等概率向四个方向移动, 随着时间推移,看最终分布情况
 * @returns 
 */
const RandomDisperse = () => {


    const totalCount = 100
    const [items, setItems] = useState([1, 2, 3])
    type Point = { x: number, y: number }


    const renderItem = (index: number) => {
        console.log(`hepan3`)

        return <View style={{ position: 'absolute', height: 2, width: 2, backgroundColor: "red", marginTop: 10 * index }}></View>
    }

    return <View style={styles.container}>
        {items.map((item, index) => renderItem(index))}
    </View>
}

const width = 300
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginStart: 10,
        width: width,
        height: width,
        backgroundColor: "#0ff",
    }
})

export default RandomDisperse