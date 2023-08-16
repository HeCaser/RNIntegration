package com.panhe.rnandroid.rv

import android.content.Context
import android.view.View
import com.facebook.react.ReactRootView

/**
 * @author: hepan
 * @date: 2023/8/16
 * @desc: ReactRootView 缓存池
 */
class ReactRootViewPool {

    companion object {
        private const val DEFAULT_MAX_SCRAP = 5
    }

    internal class ScrapData {
        val mScrapHeap = ArrayList<ReactRootView>()
        var mMaxScrap = DEFAULT_MAX_SCRAP
    }

    private var mScrap = HashMap<String, ScrapData>()

    fun clear() {
        mScrap.entries.forEach {
            it.value.mScrapHeap.clear()
        }
    }

    fun putReactRootView(rnView: ReactRootView?) {
        if (rnView?.reactInstanceManager != null) {
            val moduleName = rnView.jsModuleName
            val scrapData = getScrapDataForName(moduleName)
            if (scrapData.mMaxScrap <= scrapData.mScrapHeap.size) {
                return
            }
            scrapData.mScrapHeap.add(rnView)

        }
    }

    fun getReactRootView(moduleName: String):ReactRootView?{
        val scrapData = mScrap[moduleName]
        if (scrapData != null && scrapData.mScrapHeap.isNotEmpty()) {
            val scrapHeap: ArrayList<ReactRootView> = scrapData.mScrapHeap

            for (i in scrapHeap.size - 1 downTo 0) {
                if (!isAttachedToTransitionOverlay(scrapHeap[i])) {
                    return scrapHeap.removeAt(i)
                }
            }
        }
        return null
    }

    private fun isAttachedToTransitionOverlay(view: View): Boolean {
        return view.parent != null
    }

    private fun getScrapDataForName(name: String): ScrapData {
        return if (mScrap.containsKey(name)){
            mScrap[name]!!
        }else{
            val scrap = ScrapData()
            mScrap[name] = scrap
            scrap
        }
    }


}