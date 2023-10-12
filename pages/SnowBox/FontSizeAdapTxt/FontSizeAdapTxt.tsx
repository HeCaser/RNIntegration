import React from "react";
import { FONT_TYPE, FontSizeAdapProps, SizeProps, TXT_TYPE } from "./props";
import Txt from "../Txt";

/**
 * 
 * 字号自适应 Txt
 * 雪球 App 字体等级与本身 Type 共同确定字号
 */
const FontSizeAdapTxt = ({ style, children, txtType, appFontSize, ...props }: FontSizeAdapProps) => {

    const getFontSize = () => {
        try {
            // 组件类型
            let type = txtType || TXT_TYPE.title

            // 字号等级 共四种
            let fontType = FONT_TYPE.def
            switch (`${appFontSize}`) {
                case '1':
                    fontType = FONT_TYPE.small
                    break
                case '3':
                    fontType = FONT_TYPE.mid
                    break
                case '4':
                    fontType = FONT_TYPE.large
                    break
            }

            // 字号大小
            let fontSize = SizeProps[type].size[fontType-1]
            return fontSize

        } catch (error) {
            return 16
        }

    }

    // 新属性, 覆盖外层 noAuto 和 f 的值
    const newProps = {
        noAuto: true,
        f: getFontSize()
    }

    return (<Txt style={style} {...props} {...newProps}>
        {children}
    </Txt>)
}

export default FontSizeAdapTxt