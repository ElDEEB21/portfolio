"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { aiCertificates } from "@/data/ai-journey"

export default function AICertificates() {
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
            <Award size={18} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Certificates</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            Verified <span className="gradient-text">Credentials</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {aiCertificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-lg bg-bg-card border border-border card-hover text-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent-muted/20 flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm font-mono text-accent">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
