package com.panhe.rnandroid

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import com.panhe.rnandroid.activity.RnCustomFragmentActivity
import com.panhe.rnandroid.activity.RnFragmentActivity
import com.panhe.rnandroid.rnitem.RnItemViewActivity
import com.panhe.rnandroid.rv.RnItemActivity
import com.panhe.rnandroid.util.SpUtil

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        findViewById<View>(R.id.tvGoRN).setOnClickListener {
            startActivity(Intent(this@MainActivity, RnCustomFragmentActivity::class.java))
        }

        findViewById<View>(R.id.tvGoRNFragment).setOnClickListener {
            startActivity(Intent(this@MainActivity, RnFragmentActivity::class.java))
        }
        findViewById<View>(R.id.tvGoRvView).setOnClickListener {
            startActivity(Intent(this@MainActivity, RnItemViewActivity::class.java))
        }


        val etRn = findViewById<EditText>(R.id.etRn)
        // 取历史记录赋值
        val cacheName = SpUtil.getRnName(this)
        if (cacheName.isNotEmpty()) {
            etRn.setText(cacheName)
        }

        findViewById<View>(R.id.tvSmRN).setOnClickListener {
            val name = etRn.text.toString().trim()
            if (name.isNotEmpty()) {
                SpUtil.saveRnName(this, name)
                val bundle = Bundle().apply {
                    putString(RnFragmentActivity.COMPONENT_NAME_KEY, name)
                }
                startActivity(
                    Intent(
                        this@MainActivity,
                        RnCustomFragmentActivity::class.java
                    ).apply {
                        putExtras(bundle)
                    })
            }
        }
    }

    /**
     * RN 动态列表页
     */
    fun goRvRn(view: View) {
        startActivity(Intent(this@MainActivity, RnItemActivity::class.java))
    }
}