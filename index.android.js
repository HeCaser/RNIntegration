import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RnException from './pages/simulate_error/RnException.js'
import NativeCallBack from './pages/native_call/index.tsx'
import HomePage from './pages/homepage/index.js';
import RnItem from './pages/RnItem/index.js';
import RnItem2 from './pages/RnItem2/index.js';
import ChartDemo from './pages/SVG/index.js';
import WindowSizeDemo from './pages/RnBasic/WindowSizeDemo/index.js';
import RnBasicDemo from './pages/RnBasic/RnBasicDemo.js';
import SnowBoxDemo from './pages/SnowBox/index.tsx';
import Wrapper from './pages/RnItem/Wrap.js';
import MemoDemo from './pages/MemoDemo/MemoDemo.js';
import LifeCycle from './pages/RnBasic/LifeCycle/LifeCycle.tsx';
import TestDemo from './pages/TestDemo/TestDemo.tsx';
import CustomHookDemo from './pages/RnBasic/CustomHook/CustomHookDemo.tsx';
import ViewHideShow from './pages/RnBasic/ViewHideShow/ViewHideShow.tsx';
import NativeModuleDemo from './pages/RnBasic/NativeModule/NativeModuleDemo.tsx';

AppRegistry.registerComponent( 'MyReactNativeApp', () => HomePage, );
AppRegistry.registerComponent( 'RnException', () => RnException, );
AppRegistry.registerComponent( 'NativeCallBack', () => NativeCallBack, );
AppRegistry.registerComponent( 'RnItem', () => RnItem, );
AppRegistry.registerComponent( 'RnItem2', () => RnItem2, );
AppRegistry.registerComponent( 'ChartDemo', () => ChartDemo, );
AppRegistry.registerComponent( 'WindowSizeDemo', () => WindowSizeDemo, );
AppRegistry.registerComponent( 'RnBasicDemo', () => RnBasicDemo, );
AppRegistry.registerComponent( 'SnowBoxDemo', () => SnowBoxDemo, );
AppRegistry.registerComponent( 'MemoDemo', () => MemoDemo, );
AppRegistry.registerComponent( 'LifeCycle', () => LifeCycle, );
AppRegistry.registerComponent( 'TestDemo', () => TestDemo, );
AppRegistry.registerComponent( 'CustomHookDemo', () => CustomHookDemo, );
AppRegistry.registerComponent( 'ViewHideShow', () => ViewHideShow, );
AppRegistry.registerComponent( 'NativeModuleDemo', () => NativeModuleDemo, );

