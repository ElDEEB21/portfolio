import { render, screen } from "@testing-library/react"
import CvPage from "../page"

describe("CV Page", () => {
  it("should render without crashing", () => {
    render(<CvPage />)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading.textContent).toMatch(/Curriculum/)
    expect(heading.textContent).toMatch(/Vitae/)
  })

  it("should render back link", () => {
    render(<CvPage />)
    expect(screen.getByText("Back to Portfolio")).toBeInTheDocument()
  })

  it("should render name and title", () => {
    render(<CvPage />)
    expect(screen.getByText(/Abdulrahman Eldeeb/)).toBeInTheDocument()
    expect(screen.getByText(/Python Developer/)).toBeInTheDocument()
  })

  it("should render download PDF link", () => {
    render(<CvPage />)
    const downloadLink = screen.getByText("Download PDF")
    expect(downloadLink).toHaveAttribute("download", "Abdulrahman_Eldeeb_CV.pdf")
  })

  it("should render Raw Markdown link", () => {
    render(<CvPage />)
    const mdLink = screen.getByText("Raw Markdown")
    expect(mdLink).toHaveAttribute("href", "/resume.md?v=4")
  })

  it("should render work summary section", () => {
    render(<CvPage />)
    expect(screen.getByText("Work Summary")).toBeInTheDocument()
  })

  it("should render education details section", () => {
    render(<CvPage />)
    expect(screen.getByText("Education Details")).toBeInTheDocument()
  })

  it("should render certifications section", () => {
    render(<CvPage />)
    expect(screen.getByText("Key Certifications")).toBeInTheDocument()
  })

  it("should render PDF viewer", () => {
    render(<CvPage />)
    const object = document.querySelector("object")
    expect(object).toBeInTheDocument()
    expect(object).toHaveAttribute("type", "application/pdf")
  })
})
