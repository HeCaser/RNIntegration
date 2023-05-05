import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import AddView from './pages/add_view/index.js';
import NativeCallBack from './pages/native_call/index.tsx'
import UseStateLearn from './pages/w3c_react/UseStateLeanr.js';

AppRegistry.registerComponent( 'MyReactNativeApp', () => UseStateLearn, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'AddView', () => AddView, );
AppRegistry.registerComponent( 'NativeCallBack', () => NativeCallBack, );