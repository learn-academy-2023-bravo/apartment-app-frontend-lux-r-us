import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentIndex from "../pages/ApartmentIndex";

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Show all the pads: not protected")
    ).toBeInTheDocument();
  });
});
