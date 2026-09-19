import { useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { CONTACT_LINKS } from '../Constant/Constant'
import ProcessAnimation from './ProcessAnimation'
import ProcessCards from './ProcessCards'

const pitchTitleLines = ['Big ideas.', 'Clear', 'next steps.']
const scrambleCharacters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  symbols: '0123456789<>/?#$%&',
}
const titleCharacterCounts = pitchTitleLines.map((line) => line.replace(/\s/g, '').length)
const titleCharacterTotal = titleCharacterCounts.reduce((total, count) => total + count, 0)

type PitchTitleLineStyle = CSSProperties & {
  '--resolved-progress': string
}

function getScrambleCharacter(character: string) {
  const characterPool = /[A-Z]/.test(character)
    ? scrambleCharacters.uppercase
    : /[a-z]/.test(character)
      ? scrambleCharacters.lowercase
      : scrambleCharacters.symbols

  return characterPool[Math.floor(Math.random() * characterPool.length)]
}

function getScrambledTitle(resolvedCharacters: number) {
  let characterIndex = 0

  return pitchTitleLines.map((line) =>
    Array.from(line, (character) => {
      if (/\s/.test(character)) return character

      const renderedCharacter = characterIndex < resolvedCharacters ? character : getScrambleCharacter(character)
      characterIndex += 1
      return renderedCharacter
    }).join(''),
  )
}

const pitchSteps = [
  ['01', 'Discover', 'A focused conversation to understand your business, audience, and the opportunity.'],
  ['02', 'Define', 'A practical direction, scope, timeline, and success measures with no fuzzy edges.'],
  ['03', 'Create', 'Design and development move together through clear, reviewable milestones.'],
  ['04', 'Grow', 'We launch, learn, improve, and support the system as your business evolves.'],
] as const

type BusinessPitchPageProps = {
  embedded?: boolean
}

function BusinessPitchPage({ embedded = false }: BusinessPitchPageProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleIsInView = useInView(titleRef, { amount: 0.55 })
  const reduceMotion = useReducedMotion()
  const [titleFrame, setTitleFrame] = useState({
    lines: pitchTitleLines,
    resolvedCharacters: titleCharacterTotal,
    isScrambling: false,
  })
  const Root = embedded ? 'section' : 'main'

  useEffect(() => {
    if (!titleIsInView || reduceMotion) return

    const holdDuration = 140
    const animationDuration = 1800
    const frameInterval = 48
    let animationFrame = 0
    let startTime = 0
    let lastFrameTime = -frameInterval

    const animateTitle = (currentTime: number) => {
      if (!startTime) startTime = currentTime

      const elapsedTime = currentTime - startTime
      const revealProgress = Math.min(1, Math.max(0, (elapsedTime - holdDuration) / (animationDuration - holdDuration)))
      const resolvedCharacters = Math.floor(revealProgress * titleCharacterTotal)

      if (currentTime - lastFrameTime >= frameInterval || revealProgress === 1) {
        lastFrameTime = currentTime
        setTitleFrame({
          lines: revealProgress === 1 ? pitchTitleLines : getScrambledTitle(resolvedCharacters),
          resolvedCharacters: revealProgress === 1 ? titleCharacterTotal : resolvedCharacters,
          isScrambling: revealProgress < 1,
        })
      }

      if (revealProgress < 1) animationFrame = window.requestAnimationFrame(animateTitle)
    }

    animationFrame = window.requestAnimationFrame(animateTitle)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [reduceMotion, titleIsInView])

  return (
    <Root
      className={`info-page pitch-page ${embedded ? 'is-embedded' : ''}`}
      id={embedded ? 'pitch' : undefined}
      data-scroll-scene={embedded ? 'pitch' : undefined}
      data-scene-label={embedded ? 'Our process' : undefined}
    >
      <div className="pitch-hero-layout">
        <section className="pitch-hero">
          <p className="studio-label">How we work · 04 steps</p>
          <h1 ref={titleRef} aria-label={pitchTitleLines.join(' ')}>
            {titleFrame.lines.map((line, lineIndex) => {
              const charactersBeforeLine = titleCharacterCounts
                .slice(0, lineIndex)
                .reduce((total, count) => total + count, 0)
              const resolvedInLine = Math.min(
                titleCharacterCounts[lineIndex],
                Math.max(0, titleFrame.resolvedCharacters - charactersBeforeLine),
              )
              const resolvedProgress = (resolvedInLine / titleCharacterCounts[lineIndex]) * 100

              return (
                <span
                  className={`pitch-title-line ${titleFrame.isScrambling ? 'is-scrambling' : ''}`}
                  style={{ '--resolved-progress': `${resolvedProgress}%` } as PitchTitleLineStyle}
                  aria-hidden="true"
                  key={pitchTitleLines[lineIndex]}
                >
                  {line}
                </span>
              )
            })}
          </h1>
          <p>
            Pixel Avenue brings strategy, design, and technology into one practical process—so your next digital move
            feels exciting, not overwhelming.
          </p>
          <a className="studio-pill" href={CONTACT_LINKS.email}>
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </section>
        <ProcessAnimation />
      </div>

      <ProcessCards steps={pitchSteps} />

      <section className="pitch-note">
        <p>Small team energy.</p>
        <p>Senior-level thinking.</p>
        <p>Work that earns attention.</p>
      </section>
    </Root>
  )
}

export default BusinessPitchPage
