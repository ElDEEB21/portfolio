import { render, screen, within } from "@testing-library/react"
import Skills from "../skills"

describe("Skills", () => {
  it("should render section with id", () => {
    render(<Skills />)
    const section = document.getElementById("skills")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<Skills />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.textContent).toMatch(/Tools/)
    expect(heading.textContent).toMatch(/Skills/)
  })

  it("should render skill category headings", () => {
    render(<Skills />)
    expect(screen.getByText("Languages & Frameworks")).toBeInTheDocument()
    expect(screen.getByText("Domain & Architecture")).toBeInTheDocument()
    expect(screen.getByText("Soft Skills & Leadership")).toBeInTheDocument()
  })

  it("should render technical skills", () => {
    render(<Skills />)
    expect(screen.getByText("Python")).toBeInTheDocument()
    expect(screen.getByText("Django")).toBeInTheDocument()
  })

  it("should render domain skills", () => {
    render(<Skills />)
    expect(screen.getByText("RESTful APIs")).toBeInTheDocument()
    expect(screen.getByText("TDD")).toBeInTheDocument()
  })

  it("should render soft skills", () => {
    render(<Skills />)
    expect(screen.getByText("Technical Training")).toBeInTheDocument()
    expect(screen.getByText("Team Leadership")).toBeInTheDocument()
  })
})
