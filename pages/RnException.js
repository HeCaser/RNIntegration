import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

const RnException = () => {

  const ok = () => {
    alert('it is ok')
  }

  const throwNPE = () => {
    var a = null
    var b = a.substring(0, 1)
  }
  
  const throwRangeNPE = () => {
   throw RangeError('an rangeError happen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>RnException</Text>

      <Button
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        onPress={ok}
        title="测试正常功能"
      >
      </Button>
      <View style={styles.divide}></View>
      <Button
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        onPress={throwNPE}
        title="模拟空指针异常"
      >
      </Button>
      <View style={styles.divide}></View>
      <Button
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        onPress={throwRangeNPE}
        title="模拟数组越界异常"
      >
      </Button>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  divide: {

    height: 10,

  },
});

export default RnException