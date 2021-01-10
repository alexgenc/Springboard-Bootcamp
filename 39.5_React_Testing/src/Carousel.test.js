import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// Smoke Test
it("renders without crashing", function() {
  render(<Carousel />);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // Expect the first image to show, but not the second or the third
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
})

it("hides the left arrow when displaying the first image", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

  // expect the left arrow to not show
  const leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).not.toBeInTheDocument();
})


it("hides the right arrow when displaying the last image", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  // Move forward twice to reach the last image
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // Expect last image to show
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();

  // Expect the right arrow to not show
  expect(rightArrow).not.toBeInTheDocument();
})

