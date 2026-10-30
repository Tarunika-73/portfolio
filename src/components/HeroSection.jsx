import ResumeButton from './ResumeButton.jsx'
import TypingText from './TypingText.jsx'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__atmosphere" aria-hidden="true" />

      <div className="hero__name" aria-hidden="true">
        <span>TARUNIKA</span>
        <span>GANESAN</span>
      </div>

      <div className="hero__stage">
        <div className="hero__copy">
          <TypingText />
        </div>

        <div className="hero__actions">
          <a className="btn btn--ghost" href="#projects">
            Explore My Work
          </a>
          <ResumeButton className="btn btn--solid">Download Resume</ResumeButton>
        </div>

        <div className="hero__portrait">
          <img
            src="/images/portrait.png"
            alt="Portrait of Tarunika Ganesan"
            width="1098"
            height="1433"
          />
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span>Scroll deep</span>
        <i />
      </a>
    </section>
  )
}
