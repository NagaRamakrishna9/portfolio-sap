import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX - 10, y: e.clientY - 10 })

    const over = () => setHovering(true)
    const out = () => setHovering(false)

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, .glass-card, .skill-badge')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', over)
        el.removeEventListener('mouseleave', out)
      })
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
