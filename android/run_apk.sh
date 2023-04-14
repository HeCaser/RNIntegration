./gradlew assembleDebug
cd app/build/outputs/apk/debug
adb install -r -t app-debug.apk
adb shell am start -n com.panhe.rnandroid/com.panhe.rnandroid.MainActivity