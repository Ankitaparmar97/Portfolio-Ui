import SkeletonBlock from './SkeletonBlock'

function HomeHeroSkeleton() {
  return (
    <section className="skeleton-home-hero" aria-hidden="true">
      <SkeletonBlock className="skeleton-side-note skeleton-side-note-left" />
      <SkeletonBlock className="skeleton-side-note skeleton-side-note-right" />
      <div className="skeleton-hero-copy">
        <SkeletonBlock className="skeleton-hero-line skeleton-hero-line-one" />
        <SkeletonBlock className="skeleton-hero-line skeleton-hero-line-two" />
        <SkeletonBlock className="skeleton-hero-line skeleton-hero-line-three" />
        <div className="skeleton-copy-lines">
          <SkeletonBlock />
          <SkeletonBlock />
        </div>
      </div>
      <SkeletonBlock className="skeleton-hero-sticker skeleton-hero-sticker-one" />
      <SkeletonBlock className="skeleton-hero-sticker skeleton-hero-sticker-two" />
      <SkeletonBlock className="skeleton-scroll-cue" />
    </section>
  )
}

export default HomeHeroSkeleton
