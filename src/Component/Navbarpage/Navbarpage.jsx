import { useState } from 'react'
import './Navbarpage.css'

const navItems = [
  { label: 'About', hasMenu: true },
  { label: 'Business', hasMenu: true },
  { label: 'Career' },
  { label: 'Business Pitch' },
  { label: 'Contact Us' },
]

function Navbarpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="airscream-page">
      <header className="airscream-header">
        <a className="airscream-logo" href="/" aria-label="Avenue Pixel home">
          Avenue Pixel
        </a>

        <button
          className="airscream-menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`airscream-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="airscream-nav-link" href={`#${item.label.toLowerCase().replaceAll(' ', '-')}`} key={item.label}>
              {item.label}
              {item.hasMenu && <span className="airscream-chevron" aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </header>

    </div>
  )
}

export default Navbarpage
