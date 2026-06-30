"use client"

import { ArrowLeft, Download, FileText, ChevronRight, Eye, Briefcase, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function CvPage() {
  const localPdfPath = `${basePath}/Abdulrahman_Eldeeb_CV.pdf?v=5`
  const localMarkdownPath = `${basePath}/resume.md`

  return (
    <div className="min-h-screen bg-bg-primary text-fg py-8 relative">
      
      {/* Background decorations - pure green glows */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Curriculum <span className="gradient-text">Vitae</span>
          </h1>
          <p className="text-sm text-muted font-mono max-w-md">
            {profile.name} &middot; {profile.title}
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <a
              href={localPdfPath}
              download="Abdulrahman_Eldeeb_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg-primary text-xs font-mono font-bold transition-all hover:brightness-110 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/20"
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href={localMarkdownPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-bg-elevated/40 text-fg text-xs font-mono font-semibold transition-all hover:border-accent/40 hover:bg-accent-muted"
            >
              <FileText size={14} />
              Raw Markdown
            </a>
          </div>
        </div>

        {/* Split Screen Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Resume Summary (Left Pane) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-base font-bold font-mono text-fg border-b border-border/50 pb-3 mb-4 flex items-center gap-2">
                <Briefcase size={16} className="text-accent" />
                Work Summary
              </h2>
              <div className="space-y-4">
                {profile.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l border-accent/30">
                    <div className="text-[10px] font-mono text-accent">{exp.dates}</div>
                    <div className="text-xs font-bold text-fg mt-0.5">{exp.title}</div>
                    <div className="text-xs text-muted">{exp.company} &middot; {exp.location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-base font-bold font-mono text-fg border-b border-border/50 pb-3 mb-4 flex items-center gap-2">
                <GraduationCap size={16} className="text-accent" />
                Education Details
              </h2>
              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l border-accent/30">
                    <div className="text-[10px] font-mono text-accent">{edu.year}</div>
                    <div className="text-xs font-bold text-fg mt-0.5">{edu.degree}</div>
                    <div className="text-xs text-muted">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-base font-bold font-mono text-fg border-b border-border/50 pb-3 mb-4 flex items-center gap-2">
                <Award size={16} className="text-accent" />
                Key Certifications
              </h2>
              <div className="space-y-3">
                {profile.certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs text-muted">
                    <ChevronRight size={14} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-fg/90">{cert.name}</span>
                      <span className="text-[10px] text-muted/60 block">{cert.issuer} &middot; {cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Desktop Browser Mockup with Native PDF Viewer (Right Pane) */}
          <div className="lg:col-span-7 lg:h-full flex flex-col">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-border/60 lg:h-full flex flex-col">
              
              {/* Desktop Browser Window Header Chrome */}
              <div className="bg-bg-elevated border-b border-border px-4 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="w-3/5 md:w-1/2 bg-bg-primary/60 border border-border/40 rounded-md py-1 px-3 text-[10px] font-mono text-center text-muted/80 truncate">
                  localhost:3000/documents/cv.pdf
                </div>
                <div className="flex items-center gap-2 text-muted/60">
                  <Eye size={12} />
                  <span className="text-[9px] font-mono uppercase font-bold">PDF Reader</span>
                </div>
              </div>

              {/* PDF Native Render Object */}
              <div className="bg-bg-primary/30 w-full flex-1 relative min-h-[550px] lg:min-h-0">
                <object
                  data={localPdfPath}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={localPdfPath}
                    className="w-full h-full border-none"
                    title="Curriculum Vitae"
                  >
                    <p className="text-sm text-center py-12 text-muted font-mono">
                      Your browser does not support PDF embedding.{" "}
                      <a href={localPdfPath} download className="text-accent underline">
                        Click here to download the PDF CV
                      </a>.
                    </p>
                  </iframe>
                </object>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
