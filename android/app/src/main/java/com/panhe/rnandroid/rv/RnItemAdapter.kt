package com.panhe.rnandroid.rv

import android.app.Activity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.panhe.rnandroid.R
import com.panhe.rnandroid.util.ConstUtil

/**
 * @author: hepan
 * @date: 2023/8/15
 * @desc: 适配器
 */
class RnItemAdapter(val manager: ReactInstanceManager) :
    RecyclerView.Adapter<RnItemAdapter.MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        return MyViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.rn_item, parent, false),manager)
    }

    override fun getItemCount(): Int {
        return 21
    }

    override fun onBindViewHolder(holder: RnItemAdapter.MyViewHolder, position: Int) {
        holder.setProps()
    }

    override fun getItemViewType(position: Int): Int {
        return super.getItemViewType(position)
    }
    override fun onViewRecycled(holder: MyViewHolder) {
        super.onViewRecycled(holder)
    }

    class MyViewHolder(itemView: View, manager: ReactInstanceManager) : RecyclerView.ViewHolder(itemView) {
        private var reactRootView: ReactRootView
        private var tvInfo: TextView
        private var tvTest: TextView

        init {
            reactRootView = itemView.findViewById(R.id.reactRootView)
            tvInfo = itemView.findViewById(R.id.tvInfo)
            tvTest = itemView.findViewById(R.id.tvTest)
            tvTest.visibility = View.VISIBLE
            tvTest.setOnClickListener { changeModule() }
            reactRootView.startReactApplication(manager,ConstUtil.RNTestItem,Bundle().apply {
                putInt("index",position)
            })
        }

        fun setProps() {
            reactRootView.appProperties = Bundle().apply {
                putInt("index",position)
            }
            tvInfo.setText("roottag = ${reactRootView.rootViewTag}\n hash = ${reactRootView.hashCode()}")
        }

        private fun setManager2Null(view: ReactRootView) {
            val field = view.javaClass.getDeclaredField("mReactInstanceManager")
            field.isAccessible = true
            field.set(view, null)
        }

        private fun changeModule() {

        }
    }


}