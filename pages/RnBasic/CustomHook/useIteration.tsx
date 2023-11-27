import React, { useCallback, useState } from "react";

/**
 * 
 * 自定义 Hook, 接收一个数组一个初始值, 返回数组[当前值,获取下一个,获取上一个]
 * @returns 
 */
const useIteration = (items: any[], initIndex: number) => {

    const [index, setIndex] = useState(initIndex)

    /**
     * 获取下一个,注意数组越界
     * useCallback 可以稍微提高些性能(在父组件因为其他状态刷新时, 若 index 不变,则不会重新创建 next 方法)
     */
    const next = useCallback(() => {
        if (index === items.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }, [index])

    const pre = useCallback(() => {
        if (index === 0) {
            setIndex(items.length - 1)
        } else {
            setIndex(index - 1)
        }
    }, [index])

    return [items[index], next, pre]

}

export default useIteration