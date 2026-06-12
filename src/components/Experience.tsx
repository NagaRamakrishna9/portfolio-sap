import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin } from 'lucide-react'

interface Job {
  company: string
  role: string
  duration: string
  location?: string
  achievements: string[]
}

const jobs: Job[] = [
  {
    company: 'Inflexion Infotech',
    role: 'SAP Fiori/UI5 Consultant',
    duration: 'Nov 2024 — Present',
    location: 'Bangalore, India',
    achievements: [
      'Developed enterprise-grade SAP Fiori applications for large-scale property management systems.',
      'Architected scalable Spring Boot microservices with clean separation of concerns and domain-driven design.',
      'Built end-to-end Property Management modules handling projects, units, reservations, and workflows.',
      'Designed and implemented comprehensive Billing modules with dynamic billing plans and payment processing.',
      'Integrated complex REST APIs across multiple enterprise systems and SAP BTP services.',
      'Engineered solutions on SAP BTP leveraging Destination Services, XSUAA, and CAP framework.',
      'Optimized SAP HANA queries and data models for high-performance enterprise reporting.',
      'Implemented robust authentication and authorization using XSUAA and Spring Security.',
      'Collaborated effectively with cross-functional Agile teams across multiple project streams.',
      'Improved application performance and user experience through systematic frontend optimization.',
    ],
  },
  {
    company: 'Kiros Technologies',
    role: 'Full Stack Java Developer Intern',
    duration: 'Mar 2024 — Jun 2024',
    achievements: [
      'Developed robust backend services using Java Spring Boot with clean architecture patterns.',
      'Implemented full CRUD applications with JPA/Hibernate for enterprise data management.',
      'Built RESTful APIs following industry best practices for API design and documentation.',
      'Worked with PostgreSQL and MySQL databases, writing optimized queries and managing schemas.',
      'Gained foundational enterprise development experience in Agile delivery environments.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
        >
          Professional<br />
          <span className="gradient-text">journey.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[19px] top-2 bottom-2 timeline-line" />

          <div className="space-y-8">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[13px] top-1.5 timeline-dot" />

                {/* Card */}
                <div className="glass-card p-5 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">{job.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-accent-purple" />
                          {job.company}
                        </span>
                        {job.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-accent-purple" />
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted bg-glass-bg px-3 py-1.5 rounded-full border border-glass-border">
                      <Calendar size={12} />
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {job.achievements.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 + i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-purple/50 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
