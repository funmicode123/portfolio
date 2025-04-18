import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Skills from '../pages/skills/Skills'
import Projects from '../pages/project/Project'
import ContactMe from '../pages/contactMe/ContactMe'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contactMe" element={<ContactMe />} />
    </Routes>
  )
}
