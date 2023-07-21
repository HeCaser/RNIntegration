package com.panhe.rnandroid.activity

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.panhe.rnandroid.R
import com.panhe.rnandroid.util.ConstUtil

/**
 * 采用 Facebook 包中封装好的 ReactFragment, 使用起来方便些
 * 注意:
 * 1. ReactFragment 依赖于 Application 实现 ReactApplication 接口
 * 2. ReactFragment 默认加载本地的 metro server(debug 模式). 不成功会加载 assets 目录下的 index.android.bundle
 */
class RnFragmentActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rn_fragment)

        val reactNativeFragment = ReactFragment.Builder()
            .setComponentName(ConstUtil.MAIN_REACT_NAME)
            .setLaunchOptions(getLaunchOptions("test message"))
            .build()

        supportFragmentManager
            .beginTransaction()
            .add(R.id.reactNativeFragment, reactNativeFragment)
            .commit()
    }

    private fun getLaunchOptions(message: String) = Bundle().apply {
        putString("message", message)
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }
}