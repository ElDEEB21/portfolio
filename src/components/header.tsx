"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, FileText, Terminal, Brain } from "lucide-react"
import { profile } from "@/data/profile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isCvPage = pathname === "/cv"

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Competitive", href: "#competitive" },
    { label: "Projects", href: "#projects" },
  ]

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      {!isCvPage && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-accent origin-left z-[60]"
          style={{ scaleX }}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group font-mono text-sm font-bold tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300">
              <Terminal size={14} className="text-accent" />
            </span>
            <span className="text-fg group-hover:text-accent transition-colors duration-300">
              {profile.name.split(" ")[0]}
              <span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isCvPage && (
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-xs font-mono text-muted hover:text-accent rounded-md hover:bg-accent-muted transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/ai-journey"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-muted text-accent border border-accent/20 text-xs font-mono font-medium transition-all hover:bg-accent hover:text-bg-primary hover:border-accent hover:scale-105"
            >
              <Brain size={14} />
              AI Journey
            </Link>
            <Link
              href={isCvPage ? "/" : "/cv"}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 text-xs font-mono font-medium transition-all hover:bg-accent hover:text-bg-primary hover:border-accent hover:scale-105"
            >
              <FileText size={14} />
              {isCvPage ? "Back to Portfolio" : "Curriculum Vitae"}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && !isCvPage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 md:hidden bg-bg-primary/95 backdrop-blur-lg border-b border-border p-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm font-mono text-muted hover:text-accent border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/ai-journey"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-lg border border-accent/30 text-accent text-sm font-medium transition-all hover:bg-accent hover:text-bg-primary"
              >
                <Brain size={16} />
                AI Journey
              </Link>
              <Link
                href="/cv"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-bg-primary text-sm font-medium transition-all hover:brightness-110"
              >
                <FileText size={16} />
                Curriculum Vitae
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
