"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { timelineSteps } from "@/data/ai-journey"

const pad = (n: number) => String(n + 1).padStart(2, "0")

export default function LearningTimeline() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.chapterIndex
            )
            if (!Number.isNaN(idx)) setActive(idx)
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    const chapters = document.querySelectorAll("[data-chapter-index]")
    chapters.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="path" className="py-24 bg-bg-elevated/40 relative scroll-mt-20">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
            Learning Path
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I <span className="gradient-text">Learned</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-10 max-w-xl">
            Six chapters in order, from foundations to applied on-device vision.
          </p>

          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <nav aria-label="Chapters" className="sticky top-24">
                <ol className="border-l border-border">
                  {timelineSteps.map((step, i) => (
                    <li key={step.title}>
                      <a
                        href={`#chapter-${pad(i)}`}
                        aria-current={active === i ? "true" : undefined}
                        className={`-ml-px flex min-h-[44px] items-center gap-3 border-l-2 py-2 pl-4 pr-2 text-sm transition-colors duration-200 ${
                          active === i
                            ? "border-accent font-semibold text-fg"
                            : "border-transparent text-muted hover:text-fg"
                        }`}
                      >
                        <span className="font-mono text-xs">{pad(i)}</span>
                        <span>{step.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <ol className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[5px] top-2 bottom-2 w-px bg-border"
              />
              <div className="space-y-10">
                {timelineSteps.map((step, i) => (
                  <li
                    key={step.title}
                    id={`chapter-${pad(i)}`}
                    data-chapter-index={i}
                    className="relative scroll-mt-24 pl-6 sm:pl-8"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-2 h-3 w-3 rounded-full ${
                        step.status === "completed" ? "bg-accent" : "bg-muted"
                      }`}
                    />
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
                      Chapter {pad(i)} ·{" "}
                      {step.status === "completed" ? "Completed" : "Paused"}
                    </p>
                    <h3 className="text-lg font-semibold text-fg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-accent font-mono mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                ))}
              </div>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
