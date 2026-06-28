import { motion } from 'framer-motion'
import { Code2, Sparkles, Target, BookOpen } from 'lucide-react'
import profile from '../../data/profile'
import Section from '../ui/Section'
import ScrollReveal from '../animations/ScrollReveal'
import { fadeInUp, staggerContainer } from '../../utils/animations'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices.',
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
    borderColor: 'border-primary-500/20',
  },
  {
    icon: Sparkles,
    title: 'AI/ML Integration',
    description: 'Leveraging machine learning to create intelligent, data-driven solutions.',
    color: 'text-accent-400',
    bgColor: 'bg-accent-500/10',
    borderColor: 'border-accent-500/20',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Transforming complex challenges into elegant, user-centric products.',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Staying at the forefront of technology with constant exploration and growth.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
]

export default function About() {
  return (
    <Section id="about" variant="darker">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-500/20 text-xs font-medium text-primary-400">
              About Me
            </div>

            <h2 className="text-display-md font-display font-bold text-slate-100">
              Passionate about{' '}
              <span className="gradient-text">building impactful</span>{' '}
              digital experiences
            </h2>

            <p className="text-body text-slate-400 leading-relaxed">
              {profile.bio}
            </p>

            <p className="text-body text-slate-400 leading-relaxed">
              With expertise across the full stack and a deep interest in AI/ML,
              I bridge the gap between robust engineering and intelligent features.
              I thrive in collaborative environments and love mentoring fellow developers.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a href={profile.resumeUrl} download className="btn-primary text-sm">
                Download Resume
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary text-sm">
                Contact Me
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`p-5 rounded-2xl ${item.bgColor} border ${item.borderColor} backdrop-blur-sm hover:shadow-glow transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-sm text-slate-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
