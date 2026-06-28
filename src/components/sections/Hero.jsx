import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import profile from '../../data/profile'
import { fadeInUp, staggerContainer, floatAnimation } from '../../utils/animations'

const socialIcons = [
  { icon: Github, href: 'https://github.com/nandini-reddy', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nandini-reddy', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nandini.reddy@example.com', label: 'Email' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-24"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed" aria-hidden="true" />

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 text-sm text-primary-400">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
              Available for opportunities
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-display-xl font-display font-bold text-slate-100 mb-4 text-balance"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <br />
            {profile.role}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-slate-400 max-w-2xl mb-8 text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap justify-center">
            <a href={profile.resumeUrl} download className="btn-primary">
              <FileText className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
              Download Resume
            </a>
            <button onClick={scrollToContact} className="btn-secondary">
              Get In Touch
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass border border-slate-700/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-display-sm font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        {...floatAnimation}
      >
        <ArrowDown className="w-6 h-6 text-slate-500" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
