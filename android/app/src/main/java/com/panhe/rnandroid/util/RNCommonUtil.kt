package com.panhe.rnandroid.util

import android.annotation.SuppressLint
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule


/**
 * @author: hepan
 * @date: 2023/4/26
 * @desc: RN 工具类
 */
object RNCommonUtil {

    /**
     * 发送事件给 JS 侧
     * JS 侧 监听事件:  DeviceEventEmitter.addListener(eventName,(eventData: string) => {})
     */
    fun sendEventToJs(manager: ReactInstanceManager?, eventName: String, eventData: String) {
        val ctx = manager?.currentReactContext
        // ReactContext 是异步创建 ,可能为空
        if (ctx == null) {
            manager?.addReactInstanceEventListener(object :
                ReactInstanceManager.ReactInstanceEventListener {
                override fun onReactContextInitialized(context: ReactContext) {
                    context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit(eventName, eventData)
                    manager.removeReactInstanceEventListener(this)
                }
            })
        } else {
            manager?.currentReactContext?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                ?.emit(eventName, eventData)

        }
    }
}