"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { timelineSteps, aiProjects, aiCertificates } from "@/data/ai-journey"

export default function AICtaBanner() {
  return (
    <section className="pt-4 pb-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-t-2 border-fg pt-5"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
                Side quest
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Also exploring <span className="gradient-text">AI & Computer Vision</span>
              </h3>
              <p className="text-sm text-muted max-w-xl leading-relaxed mb-5">
                From Data Science foundations to deep learning for Computer Vision — including a
                real-time on-device Driver Monitoring System. Check out my AI learning journey,
                projects, and certificates.
              </p>
              <dl className="flex flex-wrap gap-x-8 gap-y-2">
                <div className="flex items-baseline gap-2">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">Chapters</dt>
                  <dd className="text-lg font-bold text-fg">{timelineSteps.length}</dd>
                </div>
                <div className="flex items-baseline gap-2">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">Builds</dt>
                  <dd className="text-lg font-bold text-fg">{aiProjects.length}</dd>
                </div>
                <div className="flex items-baseline gap-2">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">Credentials</dt>
                  <dd className="text-lg font-bold text-fg">{aiCertificates.length}</dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-4 md:justify-self-end">
              <Link
                href="/ai-journey"
                className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-mono font-semibold text-accent transition-colors hover:text-fg"
              >
                View AI Journey
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
