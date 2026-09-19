import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AboutPage from '../AboutPage/AboutPage'
import BusinessPitchPage from '../BussinessPage/BussinessPage'
import ContactPage from '../ContactPage/ContactPage'

function HomePage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current

    if (!hero || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const moveDetails = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      hero.style.setProperty('--pointer-x', x.toFixed(3))
      hero.style.setProperty('--pointer-y', y.toFixed(3))
    }

    window.addEventListener('pointermove', moveDetails)
    return () => window.removeEventListener('pointermove', moveDetails)
  }, [])

  return (
    <main className="home-page">
      <section
        className="home-hero"
        id="home"
        ref={heroRef}
        aria-labelledby="home-title"
        data-scroll-scene="home"
        data-scene-label="Pixel Avenue"
      >
        <div className="home-clouds" aria-hidden="true" />
        <p className="home-side-note home-side-note-left">Creative studio<br />India · Worldwide</p>
        <p className="home-side-note home-side-note-right">Strategy · Design · Technology<br />Made with care</p>

        <div className="home-hero-copy">
          <h1 id="home-title">
            <span>We create</span>
            <span>digital work</span>
            <span>worth remembering</span>
          </h1>
          <p>
            Pixel Avenue is a portfolio-led creative studio designing websites, web applications, business systems,
            and brand experiences for businesses in India and worldwide.
          </p>
        </div>

        <div className="home-sticker home-sticker-code" aria-hidden="true">&lt;/&gt;</div>
        <div className="home-sticker home-sticker-star" aria-hidden="true">★</div>
        <div className="home-sticker home-sticker-smile" aria-hidden="true">ツ</div>
        <div className="home-sticker home-sticker-badge" aria-hidden="true">IDEAS<br />IN MOTION</div>

        <Link className="home-scroll-cue" to="/#about">
          View selected work <span aria-hidden="true">↓</span>
        </Link>
      </section>

      <AboutPage embedded />
      <BusinessPitchPage embedded />
      <ContactPage embedded />
    </main>
  )
}

export default HomePage
