import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollRuler from './Component/ScrollRuler/ScrollRuler'
import BusinessServicesSkeleton from './Component/Skeleton/BusinessServicesSkeleton'
import HomePageSkeleton from './Component/Skeleton/HomePageSkeleton'
import NavbarSkeleton from './Component/Skeleton/NavbarSkeleton'
import StudioCursor from './Component/StudioCursor/StudioCursor'
import SeoHead from './seo/SeoHead'

const BusinessServices = lazy(() => import('./Component/BusinessServices/BusinessServices'))
const HomePage = lazy(() => import('./Component/HomePage/HomePage'))
const Navbarpage = lazy(() => import('./Component/Navbarpage/Navbarpage'))

function App() {
  return (
    <>
      <SeoHead />
      <StudioCursor />
      <ScrollRuler />
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbarpage />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={(
            <Suspense fallback={<HomePageSkeleton />}>
              <HomePage />
            </Suspense>
          )}
        />
        <Route
          path="/work"
          element={(
            <Suspense fallback={<BusinessServicesSkeleton />}>
              <BusinessServices />
            </Suspense>
          )}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
