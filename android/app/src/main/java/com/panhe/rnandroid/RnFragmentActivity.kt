package com.panhe.rnandroid

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.panhe.rnandroid.util.ConstUtil

/**
 * RN 页面依赖 Fragment 加载
 */
class RnFragmentActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rn_fragment)

        val reactNativeFragment = ReactFragment.Builder()
            .setComponentName(ConstUtil.NATIVE_CALLBACK)
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