import SkeletonBlock from './SkeletonBlock'
import ProcessCardsSkeleton from './ProcessCardsSkeleton'

function BusinessPitchPageSkeleton() {
  return (
    <section className="skeleton-pitch" aria-hidden="true">
      <div className="skeleton-pitch-hero">
        <div className="skeleton-pitch-copy">
          <SkeletonBlock className="skeleton-eyebrow" />
          <SkeletonBlock className="skeleton-pitch-title" />
          <SkeletonBlock className="skeleton-pitch-title is-short" />
          <div className="skeleton-copy-lines">
            <SkeletonBlock />
            <SkeletonBlock />
            <SkeletonBlock />
          </div>
          <SkeletonBlock className="skeleton-pill" />
        </div>
      </div>
      <ProcessCardsSkeleton />
    </section>
  )
}

export default BusinessPitchPageSkeleton
