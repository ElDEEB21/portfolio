import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Footer from "../footer"

describe("Footer", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  it("should render email link", () => {
    render(<Footer />)
    expect(screen.getByText(/ar2724@fayoum\.edu\.eg/)).toBeInTheDocument()
  })

  it("should render social links", () => {
    render(<Footer />)
    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it("should have GitHub link with correct href", () => {
    render(<Footer />)
    const githubLink = screen.getByLabelText("GitHub")
    expect(githubLink).toHaveAttribute("href", "https://github.com/ElDEEB21")
  })

  it("should have LinkedIn link", () => {
    render(<Footer />)
    const linkedinLink = screen.getByLabelText("LinkedIn")
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/abd-el-rahman-eldeeb")
  })

  it("should have Email link", () => {
    render(<Footer />)
    const emailLink = screen.getByLabelText("Email")
    expect(emailLink).toHaveAttribute("href", "mailto:ar2724@fayoum.edu.eg")
  })

  it("should have Back to top button", () => {
    render(<Footer />)
    const topButton = screen.getByLabelText("Back to top")
    expect(topButton).toBeInTheDocument()
  })

  it("should scroll to top when Back to top is clicked", async () => {
    render(<Footer />)
    const topButton = screen.getByLabelText("Back to top")
    fireEvent.click(topButton)
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" })
    })
  })

  it("should display copyright year", () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
