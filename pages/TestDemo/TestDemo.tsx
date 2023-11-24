import { type } from "os";
import React, { useState, useEffect } from "react";
import { Button, View } from 'react-native'
import { number } from "yargs";

const TestDemo = () => {

    interface Checkable {
        check(name: string): boolean;
      }

    class Name implements Checkable{
       
        check(name:string):boolean{
            return true

        }
    }
       
    const test = () => {
        alert()

    }
    return <View>
        <Button onPress={test} title='RN 测试按钮'></Button>
    </View>
}

export default TestDemo