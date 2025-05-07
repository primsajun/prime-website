"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "FCMS Project",
      description: "Used to manage the football club's playears and events.",
      image: "/placeholder.svg?height=300&width=500",
      liveLink: "https://fcms.netlify.app/",
      githubLink: "https://github.com/primsajun",
      technologies: ["React", "Node.js", "supabase"],
    },
    {
      title: "Weather App",
      description: "Real-time weather application with forecast data and location-based services.",
      image: "/placeholder.svg?height=300&width=500",
      liveLink: "https://prime-weather.netlify.app/",
      githubLink: "https://github.com/primsajun",
      technologies: ["JavaScript", "Weather API", "CSS"],
    },
    {
      title: "College Symposium Website",
      description: "Official website for Synectics 2K25, a technical symposium for SMCE CSE department.",
      image: "/placeholder.svg?height=300&width=500",
      liveLink: "https://synectics-2k25-smce-cse.netlify.app/",
      githubLink: "https://github.com/primsajun",
      technologies: ["react", "node.js", "JavaScript"],
    },
    {
      title: "Object Scanner",
      description: "Web application that uses computer vision to detect and identify objects in images.",
      image: "/placeholder.svg?height=300&width=500",
      liveLink: "https://prime-obscan.netlify.app/",
      githubLink: "https://github.com/primsajun",
      technologies: ["TensorFlow.js", "Computer Vision","HTML", "CSS", "JavaScript"],
    },
    {
      title: "Todo List",
      description: "Feature-rich task management application with categories and priority settings.",
      image: "/placeholder.svg?height=300&width=500",
      liveLink: "https://todo-prime47.netlify.app/",
      githubLink: "https://github.com/primsajun",
      technologies: ["React", "LocalStorage", "CSS"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div ref={ref} className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-white">My </span>
          <span className="text-neon-purple">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-neon-purple mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in web development, design, and problem-solving.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-black/50 border border-gray-800 overflow-hidden h-full project-card group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded-full bg-neon-purple/10 text-neon-purple">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    Live Demo <ExternalLink size={14} className="ml-1" />
                  </Button>
                  
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
