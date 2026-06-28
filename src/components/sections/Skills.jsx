import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import ScrollReveal from '../animations/ScrollReveal'
import { skillCategories } from '../../data/skills'
import { cn } from '../../utils/cn'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  const category = skillCategories[activeCategory]
  const Icon = category.icon

  return (
    <Section id="skills" variant="dark">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-500/20 text-xs font-medium text-primary-400 mb-4">
            Skills & Expertise
          </div>
          <h2 className="text-display-md font-display font-bold text-slate-100 mb-4">
            Technologies I work with
          </h2>
          <p className="text-body text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the tools, frameworks, and technologies I use to build modern applications.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                activeCategory === index
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-glow'
                  : 'glass border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600/50'
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <div className={`p-6 sm:p-8 rounded-3xl ${category.bgColor} border ${category.borderColor} backdrop-blur-sm`}>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${category.color.replace('from-', 'text-').split(' ')[0]}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-100">
                  {category.category}
                </h3>
                <p className="text-sm text-slate-400">
                  {category.skills.length} technologies
                </p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="initial"
              animate="animate"
              className="grid gap-5"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={staggerItem(0)}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-slate-200">
                      <span aria-hidden="true">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
