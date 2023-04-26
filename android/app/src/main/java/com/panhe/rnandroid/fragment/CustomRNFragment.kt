package com.panhe.rnandroid.fragment

import android.content.Context
import android.os.Bundle
import android.os.Handler
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.facebook.hermes.reactexecutor.HermesExecutorFactory
import com.facebook.react.PackageList
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.soloader.SoLoader
import com.panhe.rnandroid.BuildConfig
import com.panhe.rnandroid.util.RNCommonUtil

/**
 * @author: hepan
 * @date: 2023/4/26
 * @desc: 自主管理 Manager 的 RN Fragment, 有别于 ReactFragment
 *
 * @see com.facebook.react.ReactFragment
 */
class CustomRNFragment : Fragment() {

    private lateinit var reactRootView: ReactRootView
    private lateinit var reactInstanceManager: ReactInstanceManager

    private var resumeTime = 1
    companion object {
        fun newInstance(componentName: String, launchOptions: Bundle?): CustomRNFragment {
            val fragment = CustomRNFragment()
            val args = Bundle()
            args.putString("arg_component_name", componentName)
            launchOptions?.apply {
                args.putBundle("arg_launch_options", launchOptions)
            }
            fragment.arguments = args
            return fragment
        }
    }


    override fun onAttach(context: Context) {
        super.onAttach(context)
        SoLoader.init(context, false)
        reactRootView = ReactRootView(context)
        val packages: List<ReactPackage> = PackageList(activity?.application).packages
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // packages.add(MyReactNativePackage())
        // Remember to include them in `settings.gradle` and `app/build.gradle` too.
        reactInstanceManager = ReactInstanceManager.builder()
            .setApplication(activity?.application)
            .setCurrentActivity(activity)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackages(packages)
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .setJavaScriptExecutorFactory(HermesExecutorFactory())
            .build()
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return reactRootView
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        var mainComponentName: String? = null
        var launchOptions: Bundle? = null
        if (this.arguments != null) {
            mainComponentName = this.requireArguments().getString("arg_component_name")
            launchOptions = this.requireArguments().getBundle("arg_launch_options")
        }
        if (mainComponentName == null) {
            throw IllegalStateException("Cannot loadApp if component name is null")
        } else {
            reactRootView.startReactApplication(reactInstanceManager, mainComponentName, null)
        }
    }

    override fun onResume() {
        super.onResume()
        this.reactInstanceManager.onHostResume(activity)
        RNCommonUtil.sendEventToJs(reactInstanceManager,"viewWillAppear", "页面可见了,次数 =${resumeTime++}")
    }

    override fun onPause() {
        super.onPause()
        this.reactInstanceManager.onHostPause(activity)
    }

    override fun onDestroy() {
        super.onDestroy()
        this.reactInstanceManager.onHostDestroy(activity)
    }

    fun getRnManager(): ReactInstanceManager {
        return reactInstanceManager
    }
}