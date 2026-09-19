import SkeletonBlock from './SkeletonBlock'

function AboutPageSkeleton() {
  return (
    <section className="skeleton-about" aria-hidden="true">
      <div className="skeleton-about-timeline">
        <SkeletonBlock className="skeleton-about-label" />
        <span className="skeleton-about-wheel" />
      </div>
      <div className="skeleton-about-projects">
        {[0, 1].map((project) => (
          <article className="skeleton-project" key={project}>
            <SkeletonBlock className="skeleton-project-meta" />
            <SkeletonBlock className="skeleton-project-title" />
            <SkeletonBlock className="skeleton-project-title is-short" />
            <div className="skeleton-copy-lines">
              <SkeletonBlock />
              <SkeletonBlock />
              <SkeletonBlock />
            </div>
            <div className="skeleton-project-tags">
              <SkeletonBlock />
              <SkeletonBlock />
              <SkeletonBlock />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutPageSkeleton
