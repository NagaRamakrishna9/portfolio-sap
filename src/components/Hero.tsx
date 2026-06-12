import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, FolderOpen, Mail, ChevronDown } from 'lucide-react'

const titles = [
  'Enterprise SAP Engineer',
  'SAP UI5 Developer',
  'SAP Fiori Consultant',
  'Spring Boot Developer',
  'SAP BTP Engineer',
  'Full Stack Developer',
]

const floatingBadges = [
  { label: 'SAP UI5', x: '10%', y: '20%', delay: 0 },
  { label: 'Spring Boot', x: '80%', y: '15%', delay: 0.5 },
  { label: 'SAP BTP', x: '85%', y: '65%', delay: 1 },
  { label: 'REST APIs', x: '5%', y: '70%', delay: 1.5 },
  { label: 'SAP HANA', x: '75%', y: '40%', delay: 2 },
  { label: 'Microservices', x: '15%', y: '45%', delay: 0.8 },
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px]" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute hidden lg:block skill-badge pointer-events-none select-none"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1, 0.9],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: badge.delay,
            ease: 'easeInOut',
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-bg mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-text-secondary tracking-wide">
            Available for Enterprise Projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-text-primary">Naga</span>
          <br />
          <span className="gradient-text">Ramakrishna</span>
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-9 mb-6 flex items-center justify-center overflow-hidden"
        >
          <motion.p
            key={titleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-mono text-accent-purple font-medium"
          >
            {titles[titleIndex]}
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Building scalable enterprise applications, SAP solutions, and modern business platforms.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-text-muted max-w-xl mx-auto leading-relaxed mb-10"
        >
          Specializing in SAP UI5, SAP Fiori, SAP BTP, Spring Boot, SAP HANA, REST APIs,
          and enterprise-grade application development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="btn-primary">
            <Download size={16} />
            Download Resume
          </button>
          <a href="#projects" className="btn-secondary">
            <FolderOpen size={16} />
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
