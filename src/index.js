import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { Counter } from "./Counter.js";
import { counter as CounterReducer } from "./counter/reducer";

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
