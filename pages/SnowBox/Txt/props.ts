import { TextProps } from "react-native";

export interface TxtTypes extends TextProps {
    /**
    * suffix 后缀 , 模拟功能扩展, 在文案末尾加上后缀
    */
    suffix?: string;
}