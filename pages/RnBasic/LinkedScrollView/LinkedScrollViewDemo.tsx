import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { LinkedScrollView, LinkedScrollViewsProvider } from "."
import { faker } from "@faker-js/faker"

const LinkedScrollViewDemo = () => {


    const [array, setArray] = useState(new Array(100).fill('').map((_, index) => `${index} - ${faker.internet.userName()}`))

    const getItem = () => {
        return <View >
            {
                array.map(it => <View>
                    <Text style={{ width: 1600 }}>{`名称 = ${it}`}</Text>
                </View>
                )
            }
        </View>
    }
    return (<View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'gray' }} >

        <Text>联动 Demo</Text>
        <LinkedScrollViewsProvider
        horizontal={false} 
        alwaysBounceVertical={true} 
        propsOfGroupp={{ 'table': { horizontal: false, alwaysBounceVertical: false } }}
           
        >

            <View style={{  flexDirection: 'row' }}>
                <LinkedScrollView>
                    {getItem()}
                </LinkedScrollView>
                <LinkedScrollView>
                    {getItem()}
                </LinkedScrollView>
                <LinkedScrollView>
                    {getItem()}

                </LinkedScrollView>
            </View>

        </LinkedScrollViewsProvider>
    </View>)
}

export default LinkedScrollViewDemo