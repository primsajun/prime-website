"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Colors for particles - using purple and blue theme
    const colors = [
      "rgba(168, 85, 247, 0.7)", // neon purple
      "rgba(59, 130, 246, 0.7)", // neon blue
      "rgba(255, 255, 255, 0.5)", // white with lower opacity
    ]

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20) // Adjust density

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Connect particles with lines if they're close enough
        connectParticles(particle, particles.slice(index))
      })
    }

    // Connect particles with lines
    const connectParticles = (particle: Particle, otherParticles: Particle[]) => {
      const maxDistance = 150 // Maximum distance to draw connections

      otherParticles.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - distance / maxDistance

          // Draw line
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)

          // Use a gradient of the two particle colors
          const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
          gradient.addColorStop(0, particle.color.replace("0.7", `${opacity * 0.5}`))
          gradient.addColorStop(1, otherParticle.color.replace("0.7", `${opacity * 0.5}`))

          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    }

    // Animation loop
    const animate = () => {
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-70" />
}
