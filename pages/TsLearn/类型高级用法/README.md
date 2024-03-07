
在 TS 中, 类型是核心. 有时我们并不能直接定义类型, 而是通过 TS 提供的关键字来形成 Type.

在本例之中, 从一个 json 对象中获取其所有的 key 来作为一个枚举类型 

代码

```ts
type colorStrings = keyof typeof colors;
```

在创建 `colorStrings` 类型的变量时, 编辑器会提示(如下图)

![VS提示](vs提示.png)