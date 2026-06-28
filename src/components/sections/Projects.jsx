import { motion } from 'framer-motion'
import { Star, Zap } from 'lucide-react'
import Section from '../ui/Section'
import ScrollReveal from '../animations/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import { featuredProject, supportingProjects } from '../../data/projects'
import { staggerContainer, fadeInUp } from '../../utils/animations'

const statusConfig = {
  live: { label: 'Live', variant: 'success' },
  'in-progress': { label: 'In Progress', variant: 'warning' },
  upcoming: { label: 'Upcoming', variant: 'primary' },
  completed: { label: 'Completed', variant: 'accent' },
}

export default function Projects() {
  return (
    <Section id="projects" variant="darker">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-500/20 text-xs font-medium text-primary-400 mb-4">
            Projects
          </div>
          <h2 className="text-display-md font-display font-bold text-slate-100 mb-4">
            Featured Work
          </h2>
          <p className="text-body text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise across full-stack development, AI/ML, and developer tools.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <GlassCard variant="gradient" className="mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant={statusConfig[featuredProject.status]?.variant}>
                  {statusConfig[featuredProject.status]?.label}
                </Badge>
                <Badge variant="glass">Featured</Badge>
              </div>

              <h3 className="text-display-sm font-display font-bold text-slate-100">
                {featuredProject.name}
              </h3>

              <p className="text-body text-slate-400">{featuredProject.tagline}</p>
              <p className="text-body-sm text-slate-500">{featuredProject.description}</p>

              <div className="flex flex-wrap gap-2">
                {featuredProject.techStack.filter(Boolean).map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {featuredProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-5 py-2.5"
                  >
                    <link.icon className="w-4 h-4 mr-1.5 inline-block" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-700/50">
                {featuredProject.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-heading-sm font-display font-bold gradient-text">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-slate-700/50 p-8 flex items-center justify-center min-h-[250px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">
                      {featuredProject.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{featuredProject.tagline}</p>
                </div>
              </div>

              <div className="space-y-2">
                {featuredProject.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <Zap className="w-4 h-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {supportingProjects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <GlassCard variant="strong" hover className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={statusConfig[project.status]?.variant}>
                  {statusConfig[project.status]?.label}
                </Badge>
              </div>

              <h3 className="font-display font-semibold text-lg text-slate-100 mb-1">
                {project.name}
              </h3>

              <p className="text-sm text-slate-500 mb-3">{project.tagline}</p>
              <p className="text-body-sm text-slate-400 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge text-[10px] px-2 py-1">{tech}</span>
                ))}
              </div>

              {project.highlights && (
                <div className="space-y-1 mb-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Star className="w-3 h-3 text-accent-400 flex-shrink-0" aria-hidden="true" />
                      {h}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 pt-4 border-t border-slate-700/50 mt-auto">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    <link.icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
