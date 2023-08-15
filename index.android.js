import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import AddView from './pages/add_view/index.js';
import NativeCallBack from './pages/native_call/index.tsx'
import UseReducerLean from './pages/w3c_react/UseReducerLean.js';
import MemoTodoFunctionDemo from './pages/w3c_react/MemoTodoFunctionDemo.js';
import UseMemoLearn from './pages/w3c_react/UseMemoLearn.js';
import HomePage from './pages/homepage/index.js';
import RnItem from './pages/RnItem/index.js';

AppRegistry.registerComponent( 'MyReactNativeApp', () => HomePage, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'AddView', () => AddView, );
AppRegistry.registerComponent( 'NativeCallBack', () => NativeCallBack, );
AppRegistry.registerComponent( 'RnItem', () => RnItem, );