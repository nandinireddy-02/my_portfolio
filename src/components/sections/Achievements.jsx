import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Section from '../ui/Section'
import ScrollReveal from '../animations/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import { achievements, achievementCategories } from '../../data/achievements'
import { cn } from '../../utils/cn'

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? achievements
    : achievements.filter((a) => a.category.toLowerCase() === activeCategory)

  return (
    <Section id="achievements" variant="dark">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-500/20 text-xs font-medium text-primary-400 mb-4">
            Achievements
          </div>
          <h2 className="text-display-md font-display font-bold text-slate-100 mb-4">
            Milestones & Recognition
          </h2>
          <p className="text-body text-slate-400 max-w-2xl mx-auto">
            A track record of hackathon wins, certifications, speaking engagements, and community contributions.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {achievementCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                activeCategory === cat.id
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-glow'
                  : 'glass border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600/50'
              )}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                >
                  <GlassCard variant="strong" hover className="h-full flex flex-col group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={cn(
                        'w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300',
                        item.iconColor
                      )}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-sm text-slate-100 mb-0.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {item.organization} &middot; {item.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-body-sm text-slate-400 mb-4 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                      <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">
                        {item.badge}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-primary-400 transition-colors"
                          aria-label={`View details for ${item.title}`}
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
