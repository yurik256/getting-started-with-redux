import { combineReducers } from "redux";
import { todos } from "./todos";
import { visibilityFilter } from "./visibility-filter";

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

export const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
