import { todos } from "./todos-reducer";

it("test adding todo", () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];

  const result = todos(stateBefore, action);

  expect(result).toEqual(stateAfter);
});

it("test toggling todo", () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Learn Redux 1",
      completed: false
    }
  ];
  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Learn Redux 1",
      completed: true
    }
  ];

  const result = todos(stateBefore, action);

  expect(result).toEqual(stateAfter);
});
