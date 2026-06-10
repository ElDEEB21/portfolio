"use client"

import { motion } from "framer-motion"
import { FolderGit2, ExternalLink, Star, Code } from "lucide-react"
import { profile } from "@/data/profile"

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FolderGit2 size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Showcase</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-14 max-w-xl">
            A curated selection of backend architectures, production-ready APIs, and machine learning projects I have built.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {profile.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 rounded-2xl flex flex-col relative overflow-hidden group transition-all duration-300 glow-card-green"
              >
                {/* Visual highlights for featured projects */}
                {project.highlight && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                    <Star size={10} className="text-accent fill-accent" />
                    <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Featured</span>
                  </div>
                )}

                {/* Project Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-accent/10 border-accent/20 text-accent">
                    <Code size={18} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-fg mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-elevated text-muted/90 border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors mt-auto text-accent hover:text-accent/80"
                  >
                    <ExternalLink size={12} />
                    Inspect Repository
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
