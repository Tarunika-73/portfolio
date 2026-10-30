export const RESUME_PATH = '/files/Tarunika_resume_G.pdf'

export default function ResumeButton({
  className = '',
  children = 'Download Resume',
  onClick,
}) {
  return (
    <a
      className={className}
      href={RESUME_PATH}
      download="Tarunika_resume_G.pdf"
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  )
}
