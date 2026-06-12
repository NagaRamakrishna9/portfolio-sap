import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">NR</span>
          <span className="text-xs text-text-muted">|</span>
          <span className="text-xs text-text-muted">Enterprise SAP Engineer</span>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-text-muted">
          Built with <Heart size={12} className="text-accent-purple" /> by Naga Ramakrishna
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/nagaramakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-accent-purple transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nagaramakrishnam@gmail.com"
            className="text-xs text-text-muted hover:text-accent-purple transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
