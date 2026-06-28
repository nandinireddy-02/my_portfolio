import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/nandini-reddy', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/nandini-reddy', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:nandini.reddy@example.com', icon: Mail, label: 'Email' },
  { href: '/resume.pdf', icon: FileText, label: 'Resume' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()
  const activeSection = useScrollSpy()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href, e) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/50 shadow-glass'
            : 'bg-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-white font-display font-bold text-lg">NR</span>
              </motion.div>
              <span className="hidden sm:block font-display font-semibold text-xl text-slate-100 tracking-tight">
                Nandini Reddy
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-all duration-200',
                    'hover:text-primary-400',
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary-400'
                      : 'text-slate-400'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                  <AnimatePresence>
                    {activeSection === link.href.replace('#', '') && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="btn-primary text-sm px-6 py-2.5"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            navLinks={navLinks}
            onNavClick={handleNavClick}
            socialLinks={socialLinks}
          />
        )}
      </AnimatePresence>
    </>
  )
}