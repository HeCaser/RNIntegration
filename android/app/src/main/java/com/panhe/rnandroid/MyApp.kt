package com.panhe.rnandroid

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.panhe.rnandroid.util.ConstUtil

/**
 * @author: hepan
 * @date: 2023/4/4
 * @desc: application
 */
class MyApp:Application(),ReactApplication {

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
    }

    private val reactNativeHost =
        object : DefaultReactNativeHost(this) {
            // 是否是开发者模式, RnFragmentActivity 中使用的 ReactFragment 会用到
            override fun getUseDeveloperSupport() = ConstUtil.IS_DEBUG
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).packages.toMutableList()
                // Packages that cannot be autolinked yet can be added manually here
                return packages
            }
        }
    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost
}