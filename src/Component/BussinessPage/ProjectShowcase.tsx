import useMediaQuery from '@mui/material/useMediaQuery'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const projects = [
  {
    title: 'Bhavnagar Dental Clinic',
    image: '/projects/Bhavnagar-Dental-UI.png',
    description: 'Bhavnagar Dental Clinic website homepage',
  },
  {
    title: 'Darshan Enterprises',
    image: '/projects/Darshan-UI.png',
    description: 'Darshan Enterprises website homepage',
  },
  {
    title: 'Darshan Business Workspace',
    image: '/projects/Darshan-Business-UI.jpg',
    description: 'Darshan Enterprises business overview dashboard',
  },
] as const

function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 820px)')
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const sideStartX = isMobile ? 72 : 88
  const leftX = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [`-${sideStartX}%`, `-${sideStartX}%`, '-165%', '-165%'])
  const rightX = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [`${sideStartX}%`, `${sideStartX}%`, '165%', '165%'])
  const leftRotate = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [-8, -8, -16, -16])
  const rightRotate = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [8, 8, 16, 16])
  const sideScale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.94, 0.94, 0.72, 0.72])
  const sideOpacity = useTransform(scrollYProgress, [0, 0.22, 0.72, 1], [1, 1, 0, 0])
  const centerScale = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [1, 1, isMobile ? 1.18 : 2, isMobile ? 1.18 : 2])
  const centerY = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [0, 0, isMobile ? 0 : -12, isMobile ? 0 : -12])

  return (
    <section
      ref={sectionRef}
      className={`project-showcase${reduceMotion ? ' is-reduced-motion' : ''}`}
      aria-label="Featured project previews"
    >
      <div className="project-showcase-sticky">
        <div className="project-showcase-heading" aria-hidden="true">
          <span>Selected digital work</span>
          <span>Scroll to explore ↓</span>
        </div>
        <div className="project-showcase-deck">
          {projects.map((project, index) => (
            <motion.figure
              className={`project-showcase-card project-showcase-card-${index + 1}`}
              key={project.title}
              style={reduceMotion ? undefined : index === 1
                ? { scale: centerScale, y: centerY }
                : {
                    x: index === 0 ? leftX : rightX,
                    rotate: index === 0 ? leftRotate : rightRotate,
                    scale: sideScale,
                    opacity: sideOpacity,
                  }}
            >
              <div className="project-showcase-image">
                <span aria-hidden="true">{project.title}</span>
                <img
                  src={project.image}
                  alt={project.description}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => { event.currentTarget.style.display = 'none' }}
                />
              </div>
              <figcaption>
                <span>0{index + 1} / 03</span>
                <strong>{project.title}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
