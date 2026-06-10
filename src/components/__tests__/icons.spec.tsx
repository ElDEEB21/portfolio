import { render, screen } from "@testing-library/react"
import { GithubIcon, LinkedinIcon } from "../icons"

describe("GithubIcon", () => {
  it("should render with default size", () => {
    render(<GithubIcon />)
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute("width", "16")
    expect(svg).toHaveAttribute("height", "16")
  })

  it("should render with custom size", () => {
    render(<GithubIcon size={24} />)
    const svg = document.querySelector("svg")
    expect(svg).toHaveAttribute("width", "24")
    expect(svg).toHaveAttribute("height", "24")
  })

  it("should pass additional props", () => {
    render(<GithubIcon className="custom-class" aria-label="GitHub" />)
    const svg = document.querySelector("svg")
    expect(svg).toHaveClass("custom-class")
    expect(svg).toHaveAttribute("aria-label", "GitHub")
  })
})

describe("LinkedinIcon", () => {
  it("should render with default size", () => {
    render(<LinkedinIcon />)
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute("width", "16")
    expect(svg).toHaveAttribute("height", "16")
  })

  it("should render with custom size", () => {
    render(<LinkedinIcon size={32} />)
    const svg = document.querySelector("svg")
    expect(svg).toHaveAttribute("width", "32")
    expect(svg).toHaveAttribute("height", "32")
  })
})
