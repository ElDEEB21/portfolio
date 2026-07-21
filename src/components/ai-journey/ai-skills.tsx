"use client"

import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import { aiSkillCategories } from "@/data/ai-journey"

export default function AISkills() {
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
            <Cpu size={18} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">AI Stack</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {aiSkillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-lg bg-bg-card border border-border card-hover"
              >
                <div className="text-xs font-mono text-accent tracking-widest mb-4 uppercase">
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-bg-elevated text-muted border border-border/60 transition-all hover:border-accent/30 hover:text-fg hover:bg-accent-muted/10"
                    >
                      {skill}
                    </span>
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
