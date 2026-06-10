"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Zap, Code } from "lucide-react"
import { profile } from "@/data/profile"

export default function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-24 bg-bg-elevated/40 relative">
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
            <Trophy size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Algorithms</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Competitive <span className="gradient-text">Programming</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-14 max-w-xl">
            A reflection of my analytical capabilities, problem-solving speed, and algorithmic expertise.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {profile.competitiveProgramming.map((item, i) => {
              const isExpert = item.stat.toLowerCase().includes("expert")
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel p-8 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 glow-card-green"
                >
                  {/* Decorative glowing gradient overlay - pure green accent */}
                  <div className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none from-accent/5 to-transparent" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Top Icon - always green to match theme */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border bg-accent/10 border-accent/30 text-accent group-hover:scale-110">
                      {isExpert ? <Award size={22} /> : i === 1 ? <Zap size={22} /> : <Code size={22} />}
                    </div>

                    {/* Stat - Blue ONLY on the word Expert */}
                    <div className={`text-3xl font-extrabold font-mono mb-2 tracking-tight ${
                      isExpert ? "text-accent-secondary" : "text-fg"
                    }`}>
                      {item.stat}
                    </div>

                    {/* Title */}
                    <div className="text-sm font-bold text-fg/90 mb-2 font-mono">
                      {item.title}
                    </div>

                    {/* Label */}
                    <div className="text-xs text-muted max-w-xs leading-relaxed">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
