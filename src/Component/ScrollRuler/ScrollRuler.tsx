import { useEffect, useMemo, useState, type CSSProperties } from 'react'

type RulerStyle = CSSProperties & {
  '--scroll-progress': string
}

const DESKTOP_TRACK_OFFSET = 314
const MOBILE_TRACK_OFFSET = 104

function ScrollRuler() {
  const [progress, setProgress] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      frame = 0
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      )
      const nextProgress = scrollableHeight === 0
        ? 0
        : Math.min(1, Math.max(0, window.scrollY / scrollableHeight))

      setProgress(nextProgress)
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    const updateViewport = () => {
      setViewportWidth(window.innerWidth)
      requestUpdate()
    }

    const contentObserver = new ResizeObserver(requestUpdate)
    contentObserver.observe(document.documentElement)
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', updateViewport)
    updateProgress()

    return () => {
      contentObserver.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', updateViewport)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const rulerLabels = useMemo(() => {
    const offset = viewportWidth <= 820 ? MOBILE_TRACK_OFFSET : DESKTOP_TRACK_OFFSET
    const labelCount = Math.max(0, Math.floor((viewportWidth - offset) / 100))

    return Array.from({ length: labelCount }, (_, index) => (index + 1) * 100)
  }, [viewportWidth])

  const percentage = Math.round(progress * 100)
  const style = { '--scroll-progress': `${progress * 100}%` } as RulerStyle

  return (
    <aside
      className="scroll-ruler"
      style={style}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
    >
      <span className="scroll-ruler-brand" aria-hidden="true">
        <b>Pixel</b> Avenue
      </span>

      <div className="scroll-ruler-track" aria-hidden="true">
        <div className="scroll-ruler-labels">
          {rulerLabels.map((label) => (
            <span style={{ left: `${label}px` }} key={label}>{label}</span>
          ))}
        </div>
        <span className="scroll-ruler-progress">{percentage}%</span>
      </div>

      <span className="scroll-ruler-status" aria-hidden="true">
        <i /> Scroll
      </span>
    </aside>
  )
}

export default ScrollRuler
