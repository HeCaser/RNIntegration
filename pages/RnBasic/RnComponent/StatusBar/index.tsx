import React, { useEffect, useState } from "react"
import { StatusBarStyle, View } from "react-native"

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;


const StatusBarDemo = () => {

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
      STYLES[0],
    );
    
    return <View>

    </View>
}