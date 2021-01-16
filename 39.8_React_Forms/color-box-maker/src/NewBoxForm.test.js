import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke Test
it("renders without crashing", () => {
  render(<NewBoxForm />);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});