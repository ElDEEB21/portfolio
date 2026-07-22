"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const nodes = [
  { top: "15%", left: "8%", delay: 0 },
  { top: "70%", left: "12%", delay: 0.5 },
  { top: "25%", left: "85%", delay: 1 },
  { top: "65%", left: "80%", delay: 1.5 },
  { top: "45%", left: "6%", delay: 2 },
]

const particles = Array.from({ length: 12 }, () => ({
  top: `${10 + Math.random() * 80}%`,
  left: `${5 + Math.random() * 90}%`,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
}))

export default function AICtaBanner() {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="group relative p-8 md:p-14 rounded-3xl overflow-hidden border border-accent/15 bg-gradient-to-br from-bg-elevated via-bg-card to-bg-elevated transition-all duration-500 hover:border-accent/30"
            style={{ animation: "border-glow 6s ease-in-out infinite" }}
          >
            {/* Neural network connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <line x1="80" y1="60" x2="200" y2="200" stroke="#7ee787" strokeWidth="1.5" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="200" x2="800" y2="140" stroke="#58a6ff" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="800" y1="140" x2="920" y2="320" stroke="#7ee787" strokeWidth="1.5" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="280" x2="350" y2="100" stroke="#58a6ff" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="350" y1="100" x2="700" y2="300" stroke="#7ee787" strokeWidth="1" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4.5s" repeatCount="indefinite" />
              </line>
              <line x1="700" y1="300" x2="900" y2="80" stroke="#58a6ff" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="3s" repeatCount="indefinite" />
              </line>
            </svg>

            {/* Network nodes */}
            {nodes.map((n, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-accent/30 pointer-events-none hidden md:block"
                style={{
                  top: n.top,
                  left: n.left,
                  animation: `node-pulse ${2 + i * 0.5}s ease-in-out ${n.delay}s infinite`,
                }}
              />
            ))}

            {/* Floating particles */}
            {particles.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-accent/20 pointer-events-none hidden md:block"
                style={{
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
                }}
              />
            ))}

            {/* Gradient glow overlay */}
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
              style={{
                background: "radial-gradient(circle, #7ee787 0%, transparent 70%)",
                animation: "glow-pulse 6s ease-in-out infinite",
              }}
            />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
              style={{
                background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)",
                animation: "glow-pulse 8s ease-in-out infinite reverse",
              }}
            />

            {/* Data flow line */}
            <div className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none"
              style={{
                width: "25%",
                animation: "data-flow 4s ease-in-out infinite",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Icon with glow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative shrink-0"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 flex items-center justify-center border border-accent/25 backdrop-blur-sm"
                  style={{ animation: "float 5s ease-in-out infinite" }}
                >
                  <Sparkles size={36} className="text-accent" />
                </div>
                <div className="absolute -inset-2 rounded-2xl bg-accent/5 blur-xl -z-10" />
              </motion.div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">
                      Beyond Backend
                    </span>
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    <span className="text-xs font-mono text-accent-secondary tracking-[0.2em] uppercase">
                      AI & CV
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    I also build with{" "}
                    <span className="gradient-text">Computer Vision</span>
                  </h3>
                  <p className="text-sm text-muted max-w-lg leading-relaxed">
                    From training CNNs and deploying YOLOv8n on-device to building a real-time
                    Driver Monitoring System that fuses face mesh, head pose estimation, and
                    object detection — entirely offline at 15 FPS.
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/ai-journey"
                  className="group/btn relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-90 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                  <span className="relative z-10 text-bg-primary">Explore AI Work</span>
                  <ArrowRight size={16} className="relative z-10 text-bg-primary transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
