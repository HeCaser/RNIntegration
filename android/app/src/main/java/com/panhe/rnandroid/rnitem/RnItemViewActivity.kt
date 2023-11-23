package com.panhe.rnandroid.rnitem

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.FrameLayout
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

        // 打开另一个 RnItemViewActivity 页面.
        val tvClick = findViewById<View>(R.id.tvClick)
        tvClick.setOnClickListener { startActivity(Intent(this, RnItemViewActivity::class.java)) }
    }

    private fun addRnView() {
        val manager = ReactInstanceUtil.getBasicManager(this)
        val rn = ReactRootViewWrap(this, manager)
        rn.startReactApplication("RnItem",null)

        frameLayout.removeAllViews()
        frameLayout.addView(rn.getReactRootView())
    }


}