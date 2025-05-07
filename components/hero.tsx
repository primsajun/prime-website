"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = textElement.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      textElement.style.textShadow = `
        ${x * 10}px ${y * 10}px 15px rgba(168, 85, 247, 0.7),
        ${-x * 10}px ${-y * 10}px 15px rgba(59, 130, 246, 0.7)
      `
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-10">
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-neon-blue mb-4 tracking-wider"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          HELLO, I AM
        </motion.p>

        <motion.h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-white">Prim </span>
          <span className="text-neon-purple">Sajun</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I create stunning, responsive websites and applications with modern technologies. Specializing in both
          frontend and backend development, I bring creative designs to life.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="bg-neon-purple hover:bg-neon-purple/80 text-white font-medium"
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/primsajun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/prim-sajun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com/sajunnnnnn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="profile-picture rounded-full overflow-hidden w-64 h-64 border-4 border-neon-purple">
          <Image
            src="/WhatsApp Image 2025-04-16 at 9.18.52 PM.jpeg"
            alt="Prim Sajun"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}
