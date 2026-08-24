import type { CSSProperties } from 'react'

export type PixelBlastProps = {
  variant?: 'square' | 'circle' | 'triangle' | 'diamond'
  pixelSize?: number
  color?: string
  className?: string
  style?: CSSProperties
  antialias?: boolean
  patternScale?: number
  patternDensity?: number
  minimumPatternDensity?: number
  scrollDensity?: boolean
  pixelSizeJitter?: number
  enableRipples?: boolean
  rippleSpeed?: number
  rippleThickness?: number
  rippleIntensityScale?: number
  liquid?: boolean
  liquidStrength?: number
  liquidRadius?: number
  liquidWobbleSpeed?: number
  autoPauseOffscreen?: boolean
  speed?: number
  edgeFade?: number
  cursorRadius?: number
  noiseAmount?: number
  transparent?: boolean
}

declare const PixelBlast: (props: PixelBlastProps) => JSX.Element

export default PixelBlast
