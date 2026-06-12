import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Code2, FolderKanban, Clock } from 'lucide-react'

interface Stat {
  icon: typeof TrendingUp
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: TrendingUp, value: 2, suffix: '+', label: 'Years Experience' },
  { icon: Code2, value: 20, suffix: '+', label: 'REST APIs Built' },
  { icon: FolderKanban, value: 4, suffix: '+', label: 'Enterprise Projects' },
  { icon: Clock, value: 1000, suffix: '+', label: 'Development Hours' },
]

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Achievements() {
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
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            By the <span className="gradient-text">numbers.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="glass-card p-5 md:p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-purple/20 transition-colors">
                <stat.icon size={22} className="text-accent-purple" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2 gradient-text">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-xs text-text-muted font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
