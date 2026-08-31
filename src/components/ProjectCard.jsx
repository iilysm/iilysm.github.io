import Carousel from './Carousel.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, flip }) {
  const [ref, revealClass] = useReveal()

  return (
    <article
      ref={ref}
      id={project.id}
      className={`project ${flip ? 'flip' : ''} ${revealClass}`}
    >
      <div className="project-carousel">
        <Carousel images={project.images} label={project.title} />
      </div>

      <div className="project-body">
        <p className="project-meta">
          nr. {project.nr} · {project.year}
        </p>
        <h3>{project.title}</h3>

        {project.paragraphs.map((text) => (
          <p key={text.slice(0, 32)}>{text}</p>
        ))}

        {project.audio && (
          <div className="project-audio">
            <p>{project.audio.label}</p>
            <audio controls loop src={encodeURI(project.audio.src)}>
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <ul className="project-tech">
          {project.tech.map((t) => (
            <li key={t.label}>
              <strong>{t.label}:</strong> {t.value}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
