
/**
 * 折线图Model
 * 可根据业务逻辑继承, 添加所需属性
 */
export interface IBaseChartModel  {
    x?: number | null
    y?: number | null
    value?: number | string | null
    date?: number | string | null
  }
  
  /**
 * 折线配置
 */
export interface IBaseChartSeries<T extends IBaseChartModel> {
    data: T[]
  
    /* 指定折线端点的最大数量, 超出部分截断 */
    maximumSize?: number
  
    /* 指定折线端点的最少数量, 实现分时效果(净值估算) */
    minimalSize?: number
  
    /* 折线样式 */
    lineStyle?: {
      color?: string
      width?: number
      opacity?: number
    }
  
    /* 阴影样式 */
    shadeStyle?: {
      color?: string
      opacity?: number
    } | null
  
    zIndex?: number
  }
  
  