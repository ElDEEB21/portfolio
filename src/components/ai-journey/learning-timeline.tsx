"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"
import { timelineSteps } from "@/data/ai-journey"

export default function LearningTimeline() {
  return (
    <section className="py-28 bg-bg-elevated">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Brain size={18} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Learning Path</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            How I <span className="gradient-text">Learned</span>
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-0 md:pl-16"
                >
                  <div
                    className={`absolute left-0 md:left-[22px] top-1.5 w-3 h-3 rounded-full hidden md:block ring-4 ring-bg-elevated ${
                      step.status === "completed" ? "bg-accent" : "bg-muted"
                    }`}
                  />

                  <div className="p-6 rounded-lg bg-bg-card border border-border card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-mono rounded-full border ${
                          step.status === "completed"
                            ? "bg-accent-muted/20 text-accent border-accent/20"
                            : "bg-warn/10 text-warn border-warn/20"
                        }`}
                      >
                        {step.status === "completed" ? "Completed" : "Paused"}
                      </span>
                    </div>
                    <p className="text-sm text-accent font-mono mb-3">{step.subtitle}</p>
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
