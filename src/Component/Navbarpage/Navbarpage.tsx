import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useBranding } from '../../branding'
import { businessServices, getServiceCardId } from '../BusinessServices/businessServicesData'
import { CONTACT_EMAIL, CONTACT_LINKS } from '../Constant/Constant'
import GmailIcon from '../Icons/GmailIcon'
import WhatsappIcon from '../Icons/WhatsappIcon'
import type { AnimatedIconHandle } from '../Icons/types'
import { navItems } from './navbarData'

function Navbarpage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { mode, toggleMode } = useBranding()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [time, setTime] = useState(() => new Date())
  const whatsappIconRef = useRef<AnimatedIconHandle>(null)
  const gmailIconRef = useRef<AnimatedIconHandle>(null)

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      const sectionId = decodeURIComponent(location.hash.slice(1))
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior, block: 'start' })
        return
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [location.hash, location.pathname])

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  const displayTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(time)

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    to: string,
    sectionId?: string,
  ) => {
    setIsMenuOpen(false)

    const targetPath = to.split('#')[0]

    if (location.pathname !== targetPath) {
      return
    }

    event.preventDefault()

    if (`${location.pathname}${location.hash}` !== to) {
      navigate(to)
    }

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior, block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior })
    }
  }

  return (
    <>
      <header className="studio-header">
        <Link
          className="studio-logo"
          to="/"
          aria-label="Pixel Avenue home"
          onClick={(event) => handleNavigation(event, '/')}
        >
          <span>Pixel</span> Avenue
        </Link>

        <button
          className={`studio-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`studio-nav ${isMenuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
          onClickCapture={(event) => {
            if ((event.target as HTMLElement).closest('a')) {
              setIsMenuOpen(false)
            }
          }}
        >
          <Link
            className={location.pathname === '/' && !location.hash ? 'active' : undefined}
            to="/"
            aria-current={location.pathname === '/' && !location.hash ? 'page' : undefined}
            onClick={(event) => handleNavigation(event, '/')}
          >
            Home
          </Link>

          {navItems.map((item) => {
            const isActive = item.sectionId
              ? location.pathname === '/' && location.hash === `#${item.sectionId}`
              : location.pathname === item.to

            return (
              <div className="studio-nav-item" key={item.label}>
                <Link
                  className={isActive ? 'active' : undefined}
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => handleNavigation(event, item.to, item.sectionId)}
                >
                  {item.label}
                </Link>
                {item.hasMenu && (
                  <div className="studio-dropdown" aria-label="Business services">
                    <span>Selected capabilities</span>
                    {businessServices.slice(0, 7).map((service, index) => (
                      <Link
                        to={service.path}
                        key={service.title}
                        onClick={(event) => handleNavigation(event, service.path, getServiceCardId(service.title))}
                      >
                        <b>{String(index + 1).padStart(2, '0')}</b>
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      className="studio-dropdown-all"
                      to="/work"
                      onClick={(event) => handleNavigation(event, '/work')}
                    >
                      View all services <i aria-hidden="true">↗</i>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}

          <button className="studio-theme" type="button" onClick={toggleMode}>
            Theme [{mode === 'light' ? 'A' : 'B'}]
          </button>
        </nav>
      </header>

      <footer className="studio-chrome" aria-label="Studio information and social links">
        <div className="studio-chrome-left">
          <a href={CONTACT_LINKS.email}>{CONTACT_EMAIL}</a>
          <span>Pixel Avenue © 2026</span>
        </div>
        <span className="studio-clock">GMT+5:30 · {displayTime}</span>
        <div className="studio-chrome-right">
          <a
            className="studio-contact-link"
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Pixel Avenue on WhatsApp"
            onMouseEnter={() => whatsappIconRef.current?.startAnimation()}
            onMouseLeave={() => whatsappIconRef.current?.stopAnimation()}
            onFocus={() => whatsappIconRef.current?.startAnimation()}
            onBlur={() => whatsappIconRef.current?.stopAnimation()}
          >
            <WhatsappIcon ref={whatsappIconRef} size={48} aria-hidden="true" />
          </a>
          <a
            className="studio-contact-link"
            href={CONTACT_LINKS.email}
            aria-label={`Email ${CONTACT_EMAIL}`}
            onMouseEnter={() => gmailIconRef.current?.startAnimation()}
            onMouseLeave={() => gmailIconRef.current?.stopAnimation()}
            onFocus={() => gmailIconRef.current?.startAnimation()}
            onBlur={() => gmailIconRef.current?.stopAnimation()}
          >
            <GmailIcon ref={gmailIconRef} size={48} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Navbarpage
