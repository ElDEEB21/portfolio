"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { aiProjects } from "@/data/ai-journey"

const lead = aiProjects.find((p) => p.highlight) ?? aiProjects[0]
const rest = aiProjects.filter((p) => p !== lead)

const signals: Array<{ term: string; value: string }> = [
  { term: "States", value: "7 distraction states" },
  { term: "Speed", value: "About 15 FPS" },
  { term: "Mode", value: "Fully offline" },
  {
    term: "Perception",
    value: "Face Mesh 468 landmarks, YOLOv8n, solvePnP",
  },
]

export default function AIProjects() {
  return (
    <section id="proof" className="py-24 relative scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
            AI Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I&apos;ve <span className="gradient-text">Explored</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-10 max-w-xl">
            One lead build plus supporting projects, each with its repository.
          </p>

          <div className="grid gap-5">
            {lead && (
              <article className="glass-panel p-6 rounded-2xl md:p-8 relative overflow-hidden border-accent/30">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex min-h-[44px] items-center rounded-md border border-accent/30 bg-accent-muted px-3 text-sm font-semibold uppercase tracking-wider text-accent">
                    Lead
                  </span>
                  <h3 className="text-xl font-semibold text-fg">
                    {lead.name}
                  </h3>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                      Signals
                    </h4>
                    <dl className="border-y border-border">
                      {signals.map((signal) => (
                        <div
                          key={signal.term}
                          className="flex gap-3 py-3 border-b border-border last:border-b-0"
                        >
                          <dt className="w-24 shrink-0 text-sm text-muted">
                            {signal.term}
                          </dt>
                          <dd className="text-[15px] text-fg">
                            {signal.value}
                          </dd>
                        </div>
                      ))}
                      <div className="flex gap-3 py-3">
                        <dt className="w-24 shrink-0 text-sm text-muted">
                          Stack
                        </dt>
                        <dd className="text-[15px] text-fg">
                          {lead.tech.join(", ")}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                      TL;DR
                    </h4>
                    <p className="text-[15px] leading-relaxed text-muted">
                      {lead.description}
                    </p>
                    {lead.repo && (
                      <a
                        href={lead.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-[44px] items-center gap-2 py-3 text-[15px] font-semibold text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink
                          size={16}
                          aria-hidden="true"
                          className="shrink-0"
                        />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )}

            {rest.map((project) => (
              <article
                key={project.name}
                className="glass-panel p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-fg mb-3">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted mb-3">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 mb-3">
                  {project.tech.map((t) => (
                    <li key={t} className="text-sm text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-mono font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                    View on GitHub
                  </a>
                )}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
