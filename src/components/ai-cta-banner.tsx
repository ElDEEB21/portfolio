"use client"

import { motion } from "framer-motion"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AICtaBanner() {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative p-10 md:p-14 rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-br from-accent-muted/20 via-bg-card to-accent-2/5">
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-[0.06] pointer-events-none"
              style={{
                background: "radial-gradient(circle, #f5a623 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-[0.04] pointer-events-none"
              style={{
                background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center border border-accent/20 shrink-0">
                <Brain size={32} className="text-accent" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  Also exploring <span className="gradient-text">AI & Computer Vision</span>
                </h3>
                <p className="text-sm text-muted max-w-xl leading-relaxed">
                  From Data Science foundations to deep learning for Computer Vision — including a
                  real-time on-device Driver Monitoring System. Check out my AI learning journey,
                  projects, and certificates.
                </p>
              </div>

              <Link
                href="/ai-journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg-primary font-semibold text-sm transition-all hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 shrink-0"
              >
                View AI Journey
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
