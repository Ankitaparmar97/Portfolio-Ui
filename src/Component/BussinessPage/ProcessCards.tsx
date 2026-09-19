import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { useRef, useState } from 'react'

type ProcessStep = readonly [number: string, title: string, description: string]

type ProcessCardProps = {
  index: number
  progress: MotionValue<number>
  reduceMotion: boolean | null
  step: ProcessStep
}

const stackOffsets = [-30, -10, 12, 32]
const stackRotations = [-5, 3.4, -2.2, 4.6]
const stackScales = [1, 0.975, 0.95, 0.925]

function ProcessCard({ index, progress, reduceMotion, step }: ProcessCardProps) {
  const [number, title, description] = step
  const expandedTop = `${12.5 + index * 25}%`
  const top = useTransform(progress, [0, 0.24, 0.78, 1], ['50%', '50%', expandedTop, expandedTop])
  const left = useTransform(progress, [0, 0.24, 0.78, 1], ['53%', '53%', '0%', '0%'])
  const width = useTransform(progress, [0, 0.24, 0.78, 1], ['47%', '47%', '100%', '100%'])
  const x = useTransform(progress, [0, 0.24, 0.78, 1], [stackOffsets[index], stackOffsets[index], 0, 0])
  const rotate = useTransform(
    progress,
    [0, 0.24, 0.78, 1],
    [stackRotations[index], stackRotations[index], 0, 0],
  )
  const scale = useTransform(
    progress,
    [0, 0.24, 0.78, 1],
    [stackScales[index], stackScales[index], 1, 1],
  )
  const detailOpacity = useTransform(progress, [0, 0.48, 0.76, 1], [0, 0, 1, 1])

  return (
    <motion.article
      className={`pitch-process-card pitch-process-card-${index + 1}`}
      style={reduceMotion ? { top: expandedTop } : { top, left, width, x, rotate, scale, zIndex: 4 - index }}
    >
      <div className="pitch-process-card-rail" aria-hidden="true">
        <span>Pixel Avenue</span><i>↗</i><span>Process {number}</span><i>↗</i><span>Pixel Avenue</span>
      </div>
      <div className="pitch-process-card-body">
        <span className="pitch-process-card-number">{number}</span>
        <h2>{title}</h2>
        <motion.p style={reduceMotion ? undefined : { opacity: detailOpacity }}>{description}</motion.p>
        <span className="pitch-process-card-arrow" aria-hidden="true">↗</span>
      </div>
    </motion.article>
  )
}

type ProcessCardsProps = {
  steps: readonly ProcessStep[]
}

function ProcessCards({ steps }: ProcessCardsProps) {
  const stageRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [showIntro, setShowIntro] = useState(true)
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setShowIntro(progress < 0.22)
  })

  return (
    <section ref={stageRef} className="pitch-process" id="process-cards" aria-label="Our process">
      <div className="pitch-process-sticky">
        <div className="pitch-process-heading" aria-hidden="true">
          <span>Our process</span>
          <span>Scroll to unfold ↓</span>
        </div>
        <p
          className={`pitch-process-intro ${reduceMotion || !showIntro ? 'is-hidden' : ''}`}
          aria-label="Make your next steps visible."
          aria-hidden={reduceMotion || !showIntro}
        >
          <span aria-hidden="true">Make</span>
          <span aria-hidden="true">your next</span>
          <span aria-hidden="true">steps visible.</span>
        </p>
        <div className="pitch-process-deck">
          {steps.map((step, index) => (
            <ProcessCard
              index={index}
              key={step[0]}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessCards
