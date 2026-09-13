"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { aiCertificates, aiProjects, timelineSteps } from "@/data/ai-journey"

const jumps = [
  { label: "Path", href: "#path" },
  { label: "Proof", href: "#proof" },
  { label: "Credentials", href: "#credentials" },
  { label: "Stack", href: "#stack" },
]

export default function AIHero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary text-fg">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-muted/5 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="section-container w-full py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </motion.div>

        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-mono text-accent tracking-widest uppercase">
            AI journey
          </p>
          <div aria-hidden="true" className="mt-3 h-px w-16 bg-border" />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-4 mb-4"
          >
            AI & Computer Vision <span className="gradient-text">Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-muted leading-relaxed max-w-xl"
          >
            From Data Science foundations with Python, SQL and Scikit-Learn
            through CNNs, transfer learning and transformers. The path lands on
            applied on-device computer vision, including a real-time driver
            monitoring system that runs fully offline on mid-range Android.
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            <div className="flex items-baseline gap-2">
              <dt className="sr-only">Chapters</dt>
              <dd className="font-mono text-2xl font-semibold text-accent">
                {timelineSteps.length}
              </dd>
              <dd className="text-sm text-muted">chapters</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="sr-only">Builds</dt>
              <dd className="font-mono text-2xl font-semibold text-accent">
                {aiProjects.length}
              </dd>
              <dd className="text-sm text-muted">builds</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="sr-only">Credentials</dt>
              <dd className="font-mono text-2xl font-semibold text-accent">
                {aiCertificates.length}
              </dd>
              <dd className="text-sm text-muted">credentials</dd>
            </div>
          </motion.dl>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Journey sections"
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {jumps.map((jump) => (
              <a
                key={jump.href}
                href={jump.href}
                className="inline-flex min-h-[44px] items-center rounded-md border border-border bg-bg-elevated px-4 text-sm font-semibold text-accent transition-colors duration-200 hover:border-accent/40 hover:text-fg"
              >
                {jump.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  )
}
