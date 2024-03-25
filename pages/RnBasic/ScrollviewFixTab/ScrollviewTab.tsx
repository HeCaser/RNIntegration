import React, { useEffect, useRef, useState } from "react"
import { View, Text, Button } from "react-native"

const ScrollviewTab = ({ selectedIndex = -1, onTabClick = ((index: number) => { }) }) => {

    const tabList = useRef(new Array(4).fill('').map((_, index) => `Tab${index + 1}`))

    const TabItem = (item: string, index: number) => {
        return (<View style={{ backgroundColor: 'gray' }}>
            <Button title={item} onPress={
                () => {
                    onTabClick(index)
                }
            } color={selectedIndex === index ? 'red' : 'gray'}></Button>
        </View>)
    }

    return (<View style={{ flexDirection: 'row', justifyContent: 'space-between', rowGap: 10 }}>

        {tabList.current.map((it, index) => {
            return TabItem(it, index)
        })}
    </View>)
}

export default ScrollviewTab