"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications = [
    {
      title: "JavaScript Foundations Professional Certificate",
      issuer: "Mozilla",
      date: "2023",
      description:
        "Comprehensive certification covering JavaScript fundamentals, advanced concepts, and best practices for web development.",
      link: "https://www.linkedin.com/learning/certificates/b8e1f6c4306921abb8b928971c698ba344b4fce70c1d6d2fbb25e689ed857d10",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2022",
      description:
        "Professional certification validating technical expertise in AWS cloud services, architecture, and deployment strategies.",
      link: "https://www.credly.com/badges/2503aa56-9a81-4ff0-a6ff-80542c279b62",
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
          <span className="text-neon-purple">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-neon-purple mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I continuously enhance my skills through professional certifications and courses, staying current with the
          latest web technologies and cloud services.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-black/50 border border-neon-purple/30 hover:border-neon-purple transition-all duration-300 h-full flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-full bg-neon-purple/10 text-neon-purple">
                    <Award size={24} />
                  </div>
                  <div className="text-gray-400 text-sm">{cert.date}</div>
                </div>
                <CardTitle className="text-xl mt-4 text-white group-hover:text-neon-purple transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-neon-purple font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400">{cert.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  View Certificate <ExternalLink size={14} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
