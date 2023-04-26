import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RNSubscriptions from '../../common/js/RNSubscriptions';

// 测试页面, native 发送事件, JS 测监听接收
const NativeCallBack = () => {
  const [param, setParam] = useState('');

  useEffect(() => {

    const viewWillAppearSubscription = RNSubscriptions.viewWillAppear((data: string) => {
      console.log('hepan Rn 侧接收到回调 ' + data)
      setParam(data)
    });

    return () => {
      viewWillAppearSubscription.remove();
    };
  }, []);

  return (
    <View>
      <Text>这是一个测试页面, 用于监听 ntive 发送的事件 , 接收参数</Text>
      <Text style={{ marginTop: 20 }}>接收参数: {param}</Text>

    </View>

  )
}

export default NativeCallBack

