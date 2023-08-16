package com.panhe.rnandroid.rv

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.panhe.rnandroid.R

/**
 * @author: hepan
 * @date: 2023/8/15
 * @desc: 适配器
 */
class RnItemAdapter(private val dataList: List<RnItemData>, val manager: ReactInstanceManager) :
    RecyclerView.Adapter<RnItemAdapter.MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        println("hepan 创建 holder ")
        return MyViewHolder(
            LayoutInflater.from(parent.context).inflate(R.layout.rn_item, parent, false), manager
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
        println("hepan 回收了 ${holder.adapterPosition}")
    }

    class MyViewHolder(itemView: View, val manager: ReactInstanceManager) :
        RecyclerView.ViewHolder(itemView) {
        private var reactViewContainer: ViewGroup
        private var mReactRootView: ReactRootView? = null
        private var tvInfo: TextView
        private var tvTest: TextView

        init {
            reactViewContainer = itemView.findViewById(R.id.reactViewContainer)
            tvInfo = itemView.findViewById(R.id.tvInfo)
            tvTest = itemView.findViewById(R.id.tvTest)
            tvTest.visibility = View.VISIBLE
            tvTest.setOnClickListener { changeModule() }

        }

        fun loadOrUpdateView(bean: RnItemData) {
            if (mReactRootView == null) {
                println("hepan 创建 ReactRootView")
                mReactRootView = ReactRootView(reactViewContainer.context)
                mReactRootView?.startReactApplication(manager, bean.componentName)
                reactViewContainer.addView(mReactRootView)
            } else {
                println("hepan 复用 view")
                tvInfo.setText("roottag = ${mReactRootView?.rootViewTag}\n hash = ${mReactRootView.hashCode()}")
            }


        }


        private fun changeModule() {

        }
    }


}