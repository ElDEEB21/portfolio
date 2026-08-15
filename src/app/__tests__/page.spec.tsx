import { render, screen } from "@testing-library/react"
import Home from "../page"

describe("Home Page", () => {
  it("should render without crashing", () => {
    render(<Home />)
    expect(document.querySelector("main")).toBeInTheDocument()
  })

  it("should render Hero section", () => {
    render(<Home />)
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
  })

  it("should render About section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("About"))).toBe(true)
  })

  it("should render Experience section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("Where"))).toBe(true)
  })

  it("should render Skills section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("Tools"))).toBe(true)
  })

  it("should render Competitive Programming section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("Competitive"))).toBe(true)
  })

  it("should render Projects section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("Featured"))).toBe(true)
  })

  it("should render Open Source section", () => {
    render(<Home />)
    const headings = screen.getAllByRole("heading", { level: 2 })
    expect(headings.some((h) => h.textContent?.includes("Open Source"))).toBe(true)
  })

  it("should render Footer", () => {
    render(<Home />)
    expect(screen.getByText(/Built with Next.js/)).toBeInTheDocument()
  })
})
