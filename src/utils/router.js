import { useState, useEffect } from 'react'

export function getRouteFromLocation() {
  if (typeof window === 'undefined') return 'home'
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '')
  const hash = window.location.hash.toLowerCase()
  if (path === '/achievements' || hash === '#/achievements' || hash === '#achievements') {
    return 'achievements'
  }
  return 'home'
}

export function navigate(to) {
  if (typeof window === 'undefined') return
  if (to === '/achievements') {
    window.history.pushState({}, '', '/achievements')
  } else {
    window.history.pushState({}, '', to || '/')
  }
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function useCurrentRoute() {
  const [route, setRoute] = useState(getRouteFromLocation)

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromLocation())
      const hash = window.location.hash
      if (!hash || hash === '#' || hash === '#home') {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  return [route, navigate]
}
