package com.panhe.rnandroid.rv

import android.app.Activity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.panhe.rnandroid.R
import com.panhe.rnandroid.util.ConstUtil
import com.panhe.rnandroid.util.ReactInstanceUtil

/**
 * @author: hepan
 * @date: 2023/8/15
 * @desc: 适配器
 */
class RnItemAdapter(val manager: ReactInstanceManager) :
    RecyclerView.Adapter<RnItemAdapter.MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        return MyViewHolder(
            LayoutInflater.from(parent.context).inflate(R.layout.rn_item, parent, false)
        )
    }

    override fun getItemCount(): Int {
        return 21
    }

    override fun onBindViewHolder(holder: RnItemAdapter.MyViewHolder, position: Int) {
        holder.showRN(manager)
    }

    class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private var reactRootView: ReactRootView
        private var tvInfo: TextView
        private var tvTest: TextView

        init {
            reactRootView = itemView.findViewById(R.id.reactRootView)
            tvInfo = itemView.findViewById(R.id.tvInfo)
            tvTest = itemView.findViewById(R.id.tvTest)
            tvTest.setOnClickListener { changeModule() }
            reactRootView.id = View.NO_ID
//            setIsRecyclable(false)
        }

        fun showRN(manager: ReactInstanceManager) {

            if (reactRootView.reactInstanceManager != null) {
                setManager2Null(reactRootView)
            }

            reactRootView.startReactApplication(manager, ConstUtil.RNTestItem)

        }

        private fun setManager2Null(view: ReactRootView) {
            val field = view.javaClass.getDeclaredField("mReactInstanceManager")
            field.isAccessible = true
            field.set(view, null)
        }

        private fun changeModule() {
            val act = reactRootView.context as? Activity
            act?.apply {
                setManager2Null(reactRootView)
                reactRootView.startReactApplication(ReactInstanceUtil.getBasicManager(act), ConstUtil.MAIN_REACT_NAME)
            }

        }
    }


}