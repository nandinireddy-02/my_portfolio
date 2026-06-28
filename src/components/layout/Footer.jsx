import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/nandini-reddy', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/nandini-reddy', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:nandini.reddy@example.com', icon: Mail, label: 'Email' },
  { href: '/resume.pdf', icon: FileText, label: 'Resume' },
]

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-display font-bold text-lg">NR</span>
              </div>
              <span className="font-display font-semibold text-xl text-slate-100 tracking-tight">
                Nandini Reddy
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer passionate about building beautiful, accessible, and performant web experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-slate-200 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-slate-200 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-primary-400 hover:bg-slate-800 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {year} Nandini Reddy. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Made with
            <Heart className="w-4 h-4 text-red-400 fill-red-400" aria-hidden="true" />
            using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
