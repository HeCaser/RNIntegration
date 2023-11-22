[LifeCycle](LifeCycle.tsx)

在 `LifeCycle` 首次渲染时, count = 0, 因此返回 null, 输出日志: 渲染

渲染之后触发 `useEffect`, 代表渲染的 *副作用*, 输出日志: 渲染结束

此时改变 count 值, 从而再次触发渲染, 输入日志: 渲染

因为 `useEffect` 依赖的是空数组 [], 第二次渲染不会再触发