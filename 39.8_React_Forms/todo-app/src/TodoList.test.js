import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke Test
it("renders without crashing", () => {
  render(<TodoList />);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});