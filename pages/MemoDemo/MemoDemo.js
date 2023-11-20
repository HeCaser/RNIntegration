import React, { useReducer } from "react";
import Cat, { MemoCat } from "./Cat";
import { View,Text, Button } from "react-native";


const MemoDemo =()=>{

    const [cats,addCat] = useReducer((pre,newCat)=>[...pre,newCat],[{name:"猫1"},{name:"猫2"},{name:"猫3"}])
    
    return <View>
        <Text>333</Text>
        {cats.map((cat,index)=>(<Cat key={index} cat ={cat.name} ></Cat>))}
        <Button onPress={()=>{
            let name = `猫${cats.length+1}`
            addCat({name})
        }} title="添加猫咪"></Button>
    </View>
}

export default MemoDemo