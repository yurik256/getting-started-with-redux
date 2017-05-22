import React, { Component } from "react";
import TodoList from "./TodoList";
import { store } from "./todo-app-store";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

class VisibleTodoList extends Component {
  render() {
    const { todos, visibilityFilter } = store.getState();

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <TodoList
        todos={visibleTodos}
        onTodoClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id: id
          })}
      />
    );
  }
}

export default VisibleTodoList;
