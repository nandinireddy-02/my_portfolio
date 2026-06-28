import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import Section from '../ui/Section'
import ScrollReveal from '../animations/ScrollReveal'
import Button from '../ui/Button'
import profile from '../../data/profile'

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Section id="contact" variant="darker">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-500/20 text-xs font-medium text-primary-400">
              Get In Touch
            </div>

            <h2 className="text-display-md font-display font-bold text-slate-100">
              Let&apos;s work{' '}
              <span className="gradient-text">together</span>
            </h2>

            <p className="text-body text-slate-400 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl glass border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-slate-200 hover:text-primary-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com/nandini-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass border border-slate-700/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/nandini-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass border border-slate-700/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/nandini_reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass border border-slate-700/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              rightIcon={<Send className="w-4 h-4" aria-hidden="true" />}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </Button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-accent-400 text-center"
              >
                Thanks for reaching out! I&apos;ll get back to you soon.
              </motion.p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </Section>
  )
}
