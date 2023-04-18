package com.panhe.rnandroid.util

import android.app.Activity
import android.app.Application
import com.facebook.hermes.reactexecutor.HermesExecutorFactory
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.common.LifecycleState
import com.facebook.react.PackageList

/**
 * @author: hepan
 * @date: 2023/4/18
 * @desc: ReactInstanceManager
 */
object ReactInstanceUtil {

    private  var reactInstanceManager: ReactInstanceManager?=null
    fun getBasicManager(act:Activity):ReactInstanceManager{
        val packages: List<ReactPackage> = PackageList(act.application).packages
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // packages.add(MyReactNativePackage())
        // Remember to include them in `settings.gradle` and `app/build.gradle` too.
        return ReactInstanceManager.builder()
            .setApplication(act.application)
            .setCurrentActivity(act)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackages(packages)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .setJavaScriptExecutorFactory(HermesExecutorFactory())
            .build()
    }
}