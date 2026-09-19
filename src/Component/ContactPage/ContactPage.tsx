import { useEffect, useRef, useState } from 'react'
import { CONTACT_EMAIL, CONTACT_LINKS } from '../Constant/Constant'
import WhatsappIcon from '../Icons/WhatsappIcon'

type ContactPageProps = {
  embedded?: boolean
}

function ContactPage({ embedded = false }: ContactPageProps) {
  const Root = embedded ? 'section' : 'main'
  const contactRef = useRef<HTMLElement>(null)
  const switchboardStageRef = useRef<HTMLElement>(null)
  const [isSwitchboardVisible, setIsSwitchboardVisible] = useState(false)

  useEffect(() => {
    const switchboardStage = switchboardStageRef.current

    if (!switchboardStage || !('IntersectionObserver' in window)) {
      setIsSwitchboardVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsSwitchboardVisible(entry.isIntersecting),
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.08,
      },
    )

    observer.observe(switchboardStage)
    return () => observer.disconnect()
  }, [])

  return (
    <Root
      className={`info-page contact-page ${embedded ? 'is-embedded' : ''} ${isSwitchboardVisible ? 'is-switchboard-visible' : ''}`}
      id={embedded ? 'contact' : undefined}
      ref={contactRef}
      data-scroll-scene={embedded ? 'contact' : undefined}
      data-scene-label={embedded ? 'Make the first move' : undefined}
      aria-labelledby="contact-title"
    >
      <section ref={switchboardStageRef} className="contact-switchboard-stage">
        <div className="contact-switchboard-intro">
          <p className="studio-label">Ideas into impact</p>
          <h1 id="contact-title">
            <span>Make the</span>
            <span>first <em>move.</em></span>
          </h1>
          <a className="contact-switchboard-email" href={CONTACT_LINKS.email}>
            {CONTACT_EMAIL}<span aria-hidden="true">↗</span>
          </a>
          <div className="contact-switchboard-meta">
            <span>Write to us directly</span>
            <span>India / Worldwide</span>
          </div>
        </div>

        <aside className="contact-switchboard-panel" aria-label="Contact switchboard">
          <header>
            <span>Contact switchboard</span>
            <span>Reach us your way</span>
          </header>
          <nav aria-label="Contact channels">
            <a className="is-primary" href={CONTACT_LINKS.whatsapp} target="_blank" rel="noreferrer">
              <span>01 ──</span>
              <span className="contact-switchboard-route">
                <WhatsappIcon size={30} aria-hidden="true" />
                <strong>WhatsApp</strong>
                <small>Fastest reply</small>
              </span>
              <b aria-hidden="true">→</b>
            </a>
            <a href={CONTACT_LINKS.phone}>
              <span>02 ──</span>
              <span className="contact-switchboard-route">
                <strong>Call</strong>
                <small>Let’s talk it through</small>
              </span>
              <b aria-hidden="true">→</b>
            </a>
            <a href={CONTACT_LINKS.email}>
              <span>03 ──</span>
              <span className="contact-switchboard-route">
                <strong>Email</strong>
                <small>Send a proper brief</small>
              </span>
              <b aria-hidden="true">→</b>
            </a>
          </nav>
          <div className="contact-switchboard-status">
            <span>Studio status <i aria-hidden="true" /></span>
            <strong>Open for new projects</strong>
            <small>Reply within 1–2 business days</small>
          </div>
        </aside>
      </section>

      <section className="contact-brief-guide" aria-labelledby="contact-guide-title">
        <header>
          <span aria-hidden="true">—</span>
          <h2 id="contact-guide-title">What to include</h2>
        </header>
        <div className="contact-brief-items">
          <article><span>01 ──</span><strong>Goal</strong><p>What are you trying to achieve?</p></article>
          <article><span>02 ──</span><strong>Scope</strong><p>What kind of work do you need?</p></article>
          <article><span>03 ──</span><strong>Timeline</strong><p>When do you want to get started?</p></article>
          <article><span>04 ──</span><strong>Budget</strong><p>What’s the rough budget range?</p></article>
          <a href={CONTACT_LINKS.email}>
            <small>Not sure yet?</small>
            <strong>That’s fine —<br />say hello ↗</strong>
          </a>
        </div>
      </section>
    </Root>
  )
}

export default ContactPage
