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