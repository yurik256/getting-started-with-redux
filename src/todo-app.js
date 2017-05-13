import { combineReducers } from "redux";
import { todos } from "./reducers/todos-reducer";
import { visibilityFilter } from "./reducers/visibility-filter-reducer";

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
