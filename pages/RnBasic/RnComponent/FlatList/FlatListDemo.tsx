import React, { useEffect, useRef, useState } from "react"
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

import { USERS, User, createRandomUser } from "./interface";

const styles = StyleSheet.create({
    item: {
        padding: 16,
        flexDirection: 'row'
    },
    avator: {
        width: 40,
        height: 40,
        borderRadius: 60,
        alignSelf: 'center',
        backgroundColor:'red'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        color: 'white',
    }
})


export const FlatListDemo = () => {

    const [user, setUser] = useState(USERS)
    const flastList = useRef<FlatList>(null)

    const addUser = () => {
        let newList = [createRandomUser(), ...user]
        setUser(newList)
    }

    const renderItem = (user: User, add: () => void) => {
        return <View style={styles.item}>

            <Image source={{ uri: user.avatar }} style={styles.avator} />

            <View style={{ marginLeft: 12, flex:1}}>
                <Text>姓名: {user.username}</Text>
                <Text>邮箱: {user.email}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ alignSelf: 'center' }}>Star: {user.star}</Text>
                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 10 }} onPress={add}>
                        <Text style={styles.button}>增加</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    }

    const addStar = (item: User) => {
        let newList = user.map(it => it.userId === item.userId ? { ...it, star: item.star!! + 1 } : { ...it })
        setUser(newList)
    }

    const end = () => {
        flastList.current?.scrollToEnd()
    }
    const top = () => {
        flastList.current?.scrollToIndex({ index: 0 })
    }


    return <View style={{ flex: 1 }}>
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button onPress={addUser} title="添加"></Button>
            <Button onPress={end} title="End" ></Button>
            <Button onPress={top} title="Top" ></Button>

        </View>
        <FlatList ref={flastList} data={user} renderItem={({ item, index }) => renderItem(item, () => { addStar(item) })} keyExtractor={item => item.userId} >

        </FlatList>

    </View>
}