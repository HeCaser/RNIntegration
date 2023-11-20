package com.panhe.rnandroid.activity

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.ReactRootView
import com.panhe.rnandroid.R
import com.panhe.rnandroid.util.ReactInstanceUtil

/**
 * 非全 RN 实现的页面,而是某个模块使用 RN View
 */
class RnItemViewActivity : AppCompatActivity() {
    lateinit var frameLayout: FrameLayout
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rn_item_view)
        val addRn = findViewById<View>(R.id.addRn)
        frameLayout = findViewById(R.id.frameLayout)
        addRn.setOnClickListener { addRnView() }
    }

    private fun addRnView() {
        val rn = ReactRootView(this)
        val manager = ReactInstanceUtil.getBasicManager(this)
        rn.startReactApplication(manager, "RnItem")

        manager.onHostResume(this)
        frameLayout.removeAllViews()
        frameLayout.addView(rn)
    }
}