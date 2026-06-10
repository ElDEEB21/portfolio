import { render, screen } from "@testing-library/react"
import Projects from "../projects"

describe("Projects", () => {
  it("should render section with id", () => {
    render(<Projects />)
    const section = document.getElementById("projects")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<Projects />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.textContent).toMatch(/Featured/)
  })

  it("should render all project names", () => {
    render(<Projects />)
    expect(screen.getByText("E-Commerce REST API")).toBeInTheDocument()
    expect(screen.getByText("Recipe Management API")).toBeInTheDocument()
    expect(screen.getByText("Postify – Modern Blogging Platform")).toBeInTheDocument()
    expect(screen.getByText("FER-2013 CNN vs ResNet")).toBeInTheDocument()
    expect(screen.getByText("Rossmann Store Sales Prediction")).toBeInTheDocument()
  })

  it("should render Inspect Repository links", () => {
    render(<Projects />)
    const links = screen.getAllByText("Inspect Repository")
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it("should highlight featured projects", () => {
    render(<Projects />)
    const featured = screen.getAllByText("Featured")
    expect(featured.length).toBeGreaterThanOrEqual(1)
  })
})
