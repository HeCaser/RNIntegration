import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const RnException = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>RnException</Text>
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
});

export default RnException