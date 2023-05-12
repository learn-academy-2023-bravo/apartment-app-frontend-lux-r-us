import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentNew from "../pages/ApartmentNew";

describe("<ApartmentNew />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    );
    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();
    expect(screen.getByText("State")).toBeInTheDocument();
    expect(screen.getByText("Street Name")).toBeInTheDocument();
  });
});





