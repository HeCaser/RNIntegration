import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import NativeCallBack from './pages/native_call/index.tsx'
import HomePage from './pages/homepage/index.js';
import RnItem from './pages/RnItem/index.js';
import RnItem2 from './pages/RnItem2/index.js';
import ChartDemo from './pages/SVG/index.js';
import WindowSizeDemo from './pages/RnBasic/WindowSizeDemo/index.js';

AppRegistry.registerComponent( 'MyReactNativeApp', () => HomePage, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'NativeCallBack', () => NativeCallBack, );
AppRegistry.registerComponent( 'RnItem', () => RnItem, );
AppRegistry.registerComponent( 'RnItem2', () => RnItem2, );
AppRegistry.registerComponent( 'ChartDemo', () => ChartDemo, );
AppRegistry.registerComponent( 'WindowSizeDemo', () => WindowSizeDemo, );