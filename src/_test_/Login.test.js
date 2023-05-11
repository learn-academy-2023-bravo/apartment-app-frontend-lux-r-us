import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "../components/Login"

describe("<Login />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    expect(screen.getByText("LUX-R-US")).toBeInTheDocument()
  })
})
