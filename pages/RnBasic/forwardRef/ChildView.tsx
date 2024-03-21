import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { View, Text } from "react-native";

interface Props {
    titles: string;
    ref?: any;
}
const ChildView: React.FC<Props> = forwardRef(({ titles = '' }, ref) => {

    const [activeTab, setActiveTab] = useState(0);

    useImperativeHandle(ref, () => ({
        setActiveTab: (active: number) => {
            setActiveTab(active);
        },
        activeTab
    }));

    return (<View>
        <Text>{`我是传入的 titles = ${titles}`}</Text>
        <Text>{`activeTab - ${activeTab}`}</Text>
    </View>)

});


export default ChildView