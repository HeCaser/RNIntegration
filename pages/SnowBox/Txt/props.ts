import { TextProps } from "react-native";

export interface TxtTypes extends TextProps {
  /**
   * 颜色简称, 最终转换为 color
   */
  cl?:string; 
  f?:number;
}

export const fontProps = {
  cl: { property: 'color' },
  f: { property: 'fontSize' },
};