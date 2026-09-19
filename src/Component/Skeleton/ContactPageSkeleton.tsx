import SkeletonBlock from './SkeletonBlock'

function ContactPageSkeleton() {
  return (
    <section className="skeleton-contact" aria-hidden="true">
      <div className="skeleton-contact-intro">
        <SkeletonBlock className="skeleton-eyebrow" />
        <SkeletonBlock className="skeleton-contact-title" />
        <SkeletonBlock className="skeleton-contact-title is-short" />
        <SkeletonBlock className="skeleton-contact-email" />
      </div>
      <aside className="skeleton-switchboard">
        <div className="skeleton-switchboard-header">
          <SkeletonBlock />
          <SkeletonBlock />
        </div>
        {[0, 1, 2].map((channel) => (
          <div className="skeleton-contact-channel" key={channel}>
            <SkeletonBlock className="skeleton-channel-number" />
            <SkeletonBlock className="skeleton-channel-name" />
            <SkeletonBlock className="skeleton-channel-arrow" />
          </div>
        ))}
      </aside>
    </section>
  )
}

export default ContactPageSkeleton
