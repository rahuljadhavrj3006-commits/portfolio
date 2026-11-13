import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import About from './pages/About'
import CaseStudies from './pages/CaseStudies'
import CvContact from './pages/CvContact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<CvContact />} />
      </Route>
    </Routes>
  )
}

export default App