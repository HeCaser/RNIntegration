# Android project with ReactNative page

# 目的: 实现在原有 Android 项目中引入 RN 开发的页面

## Environment
- gradle 7.4
- kotlin 1.7.20
- Android Studio Dolphin

---
2023-03-10
## RN 初认知
RN 环境初始化，首个 RN 项目（编译 Android App），查看 Demo: https://github.com/HeCaser/RNProjectForAndroid

---
2023-03-11
## 现有 Android 项目接入 RN

- 官网：https://reactnative.dev/docs/integration-with-existing-apps

- 细节可参考上面的 Demo


### 1. 新建一个文件夹 RNIntegration , 然后新建一个名为 android 的目录, 把现有 Android 项目放在 android 目录中

### 2. 添加 JS 依赖: 在 RNIntegration 目录下新建 `package.json` 文件, 内容如下

```
    {
      "name": "RNProjectForAndroid",
      "version": "0.0.1",
      "private": true,
      "scripts": {
        "start": "react-native start"
      }
    }
```

 在 RNIntegration 目录下执行 `yarn add react-native` 会生成 node_modules 文件夹,里面包含构建工程的所有依赖, 添加进 .gitignore


### 3. Adding React Native to your app

#### 3.1 Configuring Gradle

 settings.gradle 文件修改

```
includeBuild('../node_modules/react-native-gradle-plugin')
```


2023-03-29

build.gradle 文件修改
> commit 9c4ff90d40fd1100595994f95893fcb800394c25. 其中 com.facebook.react 与 gradle 设置有冲突, 这里先去掉

Enable native modules autolinking

App 权限配置

#### 3.2 Code integration

JS 文件
>05c6dc6ebc8e3abd6fe155d9c87cce79aa6357c2

Android 文件
> b95a472eab0b1076b04ce80dab4dbef7c164e6f6


### Test your integration

- 启动 metro : `yarn start`
- Run App

### 成功 load JS 页面

<img  width='120' src='01loadjs.png'>


---
2023-04-03
## 构建 Release 包

### 依赖 react-native-gradle-plugin  + AS  构建
> 如果 Android Studio 依赖了 react-native-gradle-plugin 以及相关插件 'com.facebook.react' 那么可以直接构建 Release App. (被项目未实现)

### 命令行打包 bundle 构建
> 本地 Bundle 适用于 Debug Release 等环境

- 执行下面命令生成 Bundle 包放置在 assets 目录下(注意替换自己的路径)
$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

- 构建 Release App 

---

2023-04-04
## 集成 RN Fragment
commits: 9664510e0b0a5c05a236d4960664e1c56a468153 0fe1b5bc958558f34706e8b6a7495d8d994456b1

---

2023-04-26 
## Native JS 通信
> native 发送 event 与 data 给 JS 侧. 以 Android 为例

### Android 侧
> 通过 `ReactInstanceManager` 获取 `DeviceEventManagerModule` 然后发送事件

```
   manager?.currentReactContext
   ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
   ?.emit(eventName, eventData) 
```
问题: ReactInstanceManager 的 currentReactContext 是异步创建的, 使用时可能为空
解决: 通过回调监听 Context 的创建解决, 详情查看 `com.panhe.rnandroid.util.RNCommonUtil#sendEventToJs`

### JS 侧
>调用 React 提供的方法即可 

// Android 为例
```
import {
  NativeEventEmitter,
} from 'react-native';

  DeviceEventEmitter.addListener(eventName,(data: string) => {
      console.log('hepan Rn 侧接收到回调 ' + data)
      setParam(data)
    })
```

