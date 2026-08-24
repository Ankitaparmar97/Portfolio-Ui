import { useTheme } from '@mui/material/styles'
import { useMemo, type CSSProperties } from 'react'

type TransitionRayStyle = CSSProperties & {
  '--angle': string
  '--color': string
  '--delay': string
  '--length': string
  '--start': string
}

export type ScrollTransitionState = {
  id: number
  label: string
  direction: 'up' | 'down'
}

function ScrollTransition({ transition }: { transition: ScrollTransitionState | null }) {
  const theme = useTheme()
  const transitionRays = useMemo(() => {
    const colors = [
      theme.palette.accent.blue,
      theme.palette.accent.lime,
      theme.palette.primary.main,
      theme.palette.accent.blue,
      theme.palette.accent.lime,
      theme.palette.primary.main,
    ]

    return Array.from({ length: 74 }, (_, index) => ({
      id: index,
      style: {
        '--angle': `${index * (360 / 74) + (((index * 17) % 19) - 9) * 0.28}deg`,
        '--color': colors[(index * 5) % colors.length],
        '--delay': `${((index * 11) % 13) * 0.014}s`,
        '--length': `${90 + ((index * 43) % 250)}px`,
        '--start': `${18 + ((index * 29) % 95)}px`,
      } as TransitionRayStyle,
    }))
  }, [theme])

  if (!transition) {
    return null
  }

  return (
    <div
      className={`scroll-transition is-${transition.direction}`}
      key={transition.id}
      aria-hidden="true"
    >
      <div className="scroll-transition-rays">
        {transitionRays.map((ray) => (
          <i className="scroll-transition-ray" style={ray.style} key={ray.id} />
        ))}
      </div>
      <p>
        <span>{transition.direction === 'down' ? 'Next' : 'Back to'}</span>
        {transition.label}
      </p>
    </div>
  )
}

export default ScrollTransition
