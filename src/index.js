import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

/*
import { Counter } from "./Counter";
import { counter as CounterReducer } from "./reducers/counter-reducer";

const store = createStore(CounterReducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({ type: "INCREMENT" });
      }}
      onDecrement={() => {
        store.dispatch({ type: "DECREMENT" });
      }}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
*/

import TodoApp from "./TodoApp";
import { todoApp as todoAddReducer } from "./todo-app";

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
      todos={store.getState().todos}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
