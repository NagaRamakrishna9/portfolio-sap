import { motion } from 'framer-motion'

const techItems = [
  'SAP UI5', 'SAP Fiori', 'SAP BTP', 'Spring Boot', 'SAP HANA', 'Java',
  'REST APIs', 'Microservices', 'JavaScript', 'TypeScript', 'PostgreSQL',
  'Git', 'CAP', 'JPA', 'Hibernate', 'HTML5', 'CSS3', 'XML Views',
  'Spring Batch', 'XSUAA', 'MySQL', 'IntelliJ', 'Postman',
]

export default function TechMarquee() {
  const doubled = [...techItems, ...techItems]

  return (
    <div className="relative py-8 border-y border-glass-border overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-text-muted whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-accent-purple/40" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
