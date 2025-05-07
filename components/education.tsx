"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const educationData = [
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Stella Mary's College of Engineering",
      year: "2020 - 2024",
      description:
        "Specialized in computer science and engineering with a focus on software development, algorithms, and web technologies.",
    },
    {
      degree: "Computer Science",
      institution: "St. Bernadetthe's H.S. School",
      year: "2018 - 2020",
      description: "Completed higher secondary education with a focus on computer science, mathematics, and physics.",
    },
    {
      degree: "Secondary Education",
      institution: "St. Bernadetthe's H.S. School",
      year: "2017 - 2018",
      description: "Completed secondary education with distinction in science and mathematics.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
          <span className="text-neon-blue">Education</span>
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My academic journey has equipped me with both theoretical knowledge and practical skills in computer science
          and web development.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {educationData.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-black/50 border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-full bg-neon-blue/10 text-neon-blue">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {item.year}
                  </div>
                </div>
                <CardTitle className="text-xl mt-4 text-white group-hover:text-neon-blue transition-colors">
                  {item.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neon-blue font-medium mb-3">{item.institution}</p>
                <p className="text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
