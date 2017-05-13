import { counter } from "./counter-reducer";

it("reducer test", () => {
  expect(counter(0, { type: "INCREMENT" })).toBe(1);
  expect(counter(1, { type: "DECREMENT" })).toBe(0);

  expect(counter(1, { type: "UNKNOWN_ACTION" })).toBe(1);

  expect(counter(undefined, {})).toBe(0);
});
