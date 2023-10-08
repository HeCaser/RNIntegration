import Svg, { Path } from 'react-native-svg';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function PathDemo() {

    const [width,setWidth] = useState(0)

    const getPath = ()=>{
        let cx = width/2
        let h = 20
        let w = 20
        // 左右两个线段,中间一个贝塞尔弧线
        let path = `M${cx-w},${h}L${cx-0.2*w},${h*0.2}Q${cx},0,${cx+0.2*w},${h*0.2}L${cx+w},${h}`
        return path
    }
    return (
        <View width={"100%"} height={60} onLayout={(event)=>{
            const {width} = event.nativeEvent.layout
            setWidth(width)
        }}>
            <Svg height="100%" width="100%" viewBox={`0,0,${width},60`} style={{ backgroundColor: '#0ff' }}>
                <Path
                    d={getPath()}
                    strokeWidth='20'
                    
                />
                 <Path d="M20 10 Q140 40 180 20 T280 30" stroke="#000000" fill="none" style="stroke-width: 2px;"></Path>
            </Svg>
        </View>
    )
}

export default PathDemo
