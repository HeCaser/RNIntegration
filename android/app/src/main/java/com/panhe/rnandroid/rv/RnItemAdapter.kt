package com.panhe.rnandroid.rv

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.panhe.rnandroid.R
import kotlin.random.Random

/**
 * @author: hepan
 * @date: 2023/8/15
 * @desc: 适配器
 */
class RnItemAdapter(private val dataList: List<RnItemData>, val manager: ReactInstanceManager) :
    RecyclerView.Adapter<RnItemAdapter.MyViewHolder>() {

    private var count = 0
    val pool = ReactRootViewPool()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        println("hepan holder 创建总数 ${++count}")
        return MyViewHolder(
            LayoutInflater.from(parent.context).inflate(R.layout.rn_item, parent, false),
            manager,
            pool
        )
    }

    override fun getItemCount(): Int {
        return dataList.size
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val bean = dataList[position]
        holder.loadOrUpdateView(bean)
    }

    override fun onViewRecycled(holder: MyViewHolder) {
        super.onViewRecycled(holder)
        pool.putReactRootView(holder.mReactRootView)
        println("hepan 回收了 ${holder.mReactRootView?.jsModuleName}")

    }

    class MyViewHolder(
        itemView: View,
        val manager: ReactInstanceManager,
        val pool: ReactRootViewPool
    ) :
        RecyclerView.ViewHolder(itemView) {
        private var reactViewContainer: ViewGroup
        var mReactRootView: ReactRootView? = null
        private var tvInfo: TextView
        private var tvTest: TextView

        init {
            reactViewContainer = itemView.findViewById(R.id.reactViewContainer)
            tvInfo = itemView.findViewById(R.id.tvInfo)
            tvTest = itemView.findViewById(R.id.tvTest)
            tvTest.visibility = View.VISIBLE
            tvTest.setOnClickListener { testFund() }

        }

        fun loadOrUpdateView(bean: RnItemData) {

            if (mReactRootView == null) {
                mReactRootView = ReactRootView(reactViewContainer.context)
                mReactRootView?.startReactApplication(manager, bean.componentName)
                reactViewContainer.addView(mReactRootView)
            } else {
                val moduleName = mReactRootView?.jsModuleName
                if (bean.componentName != moduleName) {
                    var rnView = pool.getReactRootView(bean.componentName)
                    if (rnView == null) {
                        rnView = ReactRootView(reactViewContainer.context)
                        rnView.startReactApplication(manager, bean.componentName)

                        println("hepan 复用 view 不同类型 - 创建新的")
                    } else {
                        println("hepan 复用 view 不同类型 - 缓存获取")
                    }
                    reactViewContainer.removeAllViews()
                    reactViewContainer.addView(rnView)
                    mReactRootView = rnView
                } else {
                    println("hepan 复用 view 相同类型")
                }
            }
        }

        private fun testFund() {
            mReactRootView?.apply {
                var prop = appProperties
                if (prop == null) {
                    prop = Bundle()
                }
                val msg = if (Random.nextBoolean()) "1" else "2"

                prop.putString("native_data_string", "$msg")
                prop.putString("rootTag", "${mReactRootView?.rootViewTag}")
                appProperties = prop
            }
        }
    }


}