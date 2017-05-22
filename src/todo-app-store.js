import { createStore } from "redux";
import { todoApp as todoAddReducer } from "./reducers/todo-app";

export const store = createStore(todoAddReducer);
