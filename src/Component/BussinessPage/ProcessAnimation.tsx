import { useInView } from 'motion/react'
import { useRef, useState } from 'react'

function BrandMark() {
  return <span className="process-brand-mark" />
}

function ProcessAnimation() {
  const [playback, setPlayback] = useState(0)
  const animationRef = useRef<HTMLButtonElement>(null)
  const isInView = useInView(animationRef, { amount: 0.35, once: true })

  return (
    <button
      className={`process-animation ${isInView ? 'is-playing' : ''}`}
      key={playback}
      ref={animationRef}
      type="button"
      aria-label="Replay the Pixel Avenue process animation"
      onClick={() => setPlayback((currentPlayback) => currentPlayback + 1)}
    >
      <span className="process-animation-grid" aria-hidden="true" />

      <span className="process-animation-scene process-search-scene" aria-hidden="true">
        <svg className="process-chart" viewBox="0 0 520 330" role="presentation">
          <polyline points="24,280 92,212 132,252 190,174 225,220 270,146 310,192 362,86 400,232 438,168 470,206 502,128" />
        </svg>
        <span className="process-search-copy">
          <i />
          <i />
          <i />
        </span>
        <span className="process-search-orbit process-search-orbit-one" />
        <span className="process-search-orbit process-search-orbit-two" />
        <span className="process-search-orbit process-search-orbit-three" />
        <span className="process-search-glass" />
      </span>

      <span className="process-animation-scene process-phone-scene" aria-hidden="true">
        <span className="process-phone-blob" />
        <span className="process-toggle-card"><i /></span>
        <span className="process-phone">
          <i className="process-phone-camera" />
          <i className="process-phone-menu"><b /><b /><b /></i>
          <svg className="process-people-icon" viewBox="0 0 100 86" role="presentation">
            <circle cx="42" cy="28" r="18" />
            <circle cx="67" cy="31" r="15" />
            <path d="M13 79c2-24 16-36 30-36s29 12 30 36M58 50c15 0 27 10 28 29" />
          </svg>
          <i className="process-phone-line process-phone-line-one" />
          <i className="process-phone-line process-phone-line-two" />
          <i className="process-phone-line process-phone-line-three" />
          <i className="process-phone-cta" />
        </span>
        <span className="process-phone-dots"><i /><i /><i /></span>
      </span>

      <span className="process-animation-scene process-browser-scene" aria-hidden="true">
        <span className="process-browser-blob" />
        <span className="process-browser-window">
          <span className="process-browser-nav">
            <BrandMark />
            <i /><i /><i />
            <b /><em />
          </span>
          <span className="process-browser-copy"><i /><i /><i /><i /></span>
          <span className="process-browser-cta" />
          <span className="process-video-card"><i /></span>
        </span>
      </span>

      <span className="process-animation-scene process-brand-scene" aria-hidden="true">
        <span className="process-brand-circle" />
        <span className="process-brand-triangle" />
        <span className="process-brand-swatch process-brand-swatch-one"><BrandMark /></span>
        <span className="process-brand-swatch process-brand-swatch-two"><BrandMark /></span>
        <span className="process-brand-swatch process-brand-swatch-three"><BrandMark /></span>
        <span className="process-brand-swatch process-brand-swatch-four"><BrandMark /></span>
        <span className="process-type-card">Aa</span>
      </span>

      <span className="process-replay-label" aria-hidden="true">click to replay ↻</span>
    </button>
  )
}

export default ProcessAnimation
