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
import LineDemo from './component/line';
import DraggableView from '../CustomComponent/DraggableView';
import BaseChart from '../CustomComponent/chart/BaseChart';
import MultiLineDemo from '../CustomComponent/chart/MultiLine';

function ChartDemo(props) {

    return (
        <View>
            {/* <CircleDemo></CircleDemo>
            <LineDemo></LineDemo>
            <DraggableView></DraggableView> */}
            <MultiLineDemo></MultiLineDemo>
        </View>
    )
}
export default ChartDemo

