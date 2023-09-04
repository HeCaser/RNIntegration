import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleDemo from './component/circle';
import DraggableProgressBar from '../CustomComponent/DraggableProgressBar';

function ChartDemo(props) {

    return (
        <View>
            <CircleDemo></CircleDemo>
            <DraggableProgressBar
                style={{ flex: 1, backgroundColor: '#fff' }}
                height={50}
                onProgressUpdate={(newProgress) => console.log(newProgress)}
            />
        </View>
    )
}
export default ChartDemo

