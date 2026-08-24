import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, type PanInfo } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { businessServices, getServiceCardId } from './businessServicesData'

type BusinessServicesProps = {
  selectedTitle?: string
  embedded?: boolean
}

const serviceIndexes = businessServices.map((_, index) => index)

function getOrderWithServiceFirst(title?: string) {
  const requestedIndex = businessServices.findIndex((service) => service.title === title)

  if (requestedIndex < 0) {
    return serviceIndexes
  }

  return serviceIndexes.slice(0, requestedIndex + 1).reverse()
}

function BusinessServices({ selectedTitle, embedded = false }: BusinessServicesProps) {
  const location = useLocation()
  const deckRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ['start start', 'end end'],
  })

  const hashTitle = useMemo(() => {
    const hash = decodeURIComponent(location.hash.slice(1))

    return businessServices.find((service) => getServiceCardId(service.title) === hash)?.title
  }, [location.hash])

  const requestedTitle = selectedTitle ?? hashTitle
  const [deckState, setDeckState] = useState(() => ({
    requestedTitle,
    order: getOrderWithServiceFirst(requestedTitle),
  }))

  if (deckState.requestedTitle !== requestedTitle) {
    setDeckState({
      requestedTitle,
      order: getOrderWithServiceFirst(requestedTitle),
    })
  }

  const cardOrder = deckState.order

  const scrollToService = (serviceIndex: number, behavior: ScrollBehavior = 'smooth') => {
    const deck = deckRef.current

    if (!deck) {
      return
    }

    const boundedIndex = Math.min(Math.max(serviceIndex, 0), businessServices.length - 1)
    const deckTop = window.scrollY + deck.getBoundingClientRect().top
    const scrollDistance = Math.max(deck.offsetHeight - window.innerHeight, 0)
    const progress = boundedIndex / (businessServices.length - 1)

    window.scrollTo({ top: deckTop + scrollDistance * progress, behavior })
  }

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextIndex = Math.min(
      Math.round(progress * (businessServices.length - 1)),
      businessServices.length - 1,
    )

    setDeckState((currentState) => {
      if (currentState.order[0] === nextIndex) {
        return currentState
      }

      return {
        ...currentState,
        order: serviceIndexes.slice(0, nextIndex + 1).reverse(),
      }
    })
  })

  useEffect(() => {
    if (!requestedTitle) {
      return
    }

    const requestedIndex = businessServices.findIndex((service) => service.title === requestedTitle)
    const animationFrame = window.requestAnimationFrame(() => {
      scrollToService(requestedIndex, prefersReducedMotion ? 'auto' : 'smooth')
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [prefersReducedMotion, requestedTitle])

  const cycleCards = (direction: 1 | -1) => {
    scrollToService(cardOrder[0] + direction, prefersReducedMotion ? 'auto' : 'smooth')
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const travelled = Math.hypot(info.offset.x, info.offset.y)
    const speed = Math.hypot(info.velocity.x, info.velocity.y)

    if (travelled > 90 || speed > 650) {
      cycleCards(1)
    }
  }

  const visibleCards = cardOrder
  const activeServiceIndex = cardOrder[0]

  const Root = embedded ? 'section' : 'main'

  return (
    <Root
      className={`services-page ${embedded ? 'is-embedded' : ''}`}
      id={embedded ? 'work' : undefined}
      data-scroll-scene={embedded ? 'work' : undefined}
      data-scene-label={embedded ? 'Selected work' : undefined}
    >
      <div className="services-intro">
        <span>Capabilities · 15 ways we can help</span>
        <h1>
          Ideas made
          <em> useful.</em>
        </h1>
        <p>
          From first sketch to launch day and beyond, we bring the right mix of creative thinking and technical craft.
        </p>
      </div>

      <section className="services-deck-section" ref={deckRef} aria-label="Business services card deck">
        <div className="services-deck-sticky">
          <div className="services-deck-heading">
            <p>
              Scroll to explore
              <span>one service at a time</span>
            </p>
            <span aria-live="polite">
              {String(activeServiceIndex + 1).padStart(2, '0')} / {businessServices.length}
            </span>
          </div>

          <div className="services-card-stack" aria-roledescription="carousel">
            <AnimatePresence initial={false}>
              {visibleCards.map((serviceIndex, depth) => {
                const service = businessServices[serviceIndex]
                const isActive = depth === 0
                const stackDepth = Math.min(depth, 5)

                return (
                  <motion.article
                    initial={prefersReducedMotion ? false : { y: '115%', rotate: 7, opacity: 0 }}
                    animate={{
                      x: isActive ? 0 : [0, -22, 24, -34, 30, -12][stackDepth],
                      y: isActive ? 0 : [0, 16, 25, 31, 38, 44][stackDepth],
                      rotate: isActive ? 0 : [0, -3.2, 3.8, -5.4, 5.8, -1.8][stackDepth],
                      scale: 1 - stackDepth * 0.018,
                      opacity: depth > 5 ? 0 : stackDepth === 5 ? 0.72 : 1,
                    }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { y: '115%', rotate: 7, opacity: 0 }}
                    aria-hidden={!isActive}
                    className={`service-card ${isActive ? 'is-active' : ''}`}
                    data-tone={serviceIndex % 4}
                    drag={isActive && !prefersReducedMotion}
                    dragConstraints={{ left: -260, right: 260, top: -150, bottom: 150 }}
                    dragElastic={0.16}
                    id={getServiceCardId(service.title)}
                    key={service.title}
                    onDragEnd={handleDragEnd}
                    style={{ zIndex: visibleCards.length - depth }}
                    transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 29 }}
                    whileDrag={{ cursor: 'grabbing', scale: 1.025, zIndex: visibleCards.length + 1 }}
                  >
                    <div className="service-card-media">
                      <img src={service.imageUrl} alt="" loading={isActive ? 'eager' : 'lazy'} draggable="false" />
                      <span>{serviceIndex < 2 ? 'Web craft' : serviceIndex < 8 ? 'Digital systems' : 'Brand experience'}</span>
                    </div>
                    <div className="service-card-copy">
                      <div className="service-card-meta">
                        <span>Service — {String(serviceIndex + 1).padStart(2, '0')}</span>
                        <span aria-hidden="true">✦ ✦ ✦</span>
                      </div>
                      <div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                      </div>
                      <Link
                        className="service-card-link"
                        to={service.path}
                        aria-label={`View ${service.title}`}
                        tabIndex={isActive ? 0 : -1}
                      >
                        View service <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </div>

          <div className="services-deck-controls">
            <button
              type="button"
              onClick={() => cycleCards(-1)}
              aria-label="Show previous service"
              disabled={activeServiceIndex === 0}
            >
              ←
            </button>
            <p>{businessServices[activeServiceIndex].title}</p>
            <button
              type="button"
              onClick={() => cycleCards(1)}
              aria-label="Show next service"
              disabled={activeServiceIndex === businessServices.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </Root>
  )
}

export default BusinessServices
