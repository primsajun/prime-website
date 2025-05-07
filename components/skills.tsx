"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Database, Globe, Server } from "lucide-react"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
      ],
      color: "neon-purple",
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Photoshop", level: 82 },
        { name: "Prototyping", level: 78 },
      ],
      color: "neon-blue",
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "Java", level: 78 },
      ],
      color: "neon-purple",
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "Firebase", level: 82 },
        { name: "Supabase", level: 78 },
        { name: "MongoDB", level: 80 },
      ],
      color: "neon-blue",
    },
    {
      title: "DevOps & Deployment",
      icon: <Globe size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 78 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 88 },
      ],
      color: "neon-purple",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
          <span className="text-neon-blue">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I've developed a diverse set of skills across web development and design, allowing me to create complete,
          polished web solutions.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full bg-${category.color}/10 text-${category.color} mr-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className={`text-${category.color}`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      className={`bg-${category.color} h-2.5 rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
