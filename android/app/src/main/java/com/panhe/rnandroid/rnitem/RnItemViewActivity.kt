package com.panhe.rnandroid.rnitem

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.ReactInstanceManager
import com.facebook.react.modules.dialog.DialogModule
import com.panhe.rnandroid.R
import com.panhe.rnandroid.util.ReactInstanceUtil

/**
 * 非全 RN 实现的页面,而是某个模块使用 RN View
 */
class RnItemViewActivity : AppCompatActivity() {
    lateinit var frameLayout: FrameLayout
    private var rnManager: ReactInstanceManager? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rn_item_view)
        val addRn = findViewById<View>(R.id.addRn)
        frameLayout = findViewById(R.id.frameLayout)
        addRn.setOnClickListener { addRnView() }

        // 打开另一个 RnItemViewActivity 页面.
        val tvClick = findViewById<View>(R.id.tvClick)
        tvClick.setOnClickListener { buttonClick() }
    }

    private fun addRnView() {
        rnManager = ReactInstanceUtil.getBasicManager(this)
        val rn = ReactRootViewWrap(this, rnManager!!)
        rn.startReactApplication("RnItem", null)

        frameLayout.removeAllViews()
        frameLayout.addView(rn.getReactRootView())
    }


    private fun buttonClick() {
        startActivity(Intent(this, RnItemViewActivity::class.java))
    }


}