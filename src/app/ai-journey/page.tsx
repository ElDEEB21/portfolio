import type { Metadata } from "next"
import AIHero from "@/components/ai-journey/ai-hero"
import LearningTimeline from "@/components/ai-journey/learning-timeline"
import AIProjects from "@/components/ai-journey/ai-projects"
import AICertificates from "@/components/ai-journey/ai-certificates"
import AISkills from "@/components/ai-journey/ai-skills"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI & Computer Vision Journey — Abdulrahman Eldeeb",
  description:
    "My learning path through Data Science, Deep Learning, and Computer Vision — courses, projects, and certificates.",
  openGraph: {
    title: "AI & Computer Vision Journey — Abdulrahman Eldeeb",
    description:
      "My learning path through Data Science, Deep Learning, and Computer Vision — courses, projects, and certificates.",
  },
}

export default function AIJourneyPage() {
  return (
    <main>
      <AIHero />
      <LearningTimeline />
      <AIProjects />
      <AICertificates />
      <AISkills />
      <Footer />
    </main>
  )
}
