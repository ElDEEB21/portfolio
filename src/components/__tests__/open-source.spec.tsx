import { render, screen } from "@testing-library/react"
import OpenSource from "../open-source"

describe("OpenSource", () => {
  it("should render section with id", () => {
    render(<OpenSource />)
    const section = document.getElementById("open-source")
    expect(section).toBeInTheDocument()
  })

  it("should render heading", () => {
    render(<OpenSource />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.textContent).toMatch(/Open Source/)
  })

  it("should render both contributions", () => {
    render(<OpenSource />)
    expect(screen.getByText("Unify the relay event scanner")).toBeInTheDocument()
    expect(screen.getByText("Add implementer delegation skills")).toBeInTheDocument()
  })

  it("should mark contributions as merged", () => {
    render(<OpenSource />)
    const merged = screen.getAllByText("Merged")
    expect(merged.length).toBe(2)
  })

  it("should render View Pull Request links", () => {
    render(<OpenSource />)
    const links = screen.getAllByText("View Pull Request")
    expect(links.length).toBe(3)
    expect(links[0]).toHaveAttribute(
      "href",
      "https://github.com/amElnagdy/delegate-skills/pull/39"
    )
    expect(links[1]).toHaveAttribute(
      "href",
      "https://github.com/amElnagdy/delegate-skills/pull/59"
    )
    expect(links[2]).toHaveAttribute(
      "href",
      "https://github.com/amElnagdy/delegate-skills/pull/87"
    )
  })
})
