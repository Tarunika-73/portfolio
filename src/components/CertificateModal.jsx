import { useEffect, useRef } from 'react'

export default function CertificateModal({ achievement, onClose }) {
  const closeButtonRef = useRef(null)

  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (!achievement) return

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
  }, [achievement, onClose])

  if (!achievement || (!achievement.certificateUrl && !achievement.certificateImage)) return null

  const certificateSrc = achievement.certificateUrl || achievement.certificateImage

  // Close when clicking directly on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="cert-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        {/* Compact Header */}
        <div className="cert-modal__header">
          <div className="cert-modal__meta">
            <span className="cert-modal__tag">
              VERIFIED CREDENTIAL // {achievement.eyebrow || 'ACHIEVEMENT'}
            </span>
            <h2 id="cert-modal-title" className="cert-modal__title">
              {achievement.title}
            </h2>
            {achievement.organization && (
              <p className="cert-modal__org">
                {achievement.organization}
                {achievement.role ? ` · Role: ${achievement.role}` : ''}
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="cert-modal__close"
            onClick={onClose}
            aria-label="Close certificate viewer"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="cert-modal__content">
          <img
            src={certificateSrc}
            alt={`Certificate: ${achievement.title}`}
            className="cert-modal__image"
            loading="eager"
          />
        </div>

        {/* Bottom Action Footer */}
        <div className="cert-modal__footer">
          <div className="cert-modal__footer-info">
            {(achievement.duration || achievement.date) && (
              <span className="cert-modal__date">
                {achievement.duration ? `Duration: ${achievement.duration}` : achievement.date}
              </span>
            )}
            {achievement.certificateDate && (
              <span className="cert-modal__badge">
                Cert Date: {achievement.certificateDate}
              </span>
            )}
            {achievement.badge && (
              <span className="cert-modal__badge">{achievement.badge}</span>
            )}
            {achievement.score && (
              <span className="cert-modal__score">{achievement.score}</span>
            )}
            {achievement.relatedProject && (
              <span className="cert-modal__project-hint">
                Related Project: <strong>{achievement.relatedProject}</strong>
              </span>
            )}
          </div>

          <div className="cert-modal__actions">
            {achievement.credentialUrl && (
              <a
                href={achievement.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--solid cert-modal__btn cert-modal__btn--verify"
                title="Verify credential on official platform"
              >
                Verify Credential
              </a>
            )}
            <a
              href={certificateSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost cert-modal__btn"
              title="Open full-resolution certificate image in a new tab"
            >
              Open Full Resolution
            </a>
            <button
              type="button"
              className="btn btn--solid cert-modal__btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
