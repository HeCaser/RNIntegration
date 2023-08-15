package com.panhe.rnandroid.rv

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
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
class RnItemAdapter(val manager: ReactInstanceManager):RecyclerView.Adapter<RnItemAdapter.MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        return MyViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.rn_item,parent,false))
    }

    override fun getItemCount(): Int {
       return 10
    }

    override fun onBindViewHolder(holder: RnItemAdapter.MyViewHolder, position: Int) {
        holder.showRN(manager)
    }

    class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private  var reactRootView:ReactRootView
        init {
             reactRootView = itemView.findViewById<ReactRootView>(R.id.reactRootView)
        }

        fun showRN(manager: ReactInstanceManager){
            reactRootView.startReactApplication(manager, ConstUtil.MAIN_REACT_NAME)
        }
    }
}