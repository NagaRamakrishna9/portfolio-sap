import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Code2, Layers } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: 'Enterprise Focus',
    description: 'Building mission-critical applications for large-scale businesses.',
  },
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'End-to-end development from SAP frontends to Spring Boot backends.',
  },
  {
    icon: Layers,
    title: 'SAP Ecosystem',
    description: 'Deep expertise across the SAP technology stack and cloud platform.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple">
            About
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
        >
          Crafting enterprise solutions<br />
          <span className="gradient-text">that drive business value.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              As an Enterprise Full Stack SAP Engineer, I operate at the intersection of business process
              optimization and modern software engineering. My work centers on building scalable,
              production-grade applications within the SAP ecosystem — from intuitive Fiori interfaces
              to robust Spring Boot microservices.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I thrive on transforming complex business requirements into elegant technical solutions.
              Whether it's architecting property management platforms, designing workflow engines,
              or optimizing SAP HANA queries for enterprise performance — I bring a methodical,
              detail-oriented approach to every challenge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              My experience spans the full SAP technology stack — UI5, Fiori, BTP, CAP, HANA — paired
              with enterprise Java development using Spring Boot, JPA, and REST APIs. I work closely with
              cross-functional teams in Agile environments, delivering solutions that balance technical
              excellence with real business impact.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I'm passionate about clean architecture, maintainable code, and the kind of thoughtful
              engineering that scales. Every system I build is designed not just to work today,
              but to evolve with the business it serves.
            </p>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-card p-5 md:p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-5 group-hover:bg-accent-purple/20 transition-colors">
                <item.icon size={20} className="text-accent-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
