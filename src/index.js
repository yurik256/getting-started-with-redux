import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoApp from "./TodoApp";
import { todoApp as todoAddReducer } from "./reducers/todo-app";

const store = createStore(todoAddReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
