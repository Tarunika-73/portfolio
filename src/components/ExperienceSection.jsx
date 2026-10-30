import { useState } from 'react'
import FabricRevealSection from './FabricRevealSection.jsx'
import { EXPERIENCES_DATA } from '../data/experienceData.js'

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null)

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <FabricRevealSection
      id="experience"
      className="experience"
      texture="/images/experience-fabric.png"
      revealRadius={210}
      faintOpacity={0.06}
      touchFaintOpacity={0.16}
    >
      <div className="experience__layout">
        {/* Editorial Section Header */}
        <div className="experience__header">
          <p className="eyebrow">CAREER &amp; INTERNSHIPS</p>
          <h2 className="experience__title">EXPERIENCE</h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="experience__timeline" role="list" aria-label="Professional Experience Timeline">
          {/* Continuous vertical timeline line */}
          <div className="experience__timeline-line" aria-hidden="true" />

          {EXPERIENCES_DATA.map((exp) => {
            const isOpen = expandedId === exp.id
            const headerId = `exp-header-${exp.id}`
            const panelId = `exp-panel-${exp.id}`

            return (
              <div
                key={exp.id}
                className={`experience__item ${isOpen ? 'is-expanded' : ''}`}
                role="listitem"
              >
                {/* Solid Circular Marker on the Vertical Line */}
                <span
                  className={`experience__marker ${isOpen ? 'is-active' : ''}`}
                  aria-hidden="true"
                />

                {/* Interactive Experience Entry Card */}
                <div className="experience__entry">
                  {/* Collapsed Header Bar */}
                  <button
                    type="button"
                    id={headerId}
                    className="experience__header-btn"
                    onClick={() => toggle(exp.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <div className="experience__title-block">
                      <h3 className="experience__role">{exp.role}</h3>
                      <span className="experience__sep" aria-hidden="true">&mdash;</span>
                      <span className="experience__company">{exp.company}</span>
                    </div>

                    <div className="experience__meta-block">
                      <span className="experience__dates">{exp.dates}</span>
                      <span className={`experience__toggle-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 2V12M2 7H12"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {/* Expandable Details Drawer */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className={`experience__drawer ${isOpen ? 'is-open' : ''}`}
                  >
                    <div className="experience__drawer-inner">
                      <div className="experience__details-divider" aria-hidden="true" />

                      {/* Role Overview Paragraph */}
                      <p className="experience__desc">{exp.description}</p>

                      {/* Key Responsibilities */}
                      <div className="experience__responsibilities">
                        <h4 className="experience__subheading">Key Responsibilities</h4>
                        <ul className="experience__resp-list">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="experience__resp-item">
                              <span className="experience__resp-dash" aria-hidden="true">&mdash;</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Stack Tags */}
                      <div className="experience__tech-block">
                        <span className="experience__tech-label">Technology Stack:</span>
                        <div className="experience__tech-tags" role="list" aria-label={`Technologies used at ${exp.company}`}>
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="experience__tech-tag" role="listitem">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </FabricRevealSection>
  )
}
