import React, { useEffect, useState } from "react"
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
        padding: 16
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

const Item = (user: User, add: () => void) => <View style={styles.item}>
    <Text>姓名: {user.username}</Text>
    <Text>邮箱: {user.email}</Text>
    <View style={{ flexDirection: 'row' }}>
        <Text style={{ alignSelf: 'center' }}>Star: {user.star}</Text>
        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 10 }} onPress={add}>
            <Text style={styles.button}>增加</Text>
        </TouchableOpacity>
    </View>

</View>


export const FlatListDemo = () => {

    const [user, setUser] = useState(USERS)

    const addUser = () => {
        let newList = [createRandomUser(), ...user]
        setUser(newList)
    }
    return <View style={{ flex: 1 }}>
        <Button onPress={addUser} title="添加"></Button>
        <FlatList data={user} renderItem={({ item, index }) => Item(item, () => {
            let newList = user.map(it => it.userId === item.userId ? { ...it, star: item.star!! + 1 } : { ...it })
            setUser(newList)
        })} keyExtractor={item => item.userId}>

        </FlatList>

    </View>
}