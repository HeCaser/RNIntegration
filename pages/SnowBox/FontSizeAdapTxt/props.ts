import { TxtTypes } from "../props/props"

// 字号等级
export enum FONT_TYPE {
    small = 1, // 小
    def = 2, // 标准
    mid = 3, // 中
    large = 4, //大
};

// 文案类型
export enum TXT_TYPE {
    title = 'title',
    body1 = 'body1',
    body2 = 'body2',
    body3 = 'body3',
    body4 = 'body4',
    body5 = 'body5',
    body6 = 'body6',
    body7 = 'body7',
    body8 = 'body8',
    body9 = 'body9',
}

export const SizeProps = {
    "title": { "size": [22, 24, 26, 28] },
    "body1": { "size": [18, 20, 22, 24] },
    "body2": { "size": [16, 18, 20, 22] },
    "body3": { "size": [15, 16, 18, 20] },
    "body4": { "size": [14, 14, 16, 18] },
    "body5": { "size": [13, 14, 15, 16] },
    "body6": { "size": [12, 12, 13, 14] },
    "body7": { "size": [15, 16, 18, 18] },
    "body8": { "size": [16, 16, 18, 18] },
    "body9": { "size": [14, 16, 18, 18] },
}

export interface FontSizeAdapProps extends TxtTypes {
    txtType?: TXT_TYPE,
    appFontSize?: string | number | null
}