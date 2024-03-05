import { createContext } from "react";

export interface GlobalScrollableProps {
  /** 是否为水平滑动，默认为垂直滑动，同 ScrollView.horizontal，适用所有联动ScrollView */
  horizontal?: boolean
  /** onScroll 回调频率，同 ScrollView.scrollEventThrottle */
  scrollEventThrottle?: number
  /** 是否显示水平滑动指示器，默认 false，适用所有联动ScrollView */
  showsHorizontalScrollIndicator?: boolean
  /** 是否显示垂直滑动指示器，默认 false，适用所有联动ScrollView */
  showsVerticalScrollIndicator?: boolean
  /** 同 ScrollView.alwaysBounceHorizontal，适用所有联动ScrollView */
  alwaysBounceHorizontal?: boolean
  /** 同 ScrollView.alwaysBounceVertical，适用所有联动ScrollView */
  alwaysBounceVertical?: boolean
  /** 同 ScrollView.bounces，适用所有联动ScrollView */
  bounces?: boolean
  /** 分组的属性，用于支持多组联动 */
  propsOfGroup?: { [key: string]: GlobalScrollableProps }
}

export const defaultGlobalScrollViewProps: GlobalScrollableProps = {
  horizontal: false,
  scrollEventThrottle: 16,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}

export class LinkedScrollHandler {
  registerId: number = -1

  groupKey?: string

  handleScroll?: (options: { x?: number, y?: number, horizontal?: boolean }) => void
}

export interface LinkedScrollableViewRef {
  registerId: number
  setRegisterId: (number) => void
  groupKey?: string;
  scrollTo(options: { x?: number | undefined; y?: number | undefined; animated?: boolean | undefined }): void;
}

interface LinkedScrollViewsContextValue {
  registerScrollView: (scrollViewRef: LinkedScrollHandler, groupKey?: string) => number;
  unregisterScrollView: (registerId: number, groupKey?: string) => void;
  scrollViewProps: (groupKey?: string) => GlobalScrollableProps;
  setCurrentRegisterId: (registerId: number, groupKey?: string) => void;
  handleScroll: (offset: { x?: number, y?: number }, registerId: number, groupKey?: string) => void;
  scrollToTop: (groupKey?: string) => void;
}

export const LinkedScrollViewsContext = createContext<LinkedScrollViewsContextValue>({
  registerScrollView: () => 0,
  unregisterScrollView: () => {},
  scrollViewProps: () => defaultGlobalScrollViewProps,
  setCurrentRegisterId: () => {},
  handleScroll: () => {},
  scrollToTop: () => {},
});

export interface LinkedGroupProps {
  groupKey?: string
}