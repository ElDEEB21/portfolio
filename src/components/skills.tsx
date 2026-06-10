"use client"

import { motion } from "framer-motion"
import { Code2, Settings, Terminal, Shield } from "lucide-react"
import { profile } from "@/data/profile"

const categories = [
  { 
    key: "technical", 
    label: "Languages & Frameworks", 
    description: "Core coding languages, libraries, and backend frameworks",
    icon: Code2,
    colorClass: "glow-card-green hover:border-accent/40"
  },
  { 
    key: "domain", 
    label: "Domain & Architecture", 
    description: "Backend architectures, methodologies, and API designs",
    icon: Terminal,
    colorClass: "glow-card-green hover:border-accent/40"
  },
  { 
    key: "soft", 
    label: "Soft Skills & Leadership", 
    description: "Professional coaching, instruction, and communication skills",
    icon: Shield,
    colorClass: "glow-card-green hover:border-accent/40"
  },
] as const

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Expertise</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Tools &amp; <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-14 max-w-xl">
            A breakdown of my technical capabilities, backend competencies, and professional instruction experience.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const items = profile.skills[cat.key as keyof typeof profile.skills] as string[]
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass-panel p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${cat.colorClass}`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-accent">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-sm font-bold font-mono text-fg uppercase tracking-wider">
                        {cat.label}
                      </h3>
                    </div>

                    <p className="text-xs text-muted mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg bg-bg-elevated/70 text-muted border border-border/40 transition-all duration-200 hover:border-accent/40 hover:text-fg hover:scale-[1.03]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative faint glow inside */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
