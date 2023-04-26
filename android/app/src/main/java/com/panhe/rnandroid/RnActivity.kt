package com.panhe.rnandroid

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.soloader.SoLoader
import com.panhe.rnandroid.fragment.CustomRNFragment
import com.panhe.rnandroid.util.ConstUtil
import com.panhe.rnandroid.util.RNCommonUtil


class RnActivity : AppCompatActivity() {

    companion object {
        const val OVERLAY_PERMISSION_REQ_CODE = 1  // Choose any value
    }

    private  var mRnFragment: CustomRNFragment?=null

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

        mRnFragment = CustomRNFragment.newInstance(ConstUtil.NATIVE_CALLBACK, null)

        supportFragmentManager
            .beginTransaction()
            .add(R.id.RnContainer, mRnFragment!!)
            .commit()

        findViewById<View>(R.id.tvTest).setOnClickListener {
            runTestFun()
        }
    }


    private fun runTestFun(){
        RNCommonUtil.sendEventToJs(mRnFragment?.getRnManager(),"viewWillAppear", "额外参数")
    }


}