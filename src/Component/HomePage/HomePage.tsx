import { Link } from 'react-router-dom'
import AboutPage from '../AboutPage/AboutPage'
import BusinessPitchPage from '../BussinessPage/BussinessPage'
import ContactPage from '../ContactPage/ContactPage'

function HomePage() {
  return (
    <main className="home-page">
      <section
        className="home-hero"
        id="home"
        aria-labelledby="home-title"
        data-scroll-scene="home"
        data-scene-label="Pixel Avenue"
      >
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
          View featured project <span aria-hidden="true">↓</span>
        </Link>
      </section>

      <AboutPage embedded />
      <BusinessPitchPage embedded />
      <ContactPage embedded />
    </main>
  )
}

export default HomePage
