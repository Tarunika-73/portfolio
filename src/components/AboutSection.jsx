import FabricRevealSection from './FabricRevealSection.jsx'
import ExternalLinkIcon from './ExternalLinkIcon.jsx'

export default function AboutSection() {
  return (
    <FabricRevealSection
      id="about"
      className="about"
      texture="/images/about-fabric.png"
      revealRadius={210}
      faintOpacity={0.06}
      touchFaintOpacity={0.2}
    >
      <div className="about__layout">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2 className="about__title">Curiosity drives everything I build.</h2>

        <div className="about__grid">
          <div className="about__intro">
            {/* Opening statement before the main paragraph, using a clear typographic hierarchy */}
            <p className="about__lead-statement">
              I design intelligent digital experiences where AI, clean code, and purposeful design work together.
            </p>

            <p className="about__main-paragraph">
              I am Tarunika Ganesan, an engineering student passionate about building technology that feels useful, smart, and meaningful. My work focuses on full stack development, artificial intelligence, database-driven applications, and interactive user experiences. I enjoy turning ideas into polished digital solutions &mdash; from AI-powered systems to modern web applications that solve real problems.
            </p>

         

            {/* Four statistics moved slightly upward closer to content */}
            <div className="about__stats" aria-label="Key highlights">
              <div className="about__stat">
                <span className="about__stat-value">5+</span>
                <span className="about__stat-label">Projects</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true" />
              <div className="about__stat">
                <span className="about__stat-value">3+</span>
                <span className="about__stat-label">AI Models</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true" />
              <div className="about__stat">
                <span className="about__stat-value">3+</span>
                <span className="about__stat-label">Years of Coding</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true" />
              <div className="about__stat">
                <span className="about__stat-value">100%</span>
                <span className="about__stat-label">Passion &amp; Dedication</span>
              </div>
            </div>
          </div>

          <aside className="about__aside">
            <div className="about__block">
              <h3>Now studying</h3>
              <p>
                Integrated M.Tech, Computer Science and Engineering
                <br />
                Sri Krishna College of Engineering and Technology, Coimbatore
              </p>
            </div>
            <div className="about__block">
              <h3>Currently exploring</h3>
              <p>
                Java, Python, React, Spring Boot, REST APIs, SQL, and
                multi-cloud platforms &mdash; alongside data pipelines and machine
                learning for practical problems.
              </p>
            </div>
            <div className="about__block">
              <h3>Beyond the screen</h3>
              <p>
                Bharatanatyam dancer with a completed Arangetram, and a
                practice of sketching and digital art.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </FabricRevealSection>
  )
}
