"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Check, Copy, MessageCircle } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { profile } from "@/data/profile"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <MessageCircle size={16} className="text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">Contact</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm text-muted font-mono mb-12 max-w-xl">
            Open to Python backend roles and freelance API work — reach out through any channel below.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {/* Email */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted font-mono">
                <Mail size={16} className="text-accent" />
                Email
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-bg-elevated border border-border px-4 py-2.5 font-mono text-sm text-fg">
                <span className="truncate">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-muted hover:text-accent p-1 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
                </button>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-xs font-mono text-accent hover:underline self-start"
              >
                Send an email &rarr;
              </a>
            </div>

            {/* Phone */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted font-mono">
                <Phone size={16} className="text-accent" />
                Phone
              </div>
              <div className="rounded-lg bg-bg-elevated border border-border px-4 py-2.5 font-mono text-sm text-fg">
                {profile.phone}
              </div>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="text-xs font-mono text-accent hover:underline self-start"
              >
                Call now &rarr;
              </a>
            </div>

            {/* Socials */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-accent/40 group"
            >
              <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                <LinkedinIcon size={18} />
              </span>
              <span>
                <span className="block text-sm font-bold text-fg">LinkedIn</span>
                <span className="block text-xs text-muted font-mono">Professional profile</span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-accent/40 group"
            >
              <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                <GithubIcon size={18} />
              </span>
              <span>
                <span className="block text-sm font-bold text-fg">GitHub</span>
                <span className="block text-xs text-muted font-mono">Code &amp; open source work</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
