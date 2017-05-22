import React, { Component } from "react";

class TodoApp extends Component {
  render() {
    const { onAddTodo, onToggleTodo, todos } = this.props;
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
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => {
                onToggleTodo(todo.id);
              }}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
