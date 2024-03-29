package com.panhe.rnandroid.util

import android.annotation.SuppressLint
import android.app.Activity
import android.app.Application
import com.facebook.hermes.reactexecutor.HermesExecutorFactory
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.common.LifecycleState
import com.facebook.react.PackageList
import com.panhe.rnandroid.nativemodule.MyAppPackage

/**
 * @author: hepan
 * @date: 2023/4/18
 * @desc: ReactInstanceManager
 */
object ReactInstanceUtil {

    @SuppressLint("StaticFieldLeak")
    private lateinit var reactInstanceManager: ReactInstanceManager
    fun getBasicManager(act: Activity): ReactInstanceManager {
        if (!this::reactInstanceManager.isInitialized) {
            val packages: List<ReactPackage> = PackageList(act.application).packages.apply {
                // 自定义 Native Module
                add(MyAppPackage())
            }

            val builder = ReactInstanceManager.builder()
                .setApplication(act.application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .setCurrentActivity(act)
                .addPackages(packages)
                .setUseDeveloperSupport(ConstUtil.IS_DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .setJavaScriptExecutorFactory(HermesExecutorFactory())

            // 主要耗时处
            reactInstanceManager = builder.build()
        }
        println("hepan 返回管理器 = ${reactInstanceManager.hashCode()}")
        return reactInstanceManager
    }
}