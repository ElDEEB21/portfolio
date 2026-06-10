import { render, screen } from "@testing-library/react"
import About from "../about"

describe("About", () => {
  it("should render section with id", () => {
    render(<About />)
    const section = document.getElementById("about")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<About />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.textContent).toMatch(/About/)
  })

  it("should render bio", () => {
    render(<About />)
    expect(screen.getByText(/Computer Science graduate/)).toBeInTheDocument()
  })

  it("should render education entries", () => {
    render(<About />)
    expect(screen.getByText("Bachelor of Computer Science and Artificial Intelligence")).toBeInTheDocument()
    expect(screen.getByText("Fayoum University")).toBeInTheDocument()
  })

  it("should render developer profile stats", () => {
    render(<About />)
    expect(screen.getByText("Codeforces Tier")).toBeInTheDocument()
    expect(screen.getByText("Teaching Experience")).toBeInTheDocument()
  })

  it("should render certifications", () => {
    render(<About />)
    expect(screen.getByText(/Credentials Summary/)).toBeInTheDocument()
  })
})
