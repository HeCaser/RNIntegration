# W3C React 基础学习
> 注意不是 React Native

https://www.w3schools.com/react/default.asp

2023-04-28
# React Tutorial
- React is a JavaScript library for building user interfaces.

- React is used to build single-page applications.

- React allows us to create reusable UI components.

----


# CarComponent
- 定义 Class Componet
- learn state
- chagne state to rerender

> 总结: Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).
---

# Lifecycle of Component
> Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: ``Mounting``, ``Updating``, and ``Unmounting``.

## Mounting
> Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

## Updating
> A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:
- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

## Unmounting
> The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:
- componentWillUnmount()

---

# React Props
> Demo 见 [LearnProps](./LearnProps.js)

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

```
<Car brand='BYD'></Car>
```

Note: React Props are ``read-only``! You will get an error if you try to change their value.

---
2023-05-04
# React Events
Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

React events are written in ``camelCase`` syntax:

`onClick` instead of `onclick`.

React event handlers are written inside curly braces:

`onClick={shoot}`  instead of `onClick="shoot()"`.

---
# React Conditional Rendering
> 条件渲染
In React, you can conditionally render components.

There are several ways to do this.

## if Statement
```
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
```

## Logical && Operator
```
{cars.length > 0 &&
    <h2>
        You have {cars.length} cars in your garage.
    </h2>
}
```

## Ternary Operator
>三元运算 `condition ? true : false`

` { isGoal ? <MadeGoal/> : <MissedGoal/> }`

---
# React Lists
In React, you will render lists with some type of loop.

The JavaScript `map()` array method is generally the preferred method.

`{cars.map((car) => <Car brand={car} />)}`

## Keys
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.

```
 {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
```
---

# React Forms
> [Demo 查看](./FormLearn.js)

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

You can control changes by adding event handlers in the `onChange` attribute.

We can use the `useState` Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

> 总结: React 组件利用 `useState` 自己存储数据. 

---

# React Router
> 主要用于 Web 导航

---

# React Memo
Using `memo` will cause React to skip rendering a component if its props have not changed.

This can improve performance.

 [MemoLearn](./MemoLearn.js)
 [MemoTodo](./MemoTodo.js)

---
