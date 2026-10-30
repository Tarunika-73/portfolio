import { useEffect } from 'react'
import { useCurrentRoute, navigate } from './utils/router.js'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import TechnicalArsenalSection from './components/TechnicalArsenalSection.jsx'
import FeaturedProjectsSection from './components/FeaturedProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import AchievementsPage from './components/AchievementsPage.jsx'

export default function App() {
  const [route] = useCurrentRoute()

  // Scroll to targeted section if user lands on or navigates to homepage with a hash
  useEffect(() => {
    if (route === 'home') {
      const hash = window.location.hash
      if (hash && hash !== '#' && hash !== '#home') {
        const scrollToTarget = () => {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return true
          }
          return false
        }

        // Attempt scroll immediately or retry after components mount
        if (!scrollToTarget()) {
          const timer = setTimeout(scrollToTarget, 80)
          return () => clearTimeout(timer)
        }
      }
    }
  }, [route])

  if (route === 'achievements') {
    return <AchievementsPage onBack={() => navigate('/')} />
  }

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to about
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnicalArsenalSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  )
}
