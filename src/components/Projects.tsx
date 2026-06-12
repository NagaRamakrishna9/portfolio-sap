import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Layers, Database, Server, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: typeof Layers
  gradient: string
  category: string
}

const projects: Project[] = [
  {
    title: 'PropertyZone Enterprise Platform',
    description:
      'A complete enterprise property management ecosystem supporting projects, reservations, billing plans, workflows, dynamic attributes, reporting, and user management.',
    technologies: ['SAP UI5', 'Spring Boot', 'SAP HANA', 'SAP BTP'],
    icon: Globe,
    gradient: 'from-violet-500/20 to-indigo-500/20',
    category: 'SAP',
  },
  {
    title: 'EOI Management System',
    description:
      'Enterprise solution for managing Expressions of Interest, approvals, reporting, workflows, and document processing across business units.',
    technologies: ['SAP Fiori', 'Spring Boot', 'SAP HANA', 'REST APIs'],
    icon: Layers,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    category: 'SAP',
  },
  {
    title: 'Enterprise Bulk Upload Framework',
    description:
      'Excel-based upload framework with validations, automated mapping, dynamic templates, and backend processing for large-scale data operations.',
    technologies: ['Spring Boot', 'SAP HANA', 'Java', 'REST APIs'],
    icon: Database,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    category: 'Backend',
  },
  {
    title: 'Document & Payment Management Platform',
    description:
      'Business application for document lifecycle management, payment processing, approvals, and enterprise reporting dashboards.',
    technologies: ['SAP UI5', 'Spring Boot', 'SAP BTP', 'Microservices'],
    icon: Server,
    gradient: 'from-pink-500/20 to-rose-500/20',
    category: 'Full Stack',
  },
]

const filterOptions = ['All', 'SAP', 'Backend', 'Full Stack']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple">
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          Featured<br />
          <span className="gradient-text">enterprise projects.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-text-secondary max-w-xl mb-10"
        >
          Production-grade applications built with enterprise architecture, handling real business operations at scale.
        </motion.p>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterOptions.map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === opt
                  ? 'bg-accent-purple text-white'
                  : 'bg-glass-bg border border-glass-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {opt}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient header */}
              <div
                className={`h-36 md:h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
                <project.icon
                  size={56}
                  className="text-text-primary/20 group-hover:text-text-primary/30 transition-colors"
                  strokeWidth={1}
                />
              </div>

              <div className="p-5 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-text-primary leading-snug">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-lg border border-glass-border text-text-muted group-hover:text-accent-purple group-hover:border-accent-purple/30 transition-all shrink-0">
                    <ExternalLink size={14} />
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-accent-purple/8 text-accent-purple border border-accent-purple/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
