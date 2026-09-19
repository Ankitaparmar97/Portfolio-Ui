import AboutPageSkeleton from './AboutPageSkeleton'
import BusinessPitchPageSkeleton from './BusinessPitchPageSkeleton'
import ContactPageSkeleton from './ContactPageSkeleton'
import HomeHeroSkeleton from './HomeHeroSkeleton'

function HomePageSkeleton() {
  return (
    <main className="skeleton-home" role="status" aria-label="Loading Pixel Avenue">
      <HomeHeroSkeleton />
      <AboutPageSkeleton />
      <BusinessPitchPageSkeleton />
      <ContactPageSkeleton />
      <span className="skeleton-screen-reader-text">Loading Pixel Avenue…</span>
    </main>
  )
}

export default HomePageSkeleton
