import SkeletonBlock from './SkeletonBlock'

function ProcessCardsSkeleton() {
  return (
    <div className="skeleton-process-cards" aria-hidden="true">
      {[0, 1, 2, 3].map((step) => (
        <article key={step}>
          <SkeletonBlock className="skeleton-step-number" />
          <SkeletonBlock className="skeleton-step-title" />
          <div className="skeleton-copy-lines">
            <SkeletonBlock />
            <SkeletonBlock />
            <SkeletonBlock />
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProcessCardsSkeleton
