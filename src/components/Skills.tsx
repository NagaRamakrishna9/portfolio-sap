import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface SkillCategory {
  name: string
  color: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    name: 'Frontend',
    color: '#8b5cf6',
    skills: ['SAP UI5', 'SAP Fiori', 'JavaScript', 'HTML5', 'CSS3', 'XML Views'],
  },
  {
    name: 'Backend',
    color: '#6366f1',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JPA', 'Hibernate', 'Spring Batch'],
  },
  {
    name: 'SAP',
    color: '#3b82f6',
    skills: ['SAP BTP', 'SAP HANA', 'CAP', 'XSUAA', 'Destination Services'],
  },
  {
    name: 'Databases',
    color: '#06b6d4',
    skills: ['SAP HANA', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'Tools',
    color: '#ec4899',
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ', 'Business Application Studio'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredCategories = activeCategory
    ? categories.filter(c => c.name === activeCategory)
    : categories

  return (
    <section id="skills" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          Technology stack &<br />
          <span className="gradient-text">core competencies.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-text-secondary max-w-xl mb-8"
        >
          A comprehensive skill set spanning the SAP ecosystem, enterprise Java development, and modern cloud technologies.
        </motion.p>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              !activeCategory
                ? 'bg-accent-purple text-white'
                : 'bg-glass-bg border border-glass-border text-text-secondary hover:text-text-primary'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.name
                  ? 'bg-accent-purple text-white'
                  : 'bg-glass-bg border border-glass-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.1 }}
              className="glass-card p-5 md:p-6 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}40` }}
                />
                <h3 className="text-base font-semibold text-text-primary">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
