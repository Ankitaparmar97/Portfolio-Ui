import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, CONTACT_LINKS } from '../Constant/Constant'
import WhatsappIcon from '../Icons/WhatsappIcon'

type ContactPageProps = {
  embedded?: boolean
}

function ContactPage({ embedded = false }: ContactPageProps) {
  const Root = embedded ? 'section' : 'main'
  const contactRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'start start'],
  })
  const leftTitleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0vw', '0vw'] : ['-46vw', '0vw'],
  )
  const rightTitleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0vw', '0vw'] : ['46vw', '0vw'],
  )

  return (
    <Root
      className={`info-page contact-page ${embedded ? 'is-embedded' : ''}`}
      id={embedded ? 'contact' : undefined}
      ref={contactRef}
      data-scroll-scene={embedded ? 'contact' : undefined}
      data-scene-label={embedded ? 'Start a project' : undefined}
    >
      <section className="contact-hero">
        <p className="studio-label">Have a project in mind?</p>
        <h1>
          <motion.span className="contact-title-line-left" style={{ x: leftTitleX }}>
            Let’s make
          </motion.span>
          <motion.span className="contact-title-line-right" style={{ x: rightTitleX }}>
            something brilliant.
          </motion.span>
        </h1>
        <a className="contact-email" href={CONTACT_LINKS.email}>
          {CONTACT_EMAIL}
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact-options" aria-label="Contact options">
        <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer">
          <span>01</span>
          <span className="contact-option-label">
            <WhatsappIcon size={22} aria-hidden="true" />
            WhatsApp
          </span>
          <b aria-hidden="true">↗</b>
        </a>
        <a href={CONTACT_LINKS.phone}>
          <span>02</span>
          Call us
          <b aria-hidden="true">↗</b>
        </a>
        <Link to="/work">
          <span>03</span>
          Explore services
          <b aria-hidden="true">↗</b>
        </Link>
      </section>

      <div className="contact-orbit" aria-hidden="true">
        <span>PIXEL AVENUE · IDEAS INTO IMPACT · </span>
        <i>✦</i>
      </div>
    </Root>
  )
}

export default ContactPage
