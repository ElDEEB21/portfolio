import { render, screen, fireEvent } from "@testing-library/react"
import Hero from "../hero"

describe("Hero", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn() },
    })
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should render greeting", () => {
    render(<Hero />)
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
  })

  it("should render name", () => {
    render(<Hero />)
    expect(screen.getByText("Abdulrahman Eldeeb")).toBeInTheDocument()
  })

  it("should render title", () => {
    render(<Hero />)
    expect(screen.getByText("Backend Developer (Django)")).toBeInTheDocument()
  })

  it("should render location", () => {
    render(<Hero />)
    expect(screen.getByText("Fayoum, Egypt")).toBeInTheDocument()
  })

  it("should render tech badges", () => {
    render(<Hero />)
    expect(screen.getByText("Django")).toBeInTheDocument()
    expect(screen.getByText("Python")).toBeInTheDocument()
    expect(screen.getByText("Docker")).toBeInTheDocument()
    expect(screen.getByText("C++")).toBeInTheDocument()
  })

  it("should render email with copy button", () => {
    render(<Hero />)
    expect(screen.getByText("ar2724@fayoum.edu.eg")).toBeInTheDocument()
    expect(screen.getByTitle("Copy email to clipboard")).toBeInTheDocument()
  })

  it("should copy email to clipboard when copy button is clicked", async () => {
    render(<Hero />)
    const copyButton = screen.getByTitle("Copy email to clipboard")
    fireEvent.click(copyButton)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("ar2724@fayoum.edu.eg")
  })

  it("should show check icon after copying", () => {
    render(<Hero />)
    const copyButton = screen.getByTitle("Copy email to clipboard")
    fireEvent.click(copyButton)
    expect(screen.getByTitle("Copy email to clipboard").querySelector(".lucide-check")).toBeTruthy()
  })

  it("should render social links", () => {
    render(<Hero />)
    expect(screen.getByLabelText("GitHub")).toHaveAttribute("href", "https://github.com/ElDEEB21")
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute("href", "https://linkedin.com/in/abd-el-rahman-eldeeb")
    expect(screen.getByLabelText("Email")).toHaveAttribute("href", "mailto:ar2724@fayoum.edu.eg")
  })

  it("should render View CV link", () => {
    render(<Hero />)
    const cvLink = screen.getByText("View CV / Resume")
    expect(cvLink).toHaveAttribute("href", "/cv")
  })

  it("should render Competitive Programmer badge", () => {
    render(<Hero />)
    expect(screen.getByText("Expert")).toBeInTheDocument()
    expect(screen.getByText(/Competitive Programmer/)).toBeInTheDocument()
  })
})
