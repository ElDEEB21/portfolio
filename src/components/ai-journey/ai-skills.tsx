"use client"

import { motion } from "framer-motion"
import { aiSkillCategories } from "@/data/ai-journey"

const purposes: Record<string, string> = {
  "Frameworks & Libraries":
    "Frameworks and libraries for training and running models.",
  "Data & Deployment":
    "Data handling and deployment for notebooks, APIs and demos.",
  Concepts: "Core concepts applied across vision projects.",
}

export default function AISkills() {
  return (
    <section id="stack" className="py-24 relative scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
            AI Stack
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-10 max-w-xl">
            The stack grouped by use, from model code to deployment.
          </p>

          <div className="space-y-8 max-w-3xl">
            {aiSkillCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                  {cat.label}
                </h3>
                <p className="text-sm text-muted mb-4">
                  {purposes[cat.label] ?? cat.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono rounded-md bg-bg-elevated text-fg border border-border"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
