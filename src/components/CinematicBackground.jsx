import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Fullscreen cinematic backdrop with soft particles and animated radial gradients
export default function CinematicBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: 0.6 + Math.random() * 1.8,
      a: 0.15 + Math.random() * 0.35,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      // subtle vignette
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.1,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      )
      gradient.addColorStop(0, 'rgba(17,17,17,0.2)')
      gradient.addColorStop(1, 'rgba(0,0,0,0.8)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 215, 130, ${p.a})` // soft gold
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    draw()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft animated gold glow layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[20%] rounded-[40%] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(255,215,130,0.10), transparent 70%)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-[30%] rounded-[40%] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(255,215,130,0.06), transparent 70%)' }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
      />

      {/* Particles layer */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      {/* Top gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
    </div>
  )
}
