import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import TodoApp from "./TodoApp";
import { todoApp as todoAddReducer } from "./reducers/todo-app";

const store = createStore(todoAddReducer);

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
      onFilterClick={filter => {
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter: filter
        });
      }}
      {...store.getState()}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
