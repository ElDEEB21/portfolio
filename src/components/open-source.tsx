"use client"

import { motion } from "framer-motion"
import { GitPullRequest, ExternalLink, CheckCircle2, GitMerge } from "lucide-react"
import { profile } from "@/data/profile"

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <GitPullRequest size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Community</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-14 max-w-xl">
            Merged pull requests into production skill libraries — shipped with tests, verified against real tooling, and reviewed upstream.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {profile.openSource.map((contribution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 rounded-2xl flex flex-col relative overflow-hidden group transition-all duration-300 glow-card-green"
              >
                {/* Merged badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                  <GitMerge size={10} className="text-accent" />
                  <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Merged</span>
                </div>

                {/* PR meta row */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-accent/10 border-accent/20 text-accent">
                    <GitPullRequest size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted">{contribution.project}</span>
                    <span className="text-[10px] font-mono text-accent font-bold">{contribution.prNumber}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-bg-elevated text-muted/90 border border-border/60 uppercase tracking-wider">
                    {contribution.type}
                  </span>
                  <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors duration-300">
                    {contribution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {contribution.description}
                </p>

                {/* Impact */}
                <ul className="space-y-2 mb-6">
                  {contribution.impact.map((point, j) => (
                    <li key={j} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-accent/80 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {contribution.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-elevated text-muted/90 border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {contribution.links.map((link, j) => (
                    <a
                      key={j}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors text-accent hover:text-accent/80"
                    >
                      <ExternalLink size={12} />
                      View Pull Request
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
