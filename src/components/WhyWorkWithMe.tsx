import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Cpu, Code2, Boxes, Gauge, Workflow } from 'lucide-react'

const reasons = [
  {
    icon: Building2,
    title: 'Enterprise Development',
    description: 'Production-grade applications built for scale, reliability, and business continuity.',
  },
  {
    icon: Cpu,
    title: 'SAP Ecosystem Expertise',
    description: 'Deep knowledge across SAP UI5, Fiori, BTP, HANA, CAP, and cloud services.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end ownership from frontend interfaces to backend microservices.',
  },
  {
    icon: Boxes,
    title: 'Microservices Architecture',
    description: 'Designing distributed systems with clean boundaries and scalable patterns.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Systematic approach to query tuning, caching, and frontend performance.',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Streamlining complex workflows through intelligent automation and integration.',
  },
]

export default function WhyWorkWithMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple block mb-4">
            Why Work With Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What I <span className="gradient-text">bring to the table.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-5 md:p-6 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/0 to-accent-indigo/0 group-hover:from-accent-purple/5 group-hover:to-accent-indigo/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-5 group-hover:bg-accent-purple/20 transition-colors">
                  <item.icon size={22} className="text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
