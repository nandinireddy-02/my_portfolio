import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function MobileMenu({ onClose, navLinks, onNavClick, socialLinks }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-slate-950 border-l border-slate-800/50 shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
          <span className="font-display font-semibold text-xl text-slate-100 tracking-tight">
            Nandini Reddy
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-6">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={(e) => onNavClick(link.href, e)}
              className="w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-slate-300 hover:text-primary-400 hover:bg-slate-800/50 transition-all duration-200"
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800/50">
          <div className="flex items-center justify-center gap-4">
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
      </motion.div>
    </motion.div>
  )
}
