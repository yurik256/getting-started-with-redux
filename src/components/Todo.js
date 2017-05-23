import React from "react";

const Todo = props => {
  const { onClick, completed, text } = props;
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
