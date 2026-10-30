import { useEffect, useState } from 'react'

const ROLES = [
  'Computer Science Student',
  'AI Enthusiast',
  'Full Stack Developer',
]

export default function TypingText({ roles = ROLES }) {
  const longest = roles.reduce((a, b) => (a.length >= b.length ? a : b))
  const [text, setText] = useState('')
  const [reduceMotion, setReduceMotion] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      const id = window.setInterval(() => {
        setRoleIndex((current) => (current + 1) % roles.length)
      }, 2800)
      return () => window.clearInterval(id)
    }

    let role = 0
    let char = 0
    let deleting = false
    let timer = 0

    const tick = () => {
      const full = roles[role]

      if (!deleting) {
        char += 1
        setText(full.slice(0, char))
        if (char === full.length) {
          deleting = true
          timer = window.setTimeout(tick, 1600)
          return
        }
        timer = window.setTimeout(tick, 72)
        return
      }

      char -= 1
      setText(full.slice(0, char))
      if (char === 0) {
        deleting = false
        role = (role + 1) % roles.length
        timer = window.setTimeout(tick, 280)
        return
      }
      timer = window.setTimeout(tick, 38)
    }

    timer = window.setTimeout(tick, 400)
    return () => window.clearTimeout(timer)
  }, [reduceMotion, roles])

  const visible = reduceMotion ? roles[roleIndex] : text

  return (
    <p className="typing">
      <span className="typing__prefix">I&apos;m a</span>
      <span className="typing__track">
        <span className="typing__ghost" aria-hidden="true">
          {longest}
        </span>
        <span className="typing__live" aria-live="polite">
          {visible}
          <span className="typing__caret" aria-hidden="true" />
        </span>
      </span>
    </p>
  )
}
