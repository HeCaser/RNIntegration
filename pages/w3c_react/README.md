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

> 使用 memo 可以优化不必要的刷新

Using `memo` will cause React to skip rendering a component if its props have not changed.

This can improve performance.

 [MemoLearn](./MemoLearn.js)

 [MemoTodo](./MemoTodo.js)

---

# Styling React Using CSS
There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

- Inline styling
- CSS stylesheets
- CSS Modules

## Inline Styling

```
 <h1 style={{color: "red"}}>Hello Style!</h1>
  
```

> ``Note``: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces ``{{}}``.

### camelCased Property Names

> 驼峰命名

Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like ``background-color``, must be written with camel case syntax:

```
   <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
```

### JavaScript Object

> 定义对象

```
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
```

## CSS Stylesheet

> Web 开发使用

You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

Create a new file called "App.css" and insert some CSS code in it:

```
body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}
```

## CSS Modules
Another way of adding styles to your application is to use CSS Modules.

CSS Modules are convenient for components that are placed in separate files.

Create the CSS module with the .module.css extension, example: my-style.module.css.

Create a new file called "my-style.module.css" and insert some CSS code in it:

```
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}
```

Import the stylesheet in your component:
```
import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;
```
---

# React Hooks 

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

## What is a Hook?

> Hooks allow us to "hook" into React features such as state and lifecycle methods.

### Hook Rules
There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

## React useState Hook

[Demo](./UseStateLeanr.js)

> 总结: useState 可以 hook 的通常是数据,可以是基本类型也可以是对象, 每次更新 state 都会产生新的 Data

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.


### import
```
import { useState } from "react";
```

### Initialize

useState accepts an initial state and returns two values:

- The current state.
- A function that updates the state.

```
// we are destructuring the returned values from useState
 const [color, setColor] = useState(""); 
```

### Read State
```
<h1>My favorite color is {color}!</h1>
```

### Update State

```
const [color, setColor] = useState("red");

 <>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
  </>
```

### What Can State Hold

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

### Updating Objects and Arrays in State

When state is updated, the entire state gets overwritten.

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

```
 const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
```

