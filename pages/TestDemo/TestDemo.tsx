import { type } from "os";
import React, { useState, useEffect } from "react";
import { Button, View } from 'react-native'
import { number } from "yargs";

const TestDemo = () => {



    class MySafe {
        private secretKey = 12345;
    }

    class St {
        static a = 0
    }



    const test = () => {
        const s = new Date("2023-11")
        

        // Not allowed during type checking
        console.log(`通过静态属性获取1 = ${s.getHours()}`);
        
    }
    return <View>
        <Button onPress={test} title='RN 测试按钮'></Button>
    </View>
}

export default TestDemo
