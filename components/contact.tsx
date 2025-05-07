"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Phone, Mail, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://formspree.io/f/xyzwjkeo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        e.currentTarget.reset()
      } else {
        alert("Form submission failed. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("you're welcome.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "primsajun24@gmail.com",
      link: "mailto:primsajun24@gmail.com",
      color: "neon-purple",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91 9500352168",
      link: "tel:+919500352168",
      color: "neon-blue",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      details: "github.com/primsajun",
      link: "https://github.com/primsajun",
      color: "neon-purple",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      details: "linkedin.com/in/prim-sajun",
      link: "https://linkedin.com/in/prim-sajun",
      color: "neon-blue",
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram",
      details: "instagram.com/sajunnnnnn",
      link: "https://instagram.com/sajunnnnnn",
      color: "neon-purple",
    },
  ]

  return (
    <div ref={ref} className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-white">Get In </span>
          <span className="text-neon-blue">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Let's create
          something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:opacity-80 transition-opacity"
                  >
                    <div className={`p-3 rounded-full bg-${info.color}/10 text-${info.color} mr-4`}>{info.icon}</div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-purple/20 text-neon-purple mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button className="mt-6 bg-neon-blue hover:bg-neon-blue/80" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="prim sajun"
                        className="bg-black/70 border-gray-700 focus:border-neon-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="primsajun@example.com"
                        className="bg-black/70 border-gray-700 focus:border-neon-blue"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      className="bg-black/70 border-gray-700 focus:border-neon-blue"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="bg-black/70 border-gray-700 focus:border-neon-blue min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
