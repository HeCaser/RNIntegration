import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"

export const FlexDemo = () => {
    return (<ScrollView>
        <View style={{ flex: 1, backgroundColor: 'aliceblue' }}>

            <Text>Flex 使用. 详细用法见官网 https://reactnative.dev/docs/flexbox </Text>
            <Demo1></Demo1>
            <Demo2></Demo2>
            <Demo3></Demo3>
            <Demo4></Demo4>
            <Demo5></Demo5>
            <Demo6></Demo6>
            <Demo7></Demo7>

        </View>
    </ScrollView>)
}

const Demo1 = () => {
    return <View>
        <Text>1. 比例分配宽度 1:2:3 </Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>
    </View>
}


const Demo2 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>2. width = 'auto' 自适应宽度, 剩余空间按需分配 </Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
            <Text style={[styles.box, { width: 'auto', backgroundColor: 'oldlace', height: 30 }]}>自适应宽度</Text>
        </View>
    </View>
}


const Demo3 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>3.1 红色 item flexBasis: 固定宽度 30, flex: 0</Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 0, flexBasis: 30, backgroundColor: 'red' }} />
            <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
        <Text>3.2 红色 item flexBasis: 固定宽度 50%, flex: 0</Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 0, flexBasis: "50%", backgroundColor: 'red' }} />
            <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
        <Text>3.3 红色 item flex: 1, 加上固定宽度 flexBasis = 30, 剩余空间平分 flex:2</Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, flexBasis: 30, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 2, backgroundColor: 'green' }} />
        </View>
    </View>
}

const Demo4 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>4 Item 等分,columnGap = 10 </Text>
        <View style={{ flex: 1, flexDirection: 'row', height: 30, columnGap: 10 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
    </View>
}

const Demo5 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>5 设置容器宽度 80% </Text>
        <View style={{ width: '80%', flexDirection: 'row', height: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
    </View>
}

const Demo6 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>6.1 默认相对布局, 距离容器 left 距离依次为 15 25 35 </Text>
        <View style={{ flex: 1 }}>
            <View style={[styles.box, { left: 15, backgroundColor: 'red' }]} />
            <View style={[styles.box, { left: 25, backgroundColor: 'darkorange' }]} />
            <View style={[styles.box, { left: 35, backgroundColor: 'green' }]} />
        </View>
        <Text>6.2 默认相对布局, 距离容器 top 距离依次为 15 25 35 ,注意:会自动留出其他 Item 所占高度</Text>
        <View style={{ flex: 1, minHeight: 200 }}>
            <View style={[styles.box, { top: 15, backgroundColor: 'red' }]} />
            <View style={[styles.box, { top: 25, backgroundColor: 'darkorange' }]} />
            <View style={[styles.box, { top: 35, backgroundColor: 'green' }]} />
        </View>
    </View>
}

const Demo7 = () => {
    return <View style={{ marginTop: 10 }}>
        <Text>7.1 absolute, 距离容器 top 距离依次为 15 25 35, 距离 left 依次为 15 25 35 与相对布局一样 </Text>
        <View style={{ flex: 1, height: 300 }}>
            <View style={[styles.box, { top: 15, left: 15, backgroundColor: 'red', position: 'absolute' }]} />
            <View style={[styles.box, { top: 25, left: 25, backgroundColor: 'darkorange', position: 'absolute' }]} />
            <View style={[styles.box, { top: 35, left: 35, backgroundColor: 'green', position: 'absolute' }]} />
        </View>

    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
        minHeight: 200,
    },
    box: {
        width: 50,
        height: 50,
    }
})

