import SkeletonBlock from './SkeletonBlock'

function ProcessAnimationSkeleton() {
  return (
    <div className="skeleton-process-animation" aria-hidden="true">
      <SkeletonBlock className="skeleton-process-orbit" />
      <SkeletonBlock className="skeleton-process-window" />
      <SkeletonBlock className="skeleton-process-card" />
    </div>
  )
}

export default ProcessAnimationSkeleton
