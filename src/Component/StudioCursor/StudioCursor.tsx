import { alpha as muiAlpha, useTheme } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

type TrailPoint = {
  x: number
  y: number
}

const TRAIL_SEGMENTS = 19
const PIXEL_SIZE = 11

function StudioCursor() {
  const theme = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailColor = theme.palette.accent.lime

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    let frame = 0
    let isVisible = false
    let isPressed = false
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    const points: TrailPoint[] = Array.from({ length: TRAIL_SEGMENTS }, () => ({
      x: targetX,
      y: targetY,
    }))

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(window.innerWidth * pixelRatio)
      canvas.height = Math.round(window.innerHeight * pixelRatio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      context.imageSmoothingEnabled = false
    }

    const draw = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      points[0].x += (targetX - points[0].x) * (isPressed ? 0.55 : 0.38)
      points[0].y += (targetY - points[0].y) * (isPressed ? 0.55 : 0.38)

      for (let index = 1; index < points.length; index += 1) {
        points[index].x += (points[index - 1].x - points[index].x) * 0.34
        points[index].y += (points[index - 1].y - points[index].y) * 0.34
      }

      if (isVisible) {
        for (let index = points.length - 1; index >= 0; index -= 1) {
          const progress = 1 - index / points.length
          const size = index === 0 && isPressed ? PIXEL_SIZE + 3 : PIXEL_SIZE
          const x = Math.round(points[index].x / PIXEL_SIZE) * PIXEL_SIZE
          const y = Math.round(points[index].y / PIXEL_SIZE) * PIXEL_SIZE
          const opacity = 0.06 + progress * 0.88

          context.fillStyle = muiAlpha(trailColor, opacity)
          context.fillRect(x - size / 2, y - size / 2, size, size)
        }
      }

      frame = window.requestAnimationFrame(draw)
    }

    const moveCursor = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY

      if (!isVisible) {
        points.forEach((point) => {
          point.x = targetX
          point.y = targetY
        })
        isVisible = true
        canvas.classList.add('is-visible')
      }
    }

    const pressCursor = () => {
      isPressed = true
      canvas.classList.add('is-pressed')
    }
    const releaseCursor = () => {
      isPressed = false
      canvas.classList.remove('is-pressed')
    }
    const hideCursor = () => {
      isVisible = false
      canvas.classList.remove('is-visible')
    }

    resizeCanvas()
    frame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('pointerdown', pressCursor)
    window.addEventListener('pointerup', releaseCursor)
    document.documentElement.addEventListener('mouseleave', hideCursor)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerdown', pressCursor)
      window.removeEventListener('pointerup', releaseCursor)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
    }
  }, [trailColor])

  return <canvas className="studio-cursor-trail" ref={canvasRef} aria-hidden="true" />
}

export default StudioCursor
