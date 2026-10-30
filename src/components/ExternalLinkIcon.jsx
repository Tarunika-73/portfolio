// Clean, bold, black arrow pointing diagonally toward upper-right on a light neutral square background
export default function ExternalLinkIcon({ className = '', size = 11 }) {
  return (
    <span className={`external-link-badge ${className}`.trim()} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
  )
}
