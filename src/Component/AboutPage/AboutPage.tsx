import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getServiceCardId } from '../BusinessServices/businessServicesData'
import { getProjectId, PROJECTS } from './projectsData'

type AboutPageProps = {
  embedded?: boolean
}

type MarkerStyle = CSSProperties & {
  '--marker-angle': string
}

function AboutPage({ embedded = false }: AboutPageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [timelinePosition, setTimelinePosition] = useState(0)
  const activeProject = Math.round(timelinePosition)
  const Root = embedded ? 'section' : 'main'

  useEffect(() => {
    let frame = 0

    const updateActiveProject = () => {
      frame = 0
      const section = sectionRef.current

      if (!section) return

      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const scrolledInsideSection = -section.getBoundingClientRect().top
      const progress = Math.min(1, Math.max(0, scrolledInsideSection / scrollDistance))

      setTimelinePosition(progress * (PROJECTS.length - 1))
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveProject)
    }

    updateActiveProject()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToProject = useCallback((index: number) => {
    const section = sectionRef.current

    if (!section) return

    const sectionTop = window.scrollY + section.getBoundingClientRect().top
    const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 0)
    const destination = sectionTop + (scrollDistance * index) / (PROJECTS.length - 1)

    window.scrollTo({ top: destination, behavior: 'smooth' })
  }, [])

  return (
    <Root
      className={`about-page ${embedded ? 'is-embedded' : ''}`}
      id={embedded ? 'about' : undefined}
      ref={sectionRef}
      data-scroll-scene={embedded ? 'about' : undefined}
      data-scene-label={embedded ? 'Our project journey' : undefined}
      aria-labelledby="selected-work-title"
    >
      <div className="about-timeline-sticky">
        <div className="about-timeline-glow" aria-hidden="true" />

        <div
          className="about-timeline-wheel"
          style={{ transform: `translateY(-50%) rotate(${timelinePosition * -42}deg)` }}
          aria-label="Project timeline"
        >
          {PROJECTS.map((project, index) => (
            <div
              className={`about-timeline-marker ${activeProject === index ? 'is-active' : ''}`}
              style={{ '--marker-angle': `${index * 42}deg` } as MarkerStyle}
              key={project.date}
            >
              <button
                type="button"
                onClick={() => scrollToProject(index)}
                aria-current={activeProject === index ? 'step' : undefined}
                aria-label={`Show ${project.date}: ${project.title}`}
              >
                <span aria-hidden="true" />
                {project.shortDate}
              </button>
            </div>
          ))}
        </div>
        <span className="about-timeline-pointer" aria-hidden="true" />

        <div className="about-timeline-status">
          <h2 id="selected-work-title">Selected work</h2>
          <span aria-live="polite">
            {String(activeProject + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>

        <p className="about-scroll-note" aria-hidden="true">
          Scroll through our journey <span>↓</span>
        </p>
      </div>

      <section className="about-project-list" aria-label="Our project journey">
        {PROJECTS.map((project, index) => (
          <article
            className={`about-project ${activeProject === index ? 'is-active' : ''}`}
            id={getProjectId(project.title)}
            key={project.title}
          >
            <div>
              <p className="about-project-date">{project.date} · {project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="about-project-description">{project.description}</p>
              <ul className="about-project-services" aria-label={`Services used for ${project.title}`}>
                {project.services.map((service) => (
                  <li key={service}>
                    <Link to={`/work#${getServiceCardId(service)}`}>{service}</Link>
                  </li>
                ))}
              </ul>
              {project.href && (
                <a className="about-project-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </Root>
  )
}

export default AboutPage
