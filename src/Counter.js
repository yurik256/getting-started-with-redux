import React from "react";

export function Counter(props) {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
