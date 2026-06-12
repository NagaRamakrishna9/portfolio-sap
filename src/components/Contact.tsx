import { motion, useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react'

const LinkedinIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nagaramakrishnam@gmail.com',
    href: 'mailto:nagaramakrishnam@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9989037609',
    href: 'tel:+919989037609',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nagaramakrishna',
    href: 'https://www.linkedin.com/in/nagaramakrishna',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-accent-purple block mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's build something<br />
            <span className="gradient-text">extraordinary together.</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Open to enterprise consulting, SAP projects, and full-stack development opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="glass-card p-4 md:p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center shrink-0 group-hover:bg-accent-purple/20 transition-colors">
                  <item.icon size={20} className="text-accent-purple" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-text-primary truncate">{item.value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-muted group-hover:text-accent-purple transition-colors shrink-0"
                />
              </motion.a>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card p-6"
            >
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm font-medium text-text-primary">Bangalore, India</p>
              <p className="text-xs text-text-muted mt-1">Open to remote & relocation</p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 md:p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary w-full justify-center"
              >
                {submitted ? (
                  'Message Sent ✓'
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
