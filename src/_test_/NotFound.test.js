import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound.js"

describe("<NotFound/>", () => {
  it("renders without crashing", () => {
    render(<NotFound />)
  })
})
