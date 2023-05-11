import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../components/SignUp"

describe("<SignUp />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    expect(screen.getByText("LUX-R-US")).toBeInTheDocument()
  })
})
