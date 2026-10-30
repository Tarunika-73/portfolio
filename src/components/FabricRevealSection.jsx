import { useEffect, useRef } from 'react'

export default function FabricRevealSection({
  id,
  className = '',
  texture,
  children,
  as: Tag = 'section',
  revealRadius = 190,
  faintOpacity = 0.06,
  touchFaintOpacity = 0.16,
}) {
  const rootRef = useRef(null)
  const rafRef = useRef(0)
  const posRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    const apply = () => {
      rafRef.current = 0
      const { x, y, active } = posRef.current
      root.style.setProperty('--mx', `${x}px`)
      root.style.setProperty('--my', `${y}px`)
      root.style.setProperty('--reveal-opacity', active ? '1' : '0')
    }

    const onMove = (event) => {
      if (motion.matches || !finePointer.matches) return
      if (event.pointerType === 'touch') return
      const rect = root.getBoundingClientRect()
      posRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      }
      if (!rafRef.current) rafRef.current = requestAnimationFrame(apply)
    }

    const onLeave = () => {
      posRef.current.active = false
      if (!rafRef.current) rafRef.current = requestAnimationFrame(apply)
    }

    root.addEventListener('pointermove', onMove, { passive: true })
    root.addEventListener('pointerenter', onMove, { passive: true })
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('pointercancel', onLeave)

    return () => {
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerenter', onMove)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('pointercancel', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <Tag
      id={id}
      ref={rootRef}
      className={`fabric-reveal ${className}`.trim()}
      style={{
        '--faint-opacity': faintOpacity,
        '--touch-faint-opacity': touchFaintOpacity,
        '--reveal-radius': `${revealRadius}px`,
        '--mx': '-1000px',
        '--my': '-1000px',
        '--reveal-opacity': '0',
      }}
    >
      {/* Extremely faint base texture across the entire section */}
      <div
        className="fabric-reveal__texture-base"
        style={{ backgroundImage: `url(${texture})` }}
        aria-hidden="true"
      />
      {/* Single soft feathered reveal following mouse position without leaving patches */}
      <div
        className="fabric-reveal__texture-spot"
        style={{ backgroundImage: `url(${texture})` }}
        aria-hidden="true"
      />
      <div className="fabric-reveal__content">{children}</div>
    </Tag>
  )
}
