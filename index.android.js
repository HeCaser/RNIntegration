import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import AddView from './pages/add_view/index.js';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World RN Page for Android</Text>
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

AppRegistry.registerComponent( 'MyReactNativeApp', () => HelloWorld, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'AddView', () => AddView, );