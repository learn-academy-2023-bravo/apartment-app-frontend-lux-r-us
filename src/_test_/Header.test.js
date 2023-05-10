import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("View Listings")).toBeInTheDocument();
    expect(screen.getByText("Create Listing")).toBeInTheDocument();
    expect(screen.getByText("Options")).toBeInTheDocument();
  });
});
