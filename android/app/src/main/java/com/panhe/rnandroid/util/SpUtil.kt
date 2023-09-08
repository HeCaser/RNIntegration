package com.panhe.rnandroid.util

import android.content.Context
import android.content.SharedPreferences

/**
 * @author: hepan
 * @date: 2023/9/8
 * @desc: sp本地存储
 */
object SpUtil {

    private const val KEY_RN_NAME = "key_rn_name"
    lateinit var mSP: SharedPreferences

    fun saveRnName(ctx: Context, name: String) {
        getSp(ctx).edit().putString(KEY_RN_NAME, name).commit()
    }

    fun getRnName(ctx: Context): String {
        return getSp(ctx).getString(KEY_RN_NAME, "")!!
    }


    private fun getSp(ctx: Context): SharedPreferences {
        if (!this::mSP.isInitialized) {
            mSP = ctx.getSharedPreferences("RnApp", Context.MODE_PRIVATE)
        }
        return mSP
    }
}