import SkeletonBlock from './SkeletonBlock'

function NavbarSkeleton() {
  return (
    <header className="skeleton-navbar" aria-hidden="true">
      <SkeletonBlock className="skeleton-navbar-logo" />
      <div className="skeleton-navbar-links">
        <SkeletonBlock />
        <SkeletonBlock />
        <SkeletonBlock />
        <SkeletonBlock />
      </div>
    </header>
  )
}

export default NavbarSkeleton
