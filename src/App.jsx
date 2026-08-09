import { useEffect, useState } from 'react'
import { getContent } from './content.js'
import TypeWriter from './components/TypeWriter.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { useReveal } from './hooks/useReveal.js'

function Nav({ content, lang, setLang }) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a
          className="nav-logo"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          g.
        </a>
        <div className="nav-links">
          <a href="#about">
            <span className="idx">01.</span>
            {content.nav.about}
          </a>
          <a href="#projects">
            <span className="idx">02.</span>
            {content.nav.projects}
          </a>
          <div className="nav-lang">
            {['en', 'de', 'el'].map((l) => (
              <button
                key={l}
                className={l === lang ? 'active' : ''}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero({ content, lang }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="hero-kicker">{content.hero.kicker}</p>
        <h1>
          {/* key restarts the typing animation on language switch */}
          <TypeWriter key={lang} text={content.hero.greeting} />
        </h1>
        <h2>{content.hero.tagline}</h2>
        <p>{content.hero.intro}</p>
        <a className="btn" href="#projects">
          {content.hero.cta}
        </a>
      </div>
    </section>
  )
}

function About({ content }) {
  const [ref, revealClass] = useReveal()
  return (
    <section id="about">
      <div className={`wrap about ${revealClass}`} ref={ref}>
        <div className="section-heading">
          <h2>
            <span className="num">01.</span>
            {content.about.heading}
          </h2>
        </div>
        {content.about.paragraphs.map((text) => (
          <p key={text.slice(0, 32)}>{text}</p>
        ))}
        <div className="skills">
          <h3>{content.about.skillsHeading}</h3>
          <dl>
            {content.about.skills.map((s) => (
              <div className="skills-row" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Projects({ content }) {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-heading">
          <h2>
            <span className="num">02.</span>
            {content.projectsHeading}
          </h2>
        </div>
        {content.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function Footer({ content }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="retro">{content.footer.line1}</p>
        <p>
          {content.footer.before}
          <a href={content.footer.courseUrl}>{content.footer.linkText}</a>
          {content.footer.after}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'en',
  )
  const content = getContent(lang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Nav content={content} lang={lang} setLang={setLang} />
      <main>
        <Hero content={content} lang={lang} />
        <About content={content} />
        <Projects content={content} />
      </main>
      <Footer content={content} />
    </>
  )
}
