import SkeletonBlock from './SkeletonBlock'

function BusinessServicesSkeleton() {
  return (
    <main className="skeleton-services" role="status" aria-label="Loading services">
      <div className="skeleton-services-intro" aria-hidden="true">
        <SkeletonBlock className="skeleton-eyebrow" />
        <div>
          <SkeletonBlock className="skeleton-services-title" />
          <SkeletonBlock className="skeleton-services-title is-short" />
          <div className="skeleton-copy-lines">
            <SkeletonBlock />
            <SkeletonBlock />
          </div>
        </div>
      </div>
      <section className="skeleton-services-deck" aria-hidden="true">
        <div className="skeleton-deck-heading">
          <SkeletonBlock />
          <SkeletonBlock />
        </div>
        <article className="skeleton-service-card">
          <SkeletonBlock className="skeleton-service-media" />
          <div className="skeleton-service-copy">
            <SkeletonBlock className="skeleton-service-meta" />
            <div>
              <SkeletonBlock className="skeleton-service-title" />
              <div className="skeleton-copy-lines">
                <SkeletonBlock />
                <SkeletonBlock />
                <SkeletonBlock />
              </div>
            </div>
            <SkeletonBlock className="skeleton-service-link" />
          </div>
        </article>
      </section>
      <span className="skeleton-screen-reader-text">Loading services…</span>
    </main>
  )
}

export default BusinessServicesSkeleton
