import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import { GlowingBackground } from './components/animations/GlowingBackground'
import './styles/globals.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans antialiased">
        <GlowingBackground />
        <Navbar />
        <main id="main-content" className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App