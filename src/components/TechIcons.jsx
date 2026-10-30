// Authentic, recognizable SVG technology logos for Technical Arsenal
// Consistent visual sizing (~22-24px) designed to center inside station nodes
// Restrained cream/champagne/lilac palette against dark matte violet (#1B0838)

export default function TechIcon({ type, className = '', size = 22, color = 'currentColor' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    className,
    'aria-hidden': true,
  }

  const strokeProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '1.9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  switch (type) {
    // --- FRONTEND ---
    case 'html':
      return (
        <svg {...common}>
          <path d="M1.5 0h21l-1.9 21.2-8.6 2.4-8.6-2.4L1.5 0zm17 5.4H5.5l.4 4.5h12.2l-.5 5.5-5.6 1.6-5.6-1.6-.3-3H3.6l.6 5.3 7.8 2.2 7.8-2.2 1-11.8z" />
        </svg>
      )

    case 'css':
      return (
        <svg {...common}>
          <path d="M1.5 0h21l-1.9 21.2-8.6 2.4-8.6-2.4L1.5 0zm17 5.4H5.5l.3 4.5h7.8l-.4 4.5-4.2 1.1-4.2-1.1-.3-2.6H3.6l.5 5.3 7.9 2.2 7.9-2.2 1.4-14.4z" />
        </svg>
      )

    case 'javascript':
      return (
        <svg {...common}>
          <path d="M0 0h24v24H0V0zm12.8 17.6c.7 1.2 1.8 1.9 3.5 1.9 2 0 3.3-.9 3.3-2.6 0-1.8-1.4-2.4-3.8-3.3-3.4-1.3-4.9-2.6-4.9-5.4 0-3.3 2.6-5.4 6.3-5.4 2.8 0 4.7 1 5.8 3.1l-2.9 1.8c-.6-1.1-1.4-1.6-2.9-1.6-1.4 0-2.4.8-2.4 2 0 1.4 1 2 3.3 2.9 3.7 1.4 5.4 2.8 5.4 5.9 0 3.8-3 5.7-7.2 5.7-4 0-6.4-1.8-7.3-4.1l3.2-1.9zm-8.8.2l3-1.8c.6 1 1.2 1.8 2.4 1.8 1.2 0 2-.5 2-2.5V3.8h3.8v11.6c0 3.9-2.2 5.8-5.6 5.8-3.1 0-4.9-1.6-5.6-3.4z" />
        </svg>
      )

    case 'react':
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="2.2" fill={color} />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      )

    // --- BACKEND ---
    case 'nodejs':
      return (
        <svg {...common}>
          <path d="M12 1.5l10.4 6v12L12 25.5 1.6 19.5v-12L12 1.5zm0 3.2L3.8 9.3v9.4L12 23.3l8.2-4.6V9.3L12 4.7zm0 5.1l5 2.9v5.6L12 21.2l-5-2.9v-5.6l5-2.9z" />
        </svg>
      )

    case 'java':
      return (
        <svg {...strokeProps}>
          {/* Authentic Java coffee cup & steam wisps */}
          <path d="M6 19c3.5 1.2 8.5 1.2 12 0M5 21.5c4 1 10 1 14 0" />
          <path d="M5.5 10.5h11v5c0 2.2-1.8 4-4 4h-3c-2.2 0-4-1.8-4-4v-5z" />
          <path d="M16.5 12h2a2 2 0 010 4h-2" />
          <path d="M10 3c-1.5 1.8-1 3.5 1 5.5M14 2c-1.5 2-1 4 1 6.5" />
        </svg>
      )

    case 'springboot':
      return (
        <svg {...common}>
          {/* Spring Boot leaf inside circle */}
          <path d="M11.9 1a10.9 10.9 0 1010.9 10.9A10.9 10.9 0 0011.9 1zm4.8 14.7c-2 2-4.8 2-6.7.2a4.8 4.8 0 01-.1-6.7c2-2 4.9-1.9 6.8.1 1.7 1.9 1.7 4.6 0 6.4zm-2.8-5.3c-.6-.7-1.7-.7-2.3 0s-.6 1.7 0 2.4a1.7 1.7 0 002.4 0c.6-.7.6-1.7-.1-2.4z" />
        </svg>
      )

    case 'restapi':
      return (
        <svg {...strokeProps}>
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path d="M6 12h3M15 12h3M6 9.5h.01M18 9.5h.01M9.5 10l2.5 2-2.5 2M14.5 10l-2.5 2 2.5 2" />
        </svg>
      )

    case 'python':
      return (
        <svg {...common}>
          <path d="M11.9 0C5.3 0 5.7 2.9 5.7 2.9l.01 3h6.3v.9H3.7S0 6.3 0 12.9c0 6.5 3.3 6.3 3.3 6.3h2v-2.8s-.1-3.3 3.3-3.3h6.3s3.1.1 3.1-3.1V3.1S18.5 0 11.9 0zm-2.3 1.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zm2.5 22.1c6.5 0 6.2-2.9 6.2-2.9l-.01-3H12v-.9h8.3s3.7.4 3.7-6.2c0-6.5-3.3-6.3-3.3-6.3h-2v2.8s.1 3.3-3.3 3.3H9.1s-3.1-.1-3.1 3.1v6.9s-.5 3.2 6.1 3.2zm2.3-1.9a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z" />
        </svg>
      )

    // --- DATABASE & DATA ---
    case 'sql':
      return (
        <svg {...strokeProps}>
          {/* Relational database cylinders */}
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v5.5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 10.5v5.5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5.5" />
          <path d="M4 16v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
        </svg>
      )

    case 'mysql':
      return (
        <svg {...common}>
          {/* Authentic MySQL dolphin (Sakila) silhouette */}
          <path d="M12.04 2.12c-.44.02-.9.1-1.34.25-2.22.75-3.83 2.5-4.42 4.75-.41 1.57-.3 3.2.32 4.67.24.58.55 1.12.92 1.62-.97.52-1.84 1.19-2.58 1.99-.78.85-1.39 1.83-1.8 2.91-.42 1.09-.59 2.25-.5 3.42.09 1.17.47 2.3 1.11 3.29.64.99 1.52 1.81 2.56 2.41 1.04.6 2.22.98 3.43 1.12 1.21.14 2.45.03 3.63-.33 1.18-.36 2.28-.96 3.24-1.74 1.92-1.56 3.24-3.77 3.69-6.2.45-2.43.08-4.95-1.04-7.15-1.12-2.2-2.98-3.92-5.26-4.87-.67-.28-1.37-.43-2.06-.44zm-.05 1.62c.5 0 1 .1 1.48.3 1.83.76 3.32 2.14 4.22 3.91.9 1.77 1.2 3.8.84 5.76-.36 1.96-1.42 3.73-2.96 4.99-.77.63-1.65 1.11-2.6 1.4-.95.29-1.94.38-2.91.27-.97-.11-1.92-.42-2.76-.9-.84-.48-1.55-1.14-2.06-1.93-.51-.79-.81-1.7-.88-2.64-.07-.94.07-1.87.4-2.75.33-.88.82-1.67 1.45-2.35.63-.68 1.39-1.22 2.23-1.6.43-.19.88-.34 1.35-.44-.13.56-.16 1.14-.08 1.71.12.9.49 1.75 1.07 2.44.58.69 1.36 1.19 2.24 1.44.88.25 1.82.21 2.68-.11.86-.32 1.6-.9 2.11-1.67.51-.77.74-1.69.66-2.61-.08-.92-.45-1.79-1.06-2.48-.61-.69-1.42-1.16-2.32-1.35-.42-.09-.85-.12-1.27-.08.15-.36.35-.7.6-1 .25-.3.55-.56.88-.76.33-.2.7-.34 1.08-.41.38-.07.78-.07 1.17 0 .15-.55.24-1.11.27-1.68-.37-.05-.75-.08-1.13-.08z" />
        </svg>
      )

    case 'plsql':
      return (
        <svg {...strokeProps}>
          <ellipse cx="10" cy="5" rx="6.5" ry="2.5" />
          <path d="M3.5 5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V5" />
          <path d="M3.5 10v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" />
          <path d="M17 15l3 3M20 15l-3 3" />
        </svg>
      )

    case 'oracleapex':
      return (
        <svg {...strokeProps}>
          {/* Oracle APEX prism / faceted diamond icon */}
          <path d="M12 2.5L3.5 7.5v9L12 21.5l8.5-5v-9L12 2.5z" />
          <path d="M12 7l5 3v4.5L12 17.5l-5-3V10L12 7z" />
          <path d="M12 2.5v4.5M3.5 7.5L7 10M20.5 7.5L17 10M12 21.5V17" />
        </svg>
      )

    case 'bigquery':
      return (
        <svg {...strokeProps}>
          <ellipse cx="11" cy="6" rx="7" ry="2.5" />
          <path d="M4 6v6.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
          <circle cx="16" cy="16" r="3.8" />
          <path d="M18.8 18.8l3.2 3.2" />
        </svg>
      )

    case 'etlelt':
      return (
        <svg {...strokeProps}>
          <path d="M3 8h11M10 4l4 4-4 4" />
          <path d="M21 16H10M14 20l-4-4 4-4" />
        </svg>
      )

    // --- CLOUD & ANALYTICS ---
    case 'aws':
      return (
        <svg {...common}>
          {/* Authentic AWS smile/arrow mark */}
          <path d="M7.05 13.5c-2.3 0-4.1-.9-4.1-3.4 0-2.8 2.3-3.8 5-3.8h2.1v-.8c0-1.3-.7-1.9-2.2-1.9-1.2 0-2.3.4-3.1.9L3.1 2.2C4.5 1.2 6.4.7 8.6.7c4.1 0 5.1 1.9 5.1 5v6.4h-3v-1.2c-.9 1.6-2.3 2.6-3.65 2.6zm2.7-3.2V8.8H7.9c-1.2 0-2.3.4-2.3 1.6 0 1 .7 1.5 1.9 1.5 1.3 0 2.2-.8 2.2-1.6zm13 6.6c-4.2 2.6-9.8 3.5-14.8 2.4-1.1-.3-.3-.9.4-.9 4.7.9 9.8 0 13.6-2.2.8-.5 1.4.2.8.7zm.7-1.3c-.4-.5-2.5-.2-3.6 0-.4 0-.4-.4 0-.6 2.2-1.3 5.7-.9 6.2-.4.5.6-.2 4-2.3 5.6-.3.3-.7.1-.5-.3.6-1 1-3.4.2-4.3z" />
        </svg>
      )

    case 'azure':
      return (
        <svg {...common}>
          {/* Authentic Microsoft Azure geometric 'A' emblem */}
          <path d="M13.05 2.5L5.7 15.3l5.25 4.7 7.35-17.5h-5.25zm.9 3.5l4.35 11.5-7.8 4.5h8.25l4.5-9.5-9.3-6.5z" />
        </svg>
      )

    case 'gcp':
      return (
        <svg {...strokeProps}>
          {/* Authentic Google Cloud platform node */}
          <path d="M17.5 17.5H6.8A4.8 4.8 0 015 8.3a5.8 5.8 0 0110.8-1.5 4.8 4.8 0 013.7 4.7 4.8 4.8 0 01-2 4z" />
          <circle cx="12" cy="11.5" r="2.2" fill={color} />
        </svg>
      )

    case 'powerbi':
      return (
        <svg {...common}>
          {/* Authentic Power BI 3-bar column glyph */}
          <rect x="3.5" y="12" width="4.5" height="9.5" rx="1.2" />
          <rect x="9.8" y="7" width="4.5" height="14.5" rx="1.2" />
          <rect x="16" y="2.5" width="4.5" height="19" rx="1.2" />
        </svg>
      )

    case 'excel':
      return (
        <svg {...common}>
          {/* Microsoft Excel spreadsheet tile */}
          <path d="M2.5 3.5A1.5 1.5 0 014 2h16a1.5 1.5 0 011.5 1.5v17a1.5 1.5 0 01-1.5 1.5H4a1.5 1.5 0 01-1.5-1.5v-17zM14 6.5h4v1.5h-4v-1.5zm0 3.5h4v1.5h-4V10zm0 3.5h4v1.5h-4v-1.5zm-5.2-4.8l-1.9 3 1.9 3h-2l-1-1.8-1 1.8H3l1.9-3-1.9-3h2l1 1.7 1-1.7h1.8z" />
        </svg>
      )

    // --- CORE CS ---
    case 'dsa':
      return (
        <svg {...strokeProps}>
          {/* Binary tree graph structure */}
          <circle cx="12" cy="5" r="2.5" fill={color} />
          <circle cx="6" cy="18" r="2.5" fill={color} />
          <circle cx="18" cy="18" r="2.5" fill={color} />
          <path d="M10.2 7.2L7.5 15.5M13.8 7.2l2.7 8.3" />
        </svg>
      )

    case 'oop':
      return (
        <svg {...strokeProps}>
          {/* Class inheritance diagram */}
          <rect x="7.5" y="2.5" width="9" height="6.5" rx="1.5" />
          <rect x="2" y="15" width="8.5" height="6.5" rx="1.5" />
          <rect x="13.5" y="15" width="8.5" height="6.5" rx="1.5" />
          <path d="M12 9v3.5M6.2 15V12.5h11.6V15" />
        </svg>
      )

    case 'dbms':
      return (
        <svg {...strokeProps}>
          {/* Relational database schema table */}
          <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
          <path d="M3 8.5h18M3 13.5h18M9 8.5v12M15 8.5v12" />
        </svg>
      )

    case 'os':
      return (
        <svg {...strokeProps}>
          {/* CPU / Microprocessor chip */}
          <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" />
          <path d="M9 2v3.5M15 2v3.5M9 18.5V22M15 18.5V22M2 9h3.5M2 15h3.5M18.5 9H22M18.5 15H22" />
          <rect x="9" y="9" width="6" height="6" rx="1" fill={color} />
        </svg>
      )

    case 'networks':
      return (
        <svg {...strokeProps}>
          {/* Network topology hub */}
          <circle cx="12" cy="5" r="2.5" fill={color} />
          <circle cx="4.5" cy="18" r="2.5" fill={color} />
          <circle cx="19.5" cy="18" r="2.5" fill={color} />
          <path d="M12 7.5v4.5M12 12l-5.5 3.8M12 12l5.5 3.8" />
        </svg>
      )

    // --- TOOLING & DESIGN ---
    case 'figma':
      return (
        <svg {...common}>
          {/* Official Figma 5-piece logo */}
          <path d="M6 24c3.3 0 6-2.7 6-6v-6H6c-3.3 0-6 2.7-6 6s2.7 6 6 6zm0-12h6V6H6C2.7 6 0 8.7 0 12s2.7 6 6 6zm0-12C2.7 0 0 2.7 0 6s2.7 6 6 6h6V0H6zm6 0h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6V0zm0 12h6c3.3 0 6 2.7 6 6s-2.7 6-6 6c-3.3 0-6-2.7-6-6v-6z" transform="scale(0.8) translate(3, 3)" />
        </svg>
      )

    case 'uiux':
      return (
        <svg {...strokeProps}>
          <rect x="3" y="3.5" width="18" height="13.5" rx="2" />
          <path d="M3 8.5h18M8.5 13.5h7M9 20.5h6" />
        </svg>
      )

    case 'git':
      return (
        <svg {...common}>
          {/* Official Git branch mark */}
          <path d="M23.5 10.8L13.2.5a2 2 0 00-2.8 0L8 2.9l3.5 3.5a2.4 2.4 0 013 3l3.3 3.3a2.3 2.3 0 11-1.5 1.4l-3-3v7.3a2.4 2.4 0 11-2.2 0V11a2.4 2.4 0 01-1.3-3.1L6.4 4.5.5 10.4a2 2 0 000 2.8l10.3 10.3a2 2 0 002.8 0l9.9-9.9a2 2 0 000-2.8z" />
        </svg>
      )

    case 'github':
      return (
        <svg {...common}>
          {/* Official GitHub Octocat silhouette */}
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )

    case 'linux':
      return (
        <svg {...common}>
          {/* Authentic Tux penguin silhouette */}
          <path d="M12.3 1.2c-2.4 0-4.1 1.7-4.2 4.4 0 1.3.4 2.6.2 3.9-.3 1.5-1.5 2.8-2.6 3.8-1.4 1.3-2.4 2.9-2.7 4.8-.3 1.9.4 3.7 1.9 4.8 1.4 1 3.2 1.2 4.9.9.8-.1 1.6-.4 2.3-.8.8.4 1.7.7 2.6.8 1.7.3 3.5.1 4.9-.9 1.5-1.1 2.2-2.9 1.9-4.8-.3-1.9-1.3-3.5-2.7-4.8-1.1-1-2.3-2.3-2.6-3.8-.2-1.3.2-2.6.2-3.9-.1-2.7-1.8-4.4-4.2-4.4zm-1.6 4.3c.5 0 .9.5.9 1s-.4 1-.9 1-.9-.5-.9-1 .4-1 .9-1zm3.2 0c.5 0 .9.5.9 1s-.4 1-.9 1-.9-.5-.9-1 .4-1 .9-1zm-2.4 2.2h1.6c.3 0 .5.3.4.6l-.6 1.4c-.1.2-.3.3-.5.3s-.4-.1-.5-.3l-.6-1.4c-.1-.3.1-.6.4-.6zm.8 4.2c2.2 0 4 2.2 4 4.9 0 1.3-.4 2.5-1.2 3.4-.8.9-1.8 1.4-2.8 1.4s-2-.5-2.8-1.4c-.8-.9-1.2-2.1-1.2-3.4 0-2.7 1.8-4.9 4-4.9z" />
        </svg>
      )

    case 'postman':
      return (
        <svg {...common}>
          {/* Authentic Postman flying messenger mark */}
          <path d="M13.8 2.2c-.3 0-.6.1-.8.3L7.3 8.2c-.4.4-.6.9-.6 1.5 0 .6.2 1.1.6 1.5l1.8 1.8-4.9 4.9c-.3.3-.4.7-.4 1.1 0 .4.1.8.4 1.1l1.5 1.5c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l4.9-4.9 1.8 1.8c.4.4.9.6 1.5.6.6 0 1.1-.2 1.5-.6l5.7-5.7c.4-.4.6-.9.6-1.5 0-.6-.2-1.1-.6-1.5l-5.7-5.7c-.2-.2-.5-.3-.8-.3zm-1.8 2.8l4.2 4.2-4.2 4.2-4.2-4.2 4.2-4.2zM21.5 1.5c-.3 0-.6.1-.8.3l-2.1 2.1 1.4 1.4 2.1-2.1c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.6-.3z" />
        </svg>
      )

    default:
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="5" />
        </svg>
      )
  }
}
