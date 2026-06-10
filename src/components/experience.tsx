"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { profile } from "@/data/profile"

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-elevated/40 relative">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Career</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16">
            Where I&apos;ve <span className="gradient-text">Taught & Coached</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline vertical bar */}
            <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {profile.experience.map((role, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-stretch ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node center badge */}
                    <div className="absolute left-4 md:left-[50%] top-6 -translate-x-[11px] w-6 h-6 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center z-10 timeline-dot hidden md:flex">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    </div>

                    {/* Content Card container */}
                    <div className="w-full md:w-[46%] pl-10 md:pl-0">
                      <div className="glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 group">
                        
                        {/* Decorative glow indicator */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-accent-muted text-accent border border-accent/25">
                            {role.title}
                          </span>
                          <span className="text-xs font-mono text-muted flex items-center gap-1">
                            <Calendar size={12} />
                            {role.dates}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-fg mb-1 group-hover:text-accent transition-colors duration-300">
                          {role.company}
                        </h3>
                        
                        <p className="text-xs text-muted/80 font-mono mb-4 flex items-center gap-1">
                          <MapPin size={12} className="text-accent" />
                          {role.location}
                        </p>

                        <ul className="space-y-3 mb-6">
                          {role.achievements.map((achievement, j) => (
                            <li key={j} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                              <CheckCircle2 size={12} className="text-accent/80 mt-0.5 shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {role.tech && (
                          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                            {role.tech.map((t, j) => (
                              <span
                                key={j}
                                className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-elevated text-muted border border-border/80 hover:text-accent transition-colors"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Empty spacer block for standard timeline desktop layout */}
                    <div className="w-[8%] hidden md:block" />
                    <div className="w-[46%] hidden md:block" />

                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
