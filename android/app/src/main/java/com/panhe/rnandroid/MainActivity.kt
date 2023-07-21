package com.panhe.rnandroid

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.panhe.rnandroid.activity.RnActivity
import com.panhe.rnandroid.activity.RnExceptionActivity
import com.panhe.rnandroid.activity.RnFragmentActivity

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

//        findViewById<View>(R.id.tvGoRNExe).setOnClickListener {
//            startActivity(Intent(this@MainActivity, RnExceptionActivity::class.java))
//        }
    }
}