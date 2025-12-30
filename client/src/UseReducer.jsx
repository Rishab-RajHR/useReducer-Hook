import React, { useReducer } from 'react'

const initalState = 0;
const reducer = (state, action) => {
     switch (action) {
        case "Increment":
          return state + 1
        case "Decrement":
          return state - 1
        default:
          return state;
     }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <h2>This is UseReducer Hook in React JS</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  )
}

export default UseReducer
