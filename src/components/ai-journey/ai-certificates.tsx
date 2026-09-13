"use client"

import { motion } from "framer-motion"
import { aiCertificates } from "@/data/ai-journey"

const pad = (n: number) => String(n + 1).padStart(2, "0")

export default function AICertificates() {
  return (
    <section
      id="credentials"
      className="py-24 bg-bg-elevated/40 relative scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
            Certificates
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-10 max-w-xl">
            Credentials in ledger order.
          </p>

          <ol className="border-b border-border max-w-3xl">
            {aiCertificates.map((cert, i) => (
              <li
                key={cert.name}
                className="flex items-baseline gap-4 border-t border-border py-4"
              >
                <span className="font-mono text-sm text-muted shrink-0">
                  {pad(i)}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-fg">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-mono text-muted">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
