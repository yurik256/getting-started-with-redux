import React from "react";
import { connect } from "react-redux";

let nextTodoId = 0;

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            text: input.value,
            id: nextTodoId++
          });
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch
//   };
// };

// AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

AddTodo = connect()(AddTodo);

export default AddTodo;
