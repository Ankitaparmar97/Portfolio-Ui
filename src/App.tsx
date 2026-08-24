import { Navigate, Route, Routes } from 'react-router-dom'
import BusinessServices from './Component/BusinessServices/BusinessServices'
import HomePage from './Component/HomePage/HomePage'
import Navbarpage from './Component/Navbarpage/Navbarpage'
import ScrollRuler from './Component/ScrollRuler/ScrollRuler'
import StudioCursor from './Component/StudioCursor/StudioCursor'
import SeoHead from './seo/SeoHead'

function App() {
  return (
    <>
      <SeoHead />
      <StudioCursor />
      <ScrollRuler />
      <Navbarpage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<BusinessServices />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
