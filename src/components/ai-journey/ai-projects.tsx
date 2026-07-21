"use client"

import { motion } from "framer-motion"
import { FolderGit2, ExternalLink, Star } from "lucide-react"
import { aiProjects } from "@/data/ai-journey"

export default function AIProjects() {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FolderGit2 size={18} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">AI Projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            What I&apos;ve <span className="gradient-text">Explored</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {aiProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-6 rounded-lg border card-hover flex flex-col ${
                  project.highlight
                    ? "bg-bg-card border-accent/20"
                    : "bg-bg-card border-border"
                }`}
              >
                {project.highlight && (
                  <div className="absolute top-4 right-4">
                    <Star size={14} className="text-accent fill-accent" />
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-muted/20 flex items-center justify-center">
                    <FolderGit2 size={16} className="text-accent" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-accent-muted/10 text-accent/80 border border-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-2 hover:text-accent transition-colors mt-auto"
                  >
                    <ExternalLink size={12} />
                    View on GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
