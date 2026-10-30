import { useState, useEffect } from 'react'
import { ACHIEVEMENTS_DATA } from '../data/achievementsData.js'
import CertificateModal from './CertificateModal.jsx'

function PinnedAchievementCard({ entry, index, onOpenCertificate }) {
  const hasCertificate = Boolean(
    (entry.certificateUrl && entry.certificateUrl.trim() !== '') ||
    (entry.certificateImage && entry.certificateImage.trim() !== '')
  )

  const handleCardClick = () => {
    if (hasCertificate && onOpenCertificate) {
      onOpenCertificate(entry)
    }
  }

  return (
    <div
      className="achievement-card-wrapper"
      style={{
        '--base-rot': `${entry.rotation || 0}deg`,
        '--card-index': index,
      }}
      role="listitem"
    >
      {/* Hanging String connecting pin to overhead anchor */}
      <div className="achievement-thread" aria-hidden="true">
        <span className="achievement-thread__eyelet" />
        <span className="achievement-thread__line" />
      </div>

      {/* Warm Ivory Paper Card */}
      <article
        className={`achievement-paper ${hasCertificate ? 'achievement-paper--clickable' : ''}`}
        onClick={handleCardClick}
      >
        {/* Pushpin overlapping top edge of the card */}
        <div
          className={`achievement-pin achievement-pin--${entry.pinColor || 'terracotta'}`}
          aria-hidden="true"
        >
          <span className="achievement-pin__eyelet" />
          <span className="achievement-pin__head" />
          <span className="achievement-pin__shadow" />
        </div>

        {/* Top Header Row: Eyebrow + Certificate Button */}
        <div className="achievement-paper__header">
          <span className="achievement-paper__eyebrow">{entry.eyebrow}</span>

          {/* Certificate Viewer Arrow Button */}
          {hasCertificate ? (
            <button
              type="button"
              className="achievement-paper__cert-btn"
              onClick={(e) => {
                e.stopPropagation()
                onOpenCertificate(entry)
              }}
              aria-label={`View certificate for ${entry.title}`}
              title="View certificate"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          ) : (
            <span
              className="achievement-paper__cert-btn achievement-paper__cert-btn--disabled"
              aria-hidden="true"
              title="Documentation pending verification"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          )}
        </div>

        {/* Card Title (Prominent Serif Display) */}
        <h3 className="achievement-paper__title">{entry.title}</h3>

        {/* Organizing Institution */}
        {entry.organization && (
          <p className="achievement-paper__org">{entry.organization}</p>
        )}

        {/* Role */}
        {entry.role && (
          <p className="achievement-paper__role">
            <span className="achievement-paper__role-label">Role:</span>{' '}
            <span className="achievement-paper__role-val">{entry.role}</span>
          </p>
        )}

        {/* Short Description */}
        {entry.description && (
          <p className="achievement-paper__desc">{entry.description}</p>
        )}

        {/* Related Project */}
        {entry.relatedProject && (
          <div className="achievement-paper__project">
            <span className="achievement-paper__project-label">Related Project:</span>{' '}
            <span className="achievement-paper__project-name">{entry.relatedProject}</span>
          </div>
        )}

        {/* Optional Date / Duration / Status Badge & Credential / Score */}
        {(entry.duration || entry.date || entry.score || entry.badge || entry.credentialUrl) && (
          <div className="achievement-paper__footer">
            {(entry.duration || entry.date) && (
              <span className="achievement-paper__date">
                {entry.duration ? `Duration: ${entry.duration}` : entry.date}
              </span>
            )}
            {entry.badge && (
              <span className="achievement-paper__badge">{entry.badge}</span>
            )}
            {entry.score && (
              <span className="achievement-paper__score">{entry.score}</span>
            )}
            {entry.credentialUrl && (
              <a
                href={entry.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-paper__verify-link"
                onClick={(e) => e.stopPropagation()}
                title="Verify credential on official platform"
              >
                Verify Credential &rarr;
              </a>
            )}
          </div>
        )}

        {/* Subtle corner fold texture hint */}
        <div className="achievement-paper__corner-fold" aria-hidden="true" />
      </article>
    </div>
  )
}

/* Dedicated Background Doodles Layer: 8 minimal hand-drawn decorations scattered across the full page */
function PageBackgroundDoodles() {
  return (
    <div className="achievements-board-decorations" aria-hidden="true">
      {/* 1. Curved dashed arrow in upper-left margin near header */}
      <svg
        className="page-doodle page-doodle--1"
        viewBox="0 0 110 50"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M8 42 C 40 12, 75 14, 98 32"
          strokeWidth="1.3"
          strokeDasharray="3.5 3"
          strokeLinecap="round"
        />
        <path
          d="M89 31 L 99 33 L 96 23"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 2. Four-point sparkle star in upper-right margin beside Category 1 */}
      <svg
        className="page-doodle page-doodle--2"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M16 2 Q 16 16, 30 16 Q 16 16, 16 30 Q 16 16, 2 16 Q 16 16, 16 2 Z"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="1.2" fill="currentColor" />
      </svg>

      {/* 3. Hand-drawn investigation question note in left margin beside Category 2 */}
      <svg
        className="page-doodle page-doodle--3"
        viewBox="0 0 28 40"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M6 13 C 6 4, 23 4, 23 14 C 23 21, 14 21, 14 28"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="35" r="1.3" fill="currentColor" />
      </svg>

      {/* 4. Fine connective wave/loop in whitespace between Category 2 & 3 */}
      <svg
        className="page-doodle page-doodle--4"
        viewBox="0 0 130 45"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M6 32 C 35 8, 70 42, 105 18 C 115 12, 122 16, 126 22"
          strokeWidth="1.3"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Open hand-drawn focus circle in left margin beside Category 3 */}
      <svg
        className="page-doodle page-doodle--5"
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M22 4 C 33 4, 40 12, 40 22 C 40 33, 31 40, 21 40 C 10 40, 4 31, 4 21 C 4 11, 13 4, 25 5"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>

      {/* 6. Downward curving arrow in right margin beside Category 4 */}
      <svg
        className="page-doodle page-doodle--6"
        viewBox="0 0 70 80"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M20 6 C 55 18, 52 50, 28 68"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M38 66 L 27 68 L 30 57"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 7. Delicate asterisk / star cluster in left margin beside Category 5 */}
      <svg
        className="page-doodle page-doodle--7"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
      >
        <line x1="14" y1="3" x2="14" y2="25" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="3" y1="14" x2="25" y2="14" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="6" y1="6" x2="22" y2="22" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="22" y1="6" x2="6" y2="22" strokeWidth="1.3" strokeLinecap="round" />
      </svg>

      {/* 8. Hand-drawn fluid wave squiggle in lower right margin */}
      <svg
        className="page-doodle page-doodle--8"
        viewBox="0 0 90 28"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M5 14 Q 18 3, 30 14 T 55 14 T 80 14"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function AchievementsPage({ onBack }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Achievements — Tarunika Ganesan'
    return () => {
      document.title = 'Tarunika Ganesan — Portfolio'
    }
  }, [])

  return (
    <div className="achievements-page achievements-page--board">
      {/* Top Bar with Editorial Back Link (Navbar is deliberately hidden) */}
      <header className="achievements-board-top">
        <div className="achievements-board-top__inner">
          <button
            type="button"
            className="achievements-board-back-btn"
            onClick={onBack}
            aria-label="Return to portfolio home"
          >
            <span aria-hidden="true">&larr;</span> BACK TO PORTFOLIO
          </button>
        </div>
      </header>

      {/* Main Board Container */}
      <main className="achievements-board-main">
        {/* Full Page Background Doodles (8 scattered minimal elements) */}
        <PageBackgroundDoodles />

        <div className="achievements-board-container">
          {/* Page Heading & Editorial Introduction */}
          <div className="achievements-board-header">
            <p className="eyebrow achievements-board-eyebrow">MILESTONES &amp; CREDENTIALS</p>
            <h1 className="achievements-board-title">ACHIEVEMENTS</h1>
            <p className="achievements-board-subtitle">
              A collection of milestones, experiences, and accomplishments that have shaped my journey.
            </p>
          </div>

          {/* Five Categories in exact order */}
          <div className="achievements-board-categories">
            {ACHIEVEMENTS_DATA.map((cat) => (
              <section
                key={cat.id}
                className="achievement-board-category"
                aria-labelledby={`cat-heading-${cat.id}`}
              >
                {/* Category Header with Number & Divider */}
                <div className="achievement-board-category__header">
                  <div className="achievement-board-category__title-group">
                    <span className="achievement-board-category__num">{cat.number}</span>
                    <h2
                      id={`cat-heading-${cat.id}`}
                      className="achievement-board-category__title"
                    >
                      {cat.category}
                    </h2>
                  </div>
                </div>

                {/* Hanging Pinned Cards Grid (3 cards per row on desktop) */}
                <div className="achievement-board-grid" role="list">
                  {cat.entries.map((entry, entryIndex) => (
                    <PinnedAchievementCard
                      key={entry.id}
                      entry={entry}
                      index={entryIndex}
                      onOpenCertificate={setSelectedAchievement}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Return Link */}
          <div className="achievements-board-bottom">
            <button
              type="button"
              className="btn btn--solid achievements-board-return-btn"
              onClick={onBack}
            >
              <span aria-hidden="true">&larr;</span> RETURN TO MAIN PORTFOLIO
            </button>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="achievements-board-footer">
        <div className="achievements-board-footer__inner">
          <span>Tarunika Ganesan</span>
          <span aria-hidden="true">&bull;</span>
          <span>Designed with intention.</span>
          <span aria-hidden="true">&bull;</span>
          <span>&copy; {currentYear}</span>
        </div>
      </footer>

      {/* Certificate Viewer Modal */}
      {selectedAchievement && (
        <CertificateModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </div>
  )
}
