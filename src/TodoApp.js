import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";

class TodoApp extends Component {
  render() {
    const { onAddTodo } = this.props;

    return (
      <div>
        <AddTodo onAddClick={onAddTodo} />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
