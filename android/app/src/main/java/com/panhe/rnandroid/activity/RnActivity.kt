package com.panhe.rnandroid.activity

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.facebook.soloader.SoLoader
import com.panhe.rnandroid.R
import com.panhe.rnandroid.fragment.CustomRNFragment
import com.panhe.rnandroid.util.ConstUtil


/**
 * 创建自定义 CustomRNFragment , 展示在 RnActivity 中
 */
class RnActivity : AppCompatActivity() {

    companion object {
        const val OVERLAY_PERMISSION_REQ_CODE = 1  // Choose any value
    }

    private var mRnFragment: CustomRNFragment? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        SoLoader.init(this, false)

        setContentView(R.layout.activity_rn)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                val intent = Intent(
                    Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package: $packageName")
                )
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }

        // 设置要展示的页面
        mRnFragment = CustomRNFragment.newInstance(ConstUtil.MAIN_REACT_NAME, null)


        supportFragmentManager
            .beginTransaction()
            .add(R.id.RnContainer, mRnFragment!!)
            .commit()

        findViewById<View>(R.id.tvTest).setOnClickListener {
            runTestFun()
        }
    }


    override fun onResume() {
        super.onResume()
    }

    private fun runTestFun() {
        Toast.makeText(this,"click",Toast.LENGTH_SHORT).show()
        startActivity(Intent(this, RnActivity::class.java))
    }


}