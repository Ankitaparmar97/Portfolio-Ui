import type { CSSProperties } from 'react'

type SkeletonBlockProps = {
  className?: string
  height?: CSSProperties['height']
  width?: CSSProperties['width']
}

function SkeletonBlock({ className = '', height, width }: SkeletonBlockProps) {
  return (
    <span
      className={`skeleton-block ${className}`.trim()}
      style={{ height, width }}
      aria-hidden="true"
    />
  )
}

export default SkeletonBlock
