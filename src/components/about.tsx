"use client"

import { motion } from "framer-motion"
import { Info, Calendar, Award, GraduationCap, MapPin } from "lucide-react"
import { profile } from "@/data/profile"

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Info size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Overview</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Bio & Education (Left Col) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                <p className="text-base text-muted leading-relaxed font-sans">
                  {profile.bio}
                </p>
              </div>

              {/* Education section inside about */}
              <div>
                <h3 className="text-lg font-bold font-mono mb-4 flex items-center gap-2 text-fg">
                  <GraduationCap size={18} className="text-accent" />
                  Academic History
                </h3>
                <div className="space-y-4">
                  {profile.education.map((edu, i) => (
                    <div
                      key={i}
                      className="glass-panel p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-accent/30"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 text-[10px] font-semibold font-mono rounded bg-accent/10 text-accent border border-accent/20">
                          Bachelor Degree
                        </span>
                        <span className="text-xs font-mono text-muted flex items-center gap-1">
                          <Calendar size={12} />
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-fg mb-1">{edu.degree}</h4>
                      <p className="text-sm text-muted mb-2 font-mono flex items-center gap-1">
                        <MapPin size={12} className="text-muted/60" />
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted/80 leading-relaxed pt-2 border-t border-border/40">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats & Certifications (Right Col) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Stats Panel */}
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-mono text-accent tracking-widest mb-6 uppercase">
                  Developer Profile Stats
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-sm text-muted">Codeforces Tier</span>
                    <span className="text-sm font-mono font-bold text-accent-secondary bg-accent-secondary/10 px-2 py-0.5 rounded border border-accent-secondary/20">
                      Expert
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-sm text-muted">Teaching Experience</span>
                    <span className="text-sm font-mono text-accent font-bold">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-sm text-muted">Core Frameworks</span>
                    <span className="text-sm font-mono text-accent font-bold">Django & DRF</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">API Methodologies</span>
                    <span className="text-sm font-mono text-fg font-bold">TDD & Swagger</span>
                  </div>
                </div>
              </div>

              {/* Certifications Highlights */}
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                <h3 className="text-sm font-mono text-accent tracking-widest mb-6 uppercase flex items-center gap-2">
                  <Award size={14} className="text-accent" />
                  Credentials Summary
                </h3>

                <div className="space-y-4">
                  {profile.certifications.slice(0, 2).map((cert, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-bg-elevated/50 border border-border/40 hover:border-accent/20 transition-all duration-300">
                      <div className="text-[10px] font-mono text-accent mb-1">
                        {cert.issuer} &middot; {cert.year}
                      </div>
                      <div className="text-xs font-semibold text-fg line-clamp-1">
                        {cert.name}
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <span className="text-xs font-mono text-muted">
                      Total Credentials: <span className="text-accent font-bold">{profile.certifications.length} Verified</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
