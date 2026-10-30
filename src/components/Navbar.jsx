import { useState } from 'react'
import ResumeButton from './ResumeButton.jsx'
import { navigate, getRouteFromLocation } from '../utils/router.js'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '/achievements', label: 'Achievements', isRoute: true },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  const handleLinkClick = (e, link) => {
    close()
    if (link.isRoute) {
      e.preventDefault()
      navigate(link.href)
      return
    }

    if (getRouteFromLocation() !== 'home') {
      e.preventDefault()
      navigate('/' + link.href)
      return
    }

    // On home page: smooth scroll directly to the section
    const targetId = link.href.startsWith('#') ? link.href : `#${link.href}`
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      e.preventDefault()
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', targetId)
    }
  }

  const handleBrandClick = (e) => {
    close()
    if (getRouteFromLocation() !== 'home') {
      e.preventDefault()
      navigate('/')
    } else {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '#home')
    }
  }

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#home" onClick={handleBrandClick}>
          <span className="nav__mark">TG</span>
          <span className="nav__name">Tarunika Ganesan</span>
        </a>

        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ResumeButton className="nav__text-link">Resume</ResumeButton>
          </li>
        </ul>

        <div className="nav__end">
          <a
            className="nav__hire"
            href="mailto:tarunikaganesan2006@gmail.com"
          >
            Hire Me
          </a>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      <div
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        id="mobile-nav"
        hidden={!open}
      >
        <ul>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ResumeButton className="nav-drawer__resume" onClick={close}>
              Resume
            </ResumeButton>
          </li>
          <li>
            <a
              className="nav-drawer__hire"
              href="mailto:tarunikaganesan2006@gmail.com"
              onClick={close}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
