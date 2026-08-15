import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../header"

describe("Header", () => {
  it("should render logo", () => {
    render(<Header />)
    expect(screen.getByText(/\.dev/)).toBeInTheDocument()
  })

  it("should render navigation links", () => {
    render(<Header />)
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Skills")).toBeInTheDocument()
    expect(screen.getByText("Projects")).toBeInTheDocument()
    expect(screen.getByText("Open Source")).toBeInTheDocument()
    expect(screen.queryByText("Competitive")).not.toBeInTheDocument()
  })

  it("should render Curriculum Vitae link", () => {
    render(<Header />)
    const cvLink = screen.getByText("Curriculum Vitae")
    expect(cvLink).toHaveAttribute("href", "/cv")
  })

  it("should have mobile menu toggle button", () => {
    render(<Header />)
    const toggle = screen.getByLabelText("Toggle Menu")
    expect(toggle).toBeInTheDocument()
  })

  it("should open mobile menu when toggle is clicked", () => {
    render(<Header />)
    const toggle = screen.getByLabelText("Toggle Menu")
    fireEvent.click(toggle)
    expect(screen.getByLabelText("Toggle Menu")).toBeInTheDocument()
  })
})
