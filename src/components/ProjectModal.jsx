import { useEffect, useRef } from 'react'
import ExternalLinkIcon from './ExternalLinkIcon.jsx'

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Prevent background scroll and handle Escape key
  useEffect(() => {
    if (!project) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [project, onClose])

  if (!project) return null

  // Close when clicking directly on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="project-modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Compact Modal Header */}
        <div className="project-modal__header">
          <div className="project-modal__case-meta">
            <span className="project-modal__tag">CASE FILE // {project.code}</span>
            <span className="project-modal__bullet" aria-hidden="true">
              &bull;
            </span>
            <span className="project-modal__subtag">PROJECT DOSSIER</span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Modal Title & Compact Overview */}
        <div className="project-modal__title-group">
          <h2 id="modal-project-title" className="project-modal__title">
            {project.title}
          </h2>
          <p className="project-modal__overview">{project.overview}</p>
        </div>

        <div className="project-modal__divider" aria-hidden="true" />

        {/* Modal Body: Two-Column Rows (30% Left / 70% Right) */}
        <div className="project-modal__body">
          {/* Row 01: The Problem */}
          <div className="modal-row">
            <div className="modal-row__left">
              <span className="modal-row__heading">01 &mdash; The Problem</span>
            </div>
            <div className="modal-row__right">
              <p className="modal-row__text">{project.problem}</p>
            </div>
          </div>

          {/* Row 02: The Solution */}
          <div className="modal-row">
            <div className="modal-row__left">
              <span className="modal-row__heading">02 &mdash; The Solution</span>
            </div>
            <div className="modal-row__right">
              <p className="modal-row__text">{project.solution}</p>
            </div>
          </div>

          {/* Row 03: Key Features */}
          <div className="modal-row">
            <div className="modal-row__left">
              <span className="modal-row__heading">03 &mdash; Key Features</span>
            </div>
            <div className="modal-row__right">
              <ul className="modal-row__features-list">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="modal-row__feature-item">
                    <span className="modal-row__feature-bullet" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 04: Technology Stack (compact outlined boxes/tags) */}
          <div className="modal-row">
            <div className="modal-row__left">
              <span className="modal-row__heading">04 &mdash; Technology Stack</span>
            </div>
            <div className="modal-row__right">
              <div className="modal-tech-tags" role="list" aria-label="Technologies used">
                {project.techStack.map((tech) => (
                  <span key={tech} className="modal-tech-box" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 05: GitHub Repository */}
          <div className="modal-row">
            <div className="modal-row__left">
              <span className="modal-row__heading">
                05 &mdash; {project.github.label === 'Visit GitHub Profile'
                  ? 'GitHub Repository'
                  : 'Live Demo'}
              </span>
            </div>
            <div className="modal-row__right">
              {project.github.available && project.github.url ? (
                <a
                  href={project.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-row__repo-link"
                >
                  <span className="modal-row__repo-text">
                    {project.github.label}
                  </span>
                  <ExternalLinkIcon size={14} />
                </a>
              ) : (
                <div className="modal-row__repo-note">
                  <span className="modal-row__repo-badge">Internal / Enterprise Project</span>
                  <p>{project.github.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="project-modal__footer">
          <button
            type="button"
            className="btn btn--solid project-modal__footer-close"
            onClick={onClose}
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  )
}
