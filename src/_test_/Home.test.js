import { render, screen } from "@testing-library/react"
import Home from "../pages/Home.js"

describe("<Home/>", () => {
  it("renders without crashing", () => {
    render(<Home />)
  })
})
