import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import AddView from './pages/add_view/index.js';
import NativeCallBack from './pages/native_call/index.tsx'
import Component from './pages/w3c_react/CarComponent.js';
import LifecycleComponent from './pages/w3c_react/LifecycleComponent.js';
import LearnProps from './pages/w3c_react/LearnProps.js';
import FormLearn from './pages/w3c_react/FormLearn.js';
import MemoLearn from './pages/w3c_react/MemoLearn.js';

AppRegistry.registerComponent( 'MyReactNativeApp', () => MemoLearn, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'AddView', () => AddView, );
AppRegistry.registerComponent( 'NativeCallBack', () => NativeCallBack, );