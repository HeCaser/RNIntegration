import { TextProps } from "react-native";

export interface TxtTypes extends TextProps {
  /**
   * 颜色简称, 最终转换为 color
   */
  cl?: string;
  f?: number,
  // Padding 相关
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  // backgroundColor
  bg?: string;
}

export const ViewProps = {
  cl: { property: 'color' },
  f: { property: 'fontSize' },
  pl: { property: 'paddingLeft' },
  pr: { property: 'paddingRight' },
  pt: { property: 'paddingTop' },
  pb: { property: 'paddingBottom' },
  bg: { property: 'backgroundColor' },
};