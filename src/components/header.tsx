"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  FileText,
  Terminal,
  Brain,
  ChevronDown,
  ArrowLeft,
  Download,
} from "lucide-react"
import { profile } from "@/data/profile"

const GROUP_LINKS = [
  { label: "Proof", id: "competitive" },
  { label: "Work", id: "projects" },
  { label: "Teaching", id: "experience" },
  { label: "Contact", id: "contact" },
]

const MORE_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Open Source", id: "open-source" },
]

const PAGE_ORDER = ["experience", "competitive", "projects", "contact"]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [observedId, setObservedId] = useState<string | null>(null)
  const pathname = usePathname()
  const path = pathname ?? ""
  const [prevPath, setPrevPath] = useState(path)
  if (prevPath !== path) {
    setPrevPath(path)
    setIsOpen(false)
    setMoreOpen(false)
  }
  const isCvPage = path === "/cv" || path.endsWith("/cv")
  const isHome = path === "/"
  const activeId = isHome ? observedId : null
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const pdfPath = `${basePath}/Abdulrahman_Eldeeb_CV.pdf?v=10`

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  const progress = activeId ? (PAGE_ORDER.indexOf(activeId) + 1) / PAGE_ORDER.length : 0

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const ids = [...GROUP_LINKS.map((l) => l.id), ...MORE_LINKS.map((l) => l.id)]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id
            if (PAGE_ORDER.includes(id)) setObservedId(id)
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    if (!isOpen && !moreOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (moreOpen) {
          setMoreOpen(false)
          moreButtonRef.current?.focus()
        }
        if (isOpen) setIsOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, moreOpen])

  useEffect(() => {
    if (!moreOpen) return
    const onDown = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [moreOpen])

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true
      sheetRef.current?.focus()
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      if (wasOpenRef.current) {
        wasOpenRef.current = false
        menuButtonRef.current?.focus()
      }
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const offHomeTitle = isCvPage ? "Curriculum Vitae" : "AI Journey"
  const offHomeBackLabel = isCvPage ? "Back to Portfolio" : "Back to portfolio"

  return (
    <>
      {isHome && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.2 }}
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "border-border bg-bg-primary/80 backdrop-blur-md py-4"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3">
          <Link
            href="/"
            className="group flex min-h-[44px] shrink-0 items-center gap-2 font-mono text-sm font-bold tracking-tight text-fg transition-[color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/20 bg-accent/10 transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-accent group-hover:bg-accent/20">
              <Terminal size={14} className="text-accent" />
            </span>
            <span>
              {profile.name.split(" ")[0]}
              <span className="text-accent">.dev</span>
            </span>
          </Link>

          {isHome ? (
            <>
              <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                {GROUP_LINKS.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className="relative inline-flex min-h-[44px] items-center rounded-md px-3 py-2 font-mono text-xs text-muted transition-[color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-muted hover:text-fg"
                    >
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3 bottom-1 h-[2.5px] rounded-full bg-accent"
                        />
                      )}
                    </a>
                  )
                })}
                <div className="relative" ref={moreRef}>
                  <button
                    type="button"
                    ref={moreButtonRef}
                    onClick={() => setMoreOpen((v) => !v)}
                    aria-expanded={moreOpen}
                    aria-haspopup="true"
                    aria-controls="more-menu"
                    className="inline-flex min-h-[44px] items-center gap-1 rounded-md px-3 py-2 font-mono text-xs text-muted transition-[color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-muted hover:text-fg"
                  >
                    More
                    <ChevronDown
                      size={16}
                      className={
                        moreOpen ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"
                      }
                    />
                  </button>
                  <div
                    id="more-menu"
                    role="menu"
                    aria-label="More sections"
                    hidden={!moreOpen}
                    className="absolute right-0 top-full z-50 mt-2 w-48 rounded-md border border-border bg-bg-primary p-1 shadow-md"
                  >
                    {MORE_LINKS.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        role="menuitem"
                        onClick={() => setMoreOpen(false)}
                        className="flex min-h-[44px] items-center rounded-md px-3 font-mono text-xs text-muted transition-[color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-muted hover:text-fg"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
                <span aria-hidden="true" className="mx-1 h-4 w-px shrink-0 bg-border" />
                <Link
                  href="/ai-journey"
                  className="ml-1 inline-flex min-h-[44px] items-center gap-1.5 rounded-md border-[1.5px] border-accent/50 bg-transparent px-3 py-2 font-mono text-xs font-medium text-accent transition-[color,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent hover:bg-accent hover:text-bg-primary"
                >
                  <Brain size={13} />
                  AI Journey
                </Link>
              </nav>

              <div className="hidden lg:flex">
                <Link
                  href="/cv"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-accent bg-accent px-4 py-2 font-mono text-xs font-bold text-bg-primary transition-[background-color,border-color,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110"
                >
                  <FileText size={13} />
                  Curriculum Vitae
                </Link>
              </div>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-muted transition-[color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-muted hover:text-fg lg:hidden"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </>
          ) : (
            <>
              <nav
                className="flex min-w-0 flex-1 items-center gap-2 md:gap-3"
                aria-label="Contextual"
              >
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-md px-3 py-2 font-mono text-xs text-muted transition-[color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-muted hover:text-fg"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">{offHomeBackLabel}</span>
                  <span className="sm:hidden">Back</span>
                </Link>
                <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border" />
                <span className="truncate text-sm font-semibold text-fg">
                  {offHomeTitle}
                </span>
              </nav>
              {isCvPage ? (
                <a
                  href={pdfPath}
                  download="Abdulrahman_Eldeeb_CV.pdf"
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-md border border-accent bg-accent px-3.5 py-2 font-mono text-xs font-bold text-bg-primary transition-[background-color,border-color,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>
              ) : (
                <Link
                  href={`${basePath}/#contact`}
                  className="inline-flex min-h-[44px] shrink-0 items-center rounded-md border border-accent bg-accent px-3.5 py-2 font-mono text-xs font-bold text-bg-primary transition-[background-color,border-color,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110"
                >
                  Hire
                </Link>
              )}
            </>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isOpen && isHome && (
          <>
            <motion.div
              key="mobile-scrim"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            />
            <motion.div
              key="mobile-sheet"
              id="mobile-nav"
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              tabIndex={-1}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-border bg-bg-primary px-4 pb-6 pt-2 shadow-md lg:hidden"
            >
              <span
                aria-hidden="true"
                className="mx-auto mb-2 block h-1 w-10 rounded-full bg-border"
              />
              <nav className="flex flex-col" aria-label="Mobile">
                {GROUP_LINKS.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className="relative flex min-h-[56px] items-center border-b border-border font-mono text-sm text-muted transition-[color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-fg"
                    >
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-2 left-0 h-[2.5px] w-8 rounded-full bg-accent"
                        />
                      )}
                    </a>
                  )
                })}
                {MORE_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-[56px] items-center border-b border-border font-mono text-sm text-muted transition-[color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-fg"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 grid gap-2">
                  <Link
                    href="/ai-journey"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border-[1.5px] border-accent/50 bg-transparent px-4 py-3 font-mono text-sm font-medium text-accent transition-[color,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent hover:bg-accent hover:text-bg-primary"
                  >
                    <Brain size={16} />
                    AI Journey
                  </Link>
                  <Link
                    href="/cv"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent px-4 py-3 font-mono text-sm font-bold text-bg-primary transition-[background-color,border-color,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110"
                  >
                    <FileText size={16} />
                    Curriculum Vitae
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
