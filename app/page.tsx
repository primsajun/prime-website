"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Instagram } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleScroll = () => {
    const sections = ["home", "education", "certifications", "skills", "projects", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <ParticleBackground />

        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        <main className="container mx-auto px-4 pt-20 pb-10">
          <section id="home" className="min-h-screen flex items-center">
            <Hero />
          </section>

          <motion.div
            className="flex justify-center my-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              variant="outline"
              className="text-neon-purple border-neon-purple hover:bg-neon-purple/10 animate-pulse"
              onClick={() => scrollToSection("education")}
            >
              Explore My Portfolio <ChevronDown className="ml-2" />
            </Button>
          </motion.div>

          <section id="education" className="min-h-screen pt-20">
            <Education />
          </section>

          <section id="certifications" className="min-h-screen pt-20">
            <Certifications />
          </section>

          <section id="skills" className="min-h-screen pt-20">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen pt-20">
            <Projects />
          </section>

          <section id="contact" className="min-h-screen pt-20">
            <Contact />
          </section>
        </main>

        <footer className="border-t border-neon-purple/30 py-6 backdrop-blur-sm bg-black/50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-neon-purple mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} | Prim Sajun | Web Developer & Designer</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/primsajun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/prim-sajun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-purple hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/sajunnnnnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-white hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
