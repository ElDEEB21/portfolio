import { render, screen } from "@testing-library/react"
import CompetitiveProgramming from "../competitive-programming"

describe("CompetitiveProgramming", () => {
  it("should render section with id", () => {
    render(<CompetitiveProgramming />)
    const section = document.getElementById("competitive")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<CompetitiveProgramming />)
    expect(screen.getByText(/Competitive Programming/i)).toBeInTheDocument()
  })

  it("should render Codeforces Expert stat", () => {
    render(<CompetitiveProgramming />)
    expect(screen.getByText("Expert")).toBeInTheDocument()
  })

  it("should render ECPC stats", () => {
    render(<CompetitiveProgramming />)
    const matches = screen.getAllByText(/17th/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("17th / 280")).toBeInTheDocument()
    expect(screen.getByText("90th / 280")).toBeInTheDocument()
  })

  it("should render titles for each competitive programming entry", () => {
    render(<CompetitiveProgramming />)
    expect(screen.getByText("Codeforces Expert")).toBeInTheDocument()
    expect(screen.getByText("ECPC 2023 Qualifications")).toBeInTheDocument()
    expect(screen.getByText("ECPC 2023 Final")).toBeInTheDocument()
  })
})
