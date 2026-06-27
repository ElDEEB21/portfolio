"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Mail, ArrowUp, Terminal } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { profile } from "@/data/profile"
import { VisitorCounter } from "@/components/visitor-counter"

export default function Footer() {
  const [clickKey, setClickKey] = useState(0)
  const controls = useAnimation()

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setClickKey((k) => k + 1)
    controls.start({ y: -10, opacity: 0, scale: 1.3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } })
      .then(() => {
        controls.set({ y: 10, opacity: 0, scale: 0.8 })
        controls.start({ y: 0, opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } })
      })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-bg-elevated/20 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left panel showing terminal contact block */}
          <div className="flex flex-col items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-1">
              <Terminal size={12} className="text-accent" />
              <span>{profile.name.toLowerCase()} &middot; portfolio</span>
            </div>
            <p className="text-xs text-muted font-mono">
              $ mailto --recipient{" "}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline transition-colors font-bold">
                {profile.email}
              </a>
            </p>
            <p className="text-[10px] text-muted/50 mt-2 font-mono">
              Designed & Engineered &copy; {new Date().getFullYear()} &middot; Built with Next.js
            </p>
          </div>

          {/* Right panel showing social contact links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-250"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-250"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-250"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <div className="w-px h-5 bg-border mx-1" />
            <a
              href="#"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-250"
              aria-label="Back to top"
            >
              <motion.div
                key={clickKey}
                animate={controls}
                initial={{ y: 0, opacity: 1, scale: 1 }}
              >
                <ArrowUp size={16} />
              </motion.div>
            </a>
          </div>

        </div>
        <div className="mt-8 pt-4 border-t border-border/40">
          <VisitorCounter />
        </div>
      </div>
    </footer>
  )
}
