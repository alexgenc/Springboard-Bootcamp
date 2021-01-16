import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke Test
it("renders without crashing", () => {
  render(<BoxList />);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

