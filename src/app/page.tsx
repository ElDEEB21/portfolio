import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import CompetitiveProgramming from "@/components/competitive-programming"
import Projects from "@/components/projects"
import OpenSource from "@/components/open-source"
import Contact from "@/components/contact"
import AICtaBanner from "@/components/ai-cta-banner"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CompetitiveProgramming />
      <Projects />
      <OpenSource />
      <Contact />
      <AICtaBanner />
      <Footer />
    </main>
  )
}
