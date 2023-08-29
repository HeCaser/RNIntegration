package com.panhe.rnandroid

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import com.panhe.rnandroid.activity.RnActivity
import com.panhe.rnandroid.activity.RnExceptionActivity
import com.panhe.rnandroid.activity.RnFragmentActivity
import com.panhe.rnandroid.rv.RnItemActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        findViewById<View>(R.id.tvGoRN).setOnClickListener {
            startActivity(Intent(this@MainActivity, RnActivity::class.java))
        }

        findViewById<View>(R.id.tvGoRNFragment).setOnClickListener {
            startActivity(Intent(this@MainActivity, RnFragmentActivity::class.java))
        }

        val etRn = findViewById<EditText>(R.id.etRn)
        findViewById<View>(R.id.tvSmRN).setOnClickListener {
            val name = etRn.text.toString().trim()
            if (!name.isNullOrEmpty()) {
                val bundle = Bundle().apply {
                    putString(RnFragmentActivity.COMPONENT_NAME_KEY, name)
                }
                startActivity(Intent(this@MainActivity, RnFragmentActivity::class.java).apply {
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