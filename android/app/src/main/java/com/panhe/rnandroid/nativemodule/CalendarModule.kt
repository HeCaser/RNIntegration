package com.panhe.rnandroid.nativemodule

/**
 * @author: hepan
 * @date: 2023/11/30
 * @desc: CalendarModule
 */
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

class CalendarModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    init {
        Log.d("hepan", "CalendarModule init")
    }

    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("hepan", "method called with name: $name and location: $location")
    }
}