import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"

/**
 * 随机分散
 * 模拟随机点同等概率向四个方向移动, 随着时间推移,看最终分布情况
 * @returns 
 */
const RandomDisperse = () => {


    const totalCount = 300
    const [items, setItems] = useState<Point[]>([])
    type Point = { x: number, y: number }

    useEffect(() => {
        let a: Point[] = []
        for (let i = 0; i < totalCount; i++) {
            a.push({ x: 0, y: 0 })
        }
        setItems(a)
    }, [])


    useEffect(() => {
        let intervar = setInterval(() => {
            randomDisPerse()
        }, 300);

        return () => clearInterval(intervar)
    }, [items])

    /**
     * 随机点移动
     */
    const randomDisPerse = () => {
    
        let next = items.map((_item, _index) => {
            return getNewPoint(Math.floor(Math.random() * 4),_item)
        })

        setItems(next)

    }

    /**
     * 获取新坐标
     * @param type   0-3 左上右下
     * @param p 
     */

    const getNewPoint = (type: number, point: Point): Point => {
        let p = { x: point.x, y: point.y }
        switch (type) {
            case 0:
                p.x = p.x-1
                break
            case 1:
                p.y = p.y-1
                break
            case 2:
                p.x = p.x+1
                break
            case 3:
                p.y = p.y+1
                break
            default:
                break

        }
        return p
    }

    const renderItem = (point: Point,index:number) => {

        let center = width / 2.0
        let x = center + point.x
        let y = center + point.y

        return <View style={{ position: 'absolute', height: 2, width: 2, backgroundColor: "red", marginTop: y, marginStart: x }} key={index}></View>
    }

    return <View>
        {/* <Text>{JSON.stringify(items)}</Text> */}
        <View style={styles.container}>
            {items.map((item, index) => renderItem(item,index))}
        </View>
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