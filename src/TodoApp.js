import React, { Component } from "react";
import FilterLink from "./FilterLink";
import TodoList from "./TodoList";

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

class TodoApp extends Component {
  render() {
    const {
      onAddTodo,
      onToggleTodo,
      onFilterClick,
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            onAddTodo(this.input.value);
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <TodoList todos={visibleTodos} onTodoClick={onToggleTodo} />
        <p>
          Show:
          {" "}
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
            onFilterClick={onFilterClick}
          >
            All
          </FilterLink>
          {" "}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
            onFilterClick={onFilterClick}
          >
            Active
          </FilterLink>
          {" "}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
            onFilterClick={onFilterClick}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;
