package com.panhe.rnandroid.rv

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.facebook.react.ReactInstanceManager
import com.facebook.soloader.SoLoader
import com.panhe.rnandroid.R
import com.panhe.rnandroid.fragment.CustomRNFragment
import com.panhe.rnandroid.util.ConstUtil
import com.panhe.rnandroid.util.ReactInstanceUtil


/**
 * 在 RecyclerView 中展示 RN 条目
 *
 */
class RnItemActivity : AppCompatActivity() {

    companion object {
        const val OVERLAY_PERMISSION_REQ_CODE = 1  // Choose any value
    }

    private lateinit var reactInstanceManager: ReactInstanceManager
    private lateinit var mRv: RecyclerView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rn_item)

        SoLoader.init(this, false)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                val intent = Intent(
                    Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package: $packageName")
                )
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }


        reactInstanceManager = ReactInstanceUtil.getBasicManager(this)

        initView()
    }


    private fun initView() {
        findViewById<RecyclerView?>(R.id.rv).apply {
            mRv = this
            layoutManager = LinearLayoutManager(this@RnItemActivity)
            adapter = RnItemAdapter(mockRnItemDataList(),reactInstanceManager)
            recycledViewPool
        }

    }

    private fun mockRnItemDataList(): List<RnItemData> {
        val list = arrayListOf<RnItemData>()
        for (i in 0 until 2) {
            if (i % 2 == 0) {
                list.add(RnItemData(ConstUtil.RNTestItem2))
            } else {
                list.add(RnItemData(ConstUtil.RNTestItem))
            }
        }
        return list
    }

}