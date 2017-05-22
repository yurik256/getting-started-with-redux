import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import { store } from "./todo-app-store";

let nextTodoId = 0;

const render = () => {
  ReactDOM.render(
    <TodoApp
      onAddTodo={text => {
        store.dispatch({
          type: "ADD_TODO",
          text: text,
          id: nextTodoId++
        });
      }}
      onToggleTodo={id => {
        store.dispatch({
          type: "TOGGLE_TODO",
          id: id
        });
      }}
      {...store.getState()}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
