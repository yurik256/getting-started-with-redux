import React, { Component } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

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
    const { onAddTodo, onToggleTodo, todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <AddTodo onAddClick={onAddTodo} />
        <TodoList todos={visibleTodos} onTodoClick={onToggleTodo} />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
