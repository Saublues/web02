import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import SmoothScrolling from './components/SmoothScrolling'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScrolling>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </SmoothScrolling>
    </BrowserRouter>
  )
}

export default App
