"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, FileText, Check, Copy } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { profile } from "@/data/profile"
import Link from "next/link"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const techBadges = [
    { name: "Python" },
    { name: "Django" },
    { name: "Docker" },
    { name: "C++" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12">
      {/* Decorative background grid & glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />
      
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          animation: "glow-pulse 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          animation: "glow-pulse 10s ease-in-out infinite-reverse",
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono tracking-wider uppercase mb-6 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent-secondary font-bold">Expert</span> Competitive Programmer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl font-mono text-accent mb-6 flex items-center gap-2"
            >
              {profile.title}
              <span className="text-muted/40">|</span>
              <span className="text-muted text-sm">{profile.location}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-muted max-w-xl leading-relaxed mb-6"
            >
              {profile.valueProp}
            </motion.p>

            {/* Stack terminal list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs"
            >
              <span className="text-accent font-bold">$</span>
              <span className="text-muted">stack --list</span>
              <span className="text-muted/40">:</span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className="px-2.5 py-0.5 rounded-md border border-accent/20 bg-accent-muted text-accent font-semibold"
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Email Copier & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
            >
              <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-lg bg-bg-elevated border border-border font-mono text-xs text-muted">
                <span>{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-muted hover:text-accent p-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>

              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg-primary font-bold text-sm transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.03]"
              >
                <FileText size={16} />
                View CV / Resume
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Profile Picture Right Column */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-accent/20 animate-spin [animation-duration:40s]" />
              
              {/* Pulsing glow behind image */}
              <div className="absolute -inset-1.5 rounded-full bg-accent opacity-[0.12] blur-md animate-pulse" />
              
              {/* Image Frame */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-accent/30 p-1.5 bg-bg-primary">
                <img
                  src={`${basePath}/Profile.jpeg`}
                  alt={profile.name}
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
