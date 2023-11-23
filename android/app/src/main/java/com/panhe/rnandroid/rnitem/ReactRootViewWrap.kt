package com.panhe.rnandroid.rnitem

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleOwner
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView

/**
 * @author: hepan
 * @date: 2023/11/23
 * @desc: ReactView组合类 1, 初始化参数 2,感知 Activity 生命周期
 */
class ReactRootViewWrap(val activity: ComponentActivity, val rnManager: ReactInstanceManager) {

    var mReactView: ReactRootView? = null

    init {
        mReactView = ReactRootView(activity)
        // RN 管理器需要感知页面的生命周期从而正确展示 alert 等组件,并在 onDestroy 时释放引用
        activity.lifecycle.addObserver(object : LifecycleEventObserver {
            override fun onStateChanged(source: LifecycleOwner, event: Lifecycle.Event) {
                when (event) {
                    Lifecycle.Event.ON_RESUME -> {
                        rnManager.onHostResume(activity)
                    }
                    Lifecycle.Event.ON_PAUSE -> {
                        rnManager.onHostPause(activity)
                    }
                    Lifecycle.Event.ON_DESTROY -> {
                        rnManager.onHostDestroy(activity)
                    }
                    else -> {}
                }
            }
        })
    }

    fun startReactApplication(moduleName: String, initialProperties: Bundle?) {
        mReactView?.startReactApplication(rnManager, moduleName, initialProperties)
    }

    fun getReactRootView(): ReactRootView? {
        return mReactView
    }
}