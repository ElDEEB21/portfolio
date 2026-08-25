import { render, screen } from "@testing-library/react"
import Experience from "../experience"

describe("Experience", () => {
  it("should render section with id", () => {
    render(<Experience />)
    const section = document.getElementById("experience")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<Experience />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.textContent).toMatch(/Where/)
  })

  it("should render company names", () => {
    render(<Experience />)
    expect(screen.getByText("Recode Academy")).toBeInTheDocument()
    expect(screen.getByText("Fayoum ICPC Community")).toBeInTheDocument()
  })

  it("should render job titles", () => {
    render(<Experience />)
    expect(screen.getByText("Instructor")).toBeInTheDocument()
    expect(screen.getByText("Mentor & Coach")).toBeInTheDocument()
  })

  it("should render experience locations", () => {
    render(<Experience />)
    const locations = screen.getAllByText("Fayoum, Egypt")
    expect(locations.length).toBeGreaterThanOrEqual(2)
  })

  it("should render achievements for each role", () => {
    render(<Experience />)
    expect(screen.getByText(/Taught multiple courses/)).toBeInTheDocument()
    expect(screen.getByText(/Mentored 15–20 students/)).toBeInTheDocument()
  })
})
