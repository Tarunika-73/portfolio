import { useState } from 'react'
import { DOMAINS, NETWORK_ROUTES, SKILL_STOPS } from '../data/skillsData.js'
import TechIcon from './TechIcons.jsx'

export default function TechnicalArsenalSection() {
  const [activeDomain, setActiveDomain] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleDomainSelect = (id) => {
    setActiveDomain(id)
    if (selectedSkill && id !== 'all' && selectedSkill.domain !== id) {
      setSelectedSkill(null)
    }
  }

  const isStopHighlighted = (stop) => {
    if (activeDomain === 'all') return true
    if (activeDomain === 'design' && stop.domain === 'design') return true
    if (activeDomain === 'tooling' && stop.domain === 'tooling') return true
    return stop.domain === activeDomain
  }

  const isRouteHighlighted = (route) => {
    if (activeDomain === 'all') return true
    if (route.id === 'tooling-trunk') {
      return activeDomain === 'tooling' || activeDomain === 'design'
    }
    return route.id === activeDomain
  }

  return (
    <section className="tech-network" id="skills" aria-label="Technical Arsenal">
      <div className="tech-network__container">
        {/* Prominent Section Heading */}
        <div className="tech-network__header">
          <h2 className="tech-network__title">TECHNICAL ARSENAL</h2>

          {/* Domain Badges / Line Filters on Dark Violet */}
          <div className="tech-network__pills" role="tablist" aria-label="Skill domain routes">
            {DOMAINS.map((domain) => {
              const isActive = activeDomain === domain.id
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`tech-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleDomainSelect(domain.id)}
                >
                  <span
                    className="tech-pill__dot"
                    style={{ backgroundColor: domain.color }}
                    aria-hidden="true"
                  />
                  <span className="tech-pill__label">{domain.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Scroll helper indicator on small screens */}
        <div className="tech-network__scroll-hint" aria-hidden="true">
          <span>&larr; Scroll horizontally to inspect the skill network &rarr;</span>
        </div>

        {/* Network Map Stage — Sits directly on Dark Matte Violet background */}
        <div className="tech-network__map-scroll">
          <div className="tech-network__map-wrapper">
            <svg
              className="tech-network__svg"
              viewBox="50 45 1170 565"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Interactive railway network of technical competencies"
            >
              <defs>
                {/* Subtle soft glow for interchange hubs */}
                <filter id="hub-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background transit grid guidelines on dark violet */}
              <g
                className="tech-network__grid"
                opacity="0.18"
                stroke="#E8D5B5"
                strokeWidth="0.8"
                strokeDasharray="4 8"
              >
                <line x1="60" y1="105" x2="1110" y2="105" />
                <line x1="60" y1="215" x2="1110" y2="215" />
                <line x1="60" y1="325" x2="1110" y2="325" />
                <line x1="60" y1="435" x2="1110" y2="435" />
                <line x1="60" y1="545" x2="1110" y2="545" />
                <line x1="1110" y1="65" x2="1110" y2="575" />
              </g>

              {/* Transfer Connectors (connecting tracks between domains) */}
              <g
                className="tech-network__transfers"
                stroke="#E8D5B5"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.4"
              >
                {/* JS -> Node transfer connector */}
                <path d="M 420 105 L 420 215" />
                {/* DBMS -> SQL connector */}
                <path d="M 130 325 L 130 500 Q 130 545 150 545" />
                {/* Python -> Data connector */}
                <path d="M 1040 215 L 1040 285 Q 1040 325 900 325" />
                {/* OS -> Linux connector */}
                <path d="M 720 545 L 1010 545 Q 1060 545 1085 515 L 1110 490" />
              </g>

              {/* Primary Network Track Lines (thin 2.6px, subtle cream/champagne/peach palette) */}
              <g className="tech-network__routes">
                {NETWORK_ROUTES.map((route) => {
                  const highlighted = isRouteHighlighted(route)
                  return (
                    <g
                      key={route.id}
                      className={`tech-route ${highlighted ? 'is-highlighted' : 'is-dimmed'}`}
                    >
                      {/* Track Line */}
                      <path
                        id={`track-${route.id}`}
                        d={route.path}
                        fill="none"
                        stroke={route.color}
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={highlighted ? 0.95 : 0.25}
                      />

                      {/* Moving light beacon traveling along route */}
                      <circle
                        r="3.5"
                        fill="#FFF9F2"
                        stroke={route.color}
                        strokeWidth="1.5"
                        className="tech-network__moving-light"
                      >
                        <animateMotion
                          path={route.path}
                          dur={route.duration}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  )
                })}
              </g>

              {/* Station Stops & Nodes */}
              <g className="tech-network__stops">
                {SKILL_STOPS.map((stop) => {
                  const highlighted = isStopHighlighted(stop)
                  const isSelected = selectedSkill?.id === stop.id
                  const isRight = stop.labelPos === 'right'

                  // Label positions: horizontal routes sit below; vertical right-side route sits to the right
                  const labelX = isRight ? stop.x + 26 : stop.x
                  const labelY = isRight ? stop.y + 4.5 : stop.y + 38
                  const textAnchor = isRight ? 'start' : 'middle'

                  const nodeRadius = stop.isHub ? 22 : 20
                  const iconSize = 22

                  return (
                    <g
                      key={stop.id}
                      className={`tech-stop ${stop.isHub ? 'tech-stop--hub' : ''} ${
                        highlighted ? 'is-highlighted' : 'is-dimmed'
                      } ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedSkill(stop)}
                      onMouseEnter={() => setSelectedSkill(stop)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${stop.name} (${stop.domain})`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedSkill(stop)
                        }
                      }}
                    >
                      {/* Generous hit target */}
                      <circle cx={stop.x} cy={stop.y} r="26" fill="transparent" />

                      {/* Major hub outer halo */}
                      {stop.isHub && (
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r={nodeRadius + 4.5}
                          fill="none"
                          stroke={stop.color}
                          strokeWidth="1.6"
                          strokeDasharray="3 3"
                          opacity="0.8"
                        />
                      )}

                      {/* Station Stop Circle (sitting on dark matte violet #1B0838) */}
                      <circle
                        cx={stop.x}
                        cy={stop.y}
                        r={nodeRadius}
                        fill="#1B0838"
                        stroke={stop.color}
                        strokeWidth={stop.isHub ? '2.5' : '2'}
                        className="tech-stop__circle"
                      />

                      {/* Authentic Brand Technology Logo centered directly inside station node */}
                      <g
                        transform={`translate(${stop.x - iconSize / 2}, ${stop.y - iconSize / 2})`}
                        className="tech-stop__icon-group"
                      >
                        <TechIcon type={stop.iconType} size={iconSize} color={stop.color} />
                      </g>

                      {/* Station Skill Name Label */}
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={textAnchor}
                        className="tech-stop__label"
                        fill="#FFF9F2"
                      >
                        {stop.name}
                      </text>

                      {/* Hub Badge Tag for major interchanges */}
                      {stop.isHub && stop.hubLabel && (
                        <text
                          x={isRight ? stop.x + 26 : stop.x}
                          y={isRight ? stop.y + 19 : stop.y + 53}
                          textAnchor={textAnchor}
                          className="tech-stop__hub-tag"
                          fill={stop.color}
                        >
                          {stop.hubLabel}
                        </text>
                      )}
                    </g>
                  )
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
