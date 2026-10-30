import { useState } from 'react'
import { PROJECTS_DATA } from '../data/projectsData.js'
import ProjectModal from './ProjectModal.jsx'

export default function FeaturedProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  // Show only the 6 active projects requested by the user
  const visibleProjects = PROJECTS_DATA.filter((p) => p.visible !== false)

  return (
    <section className="noticeboard-section" id="projects" aria-label="Featured Projects">
      {/* Top hanging wire spanning the noticeboard */}
      {/* <div className="noticeboard__wire-rail" aria-hidden="true">
        <div className="noticeboard__wire-anchor noticeboard__wire-anchor--left" />
        <div className="noticeboard__wire-line" />
        <div className="noticeboard__wire-anchor noticeboard__wire-anchor--right" />
      </div> */}

      <div className="noticeboard__container">
        {/* Section Heading: Bold, Prominent, Editorial */}
        <div className="noticeboard__header">
          <h2 className="noticeboard__title">FEATURED PROJECTS</h2>
        </div>

        {/* Noticeboard Cards Grid */}
        <div className="noticeboard__board" role="list">
          {visibleProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="noticeboard__paper-wrapper"
                style={{
                  '--base-rot': `${project.rotation}deg`,
                  '--card-index': index,
                }}
                role="listitem"
              >
                {/* Hanging string detail connecting from top wire to pin */}
                <div className="noticeboard__thread" aria-hidden="true" />

                {/* Paper sheet */}
                <article
                  className="noticeboard__paper"
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveProject(project)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label={`View dossier for ${project.title}`}
                >
                  {/* Pushpin at top center with metallic anchor point */}
                  <div className="noticeboard__pin" aria-hidden="true">
                    <span className="noticeboard__pin-eyelet" />
                    <span className="noticeboard__pin-head" />
                    <span className="noticeboard__pin-shadow" />
                  </div>

                  {/* Header labels row */}
                  <div className="noticeboard__labels-row">
                    <span className="noticeboard__label">{project.label}</span>
                    {project.sihBadge && (
                      <span className="noticeboard__sih-badge">{project.sihBadge}</span>
                    )}
                  </div>

                  {/* Dark Bold Title */}
                  <h3 className="noticeboard__card-title">{project.title}</h3>

                  {/* Concise Description */}
                  <p className="noticeboard__card-desc">{project.shortDesc}</p>

                  {/* View Record Prompt */}
                  <div className="noticeboard__cta">
                    <span className="noticeboard__cta-text">VIEW RECORD</span>
                    <span className="noticeboard__cta-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </div>

                  {/* Subtle corner fold texture hint */}
                  <div className="noticeboard__corner-fold" aria-hidden="true" />
                </article>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
