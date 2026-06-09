import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Agentation } from 'agentation'

import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import HowItWorks from './pages/HowItWorks/index.jsx'
import Faq from './pages/Faq/index.jsx'
import Partners from './pages/Partners/index.jsx'
import Contact from './pages/Contact/index.jsx'
import CourtLanding from './pages/CourtLanding/index.jsx'
import StateLanding from './pages/StateLanding/index.jsx'
import StateFaq from './pages/StateFaq/index.jsx'
import AltRegistration from './pages/AltRegistration/index.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/court-landing" element={<CourtLanding />} />
        <Route path="/state-landing" element={<StateLanding />} />
        <Route path="/state-faq" element={<StateFaq />} />
        <Route path="/alt-registration" element={<AltRegistration />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </>
  )
}
