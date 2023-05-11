import { render, screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow";
import { MemoryRouter } from "react-router-dom";
import mockApartments from "../mockApartments";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={mockApartments} />}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    renderShow();
    expect(
      screen.getByText(`${mockApartments[0].street}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockApartments[0].city}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockApartments[0].unit}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockApartments[0].price}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockApartments[0].state}`, { exact: false })
    ).toBeInTheDocument();
  });
});
