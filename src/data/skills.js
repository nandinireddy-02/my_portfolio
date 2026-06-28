import { Database, Cloud, Globe, Terminal, Brain, Server } from 'lucide-react'

export const skillCategories = [
  {
    category: 'Frontend',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 90, icon: '{}' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Framer Motion', level: 85, icon: '✨' },
      { name: 'Vite', level: 90, icon: '⚡' },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Express.js', level: 90, icon: '🚂' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'FastAPI', level: 80, icon: '⚡' },
      { name: 'REST APIs', level: 90, icon: '🔗' },
      { name: 'GraphQL', level: 75, icon: '📊' },
    ],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    skills: [
      { name: 'PostgreSQL', level: 85, icon: '🐘' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'Redis', level: 80, icon: '🔴' },
      { name: 'Supabase', level: 85, icon: '⚡' },
      { name: 'Firebase', level: 80, icon: '🔥' },
      { name: 'Prisma ORM', level: 80, icon: '🔧' },
    ],
  },
  {
    category: 'AI / ML',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    skills: [
      { name: 'TensorFlow', level: 80, icon: '🧠' },
      { name: 'PyTorch', level: 75, icon: '🔥' },
      { name: 'Scikit-learn', level: 85, icon: '📊' },
      { name: 'OpenAI API', level: 85, icon: '🤖' },
      { name: 'LangChain', level: 75, icon: '⛓️' },
      { name: 'Computer Vision', level: 70, icon: '👁️' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    skills: [
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Vercel', level: 90, icon: '▲' },
      { name: 'GitHub Actions', level: 85, icon: '⚙️' },
      { name: 'Linux/Shell', level: 80, icon: '🐧' },
      { name: 'Nginx', level: 75, icon: '🌐' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: Terminal,
    color: 'from-slate-400 to-zinc-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    skills: [
      { name: 'Git/GitHub', level: 95, icon: '📂' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 80, icon: '🎨' },
      { name: 'Postman', level: 90, icon: '📮' },
      { name: 'Jest/Vitest', level: 80, icon: '🧪' },
      { name: 'ESLint/Prettier', level: 90, icon: '✨' },
    ],
  },
]

export const allSkills = skillCategories.flatMap((cat) => cat.skills.map((s) => s.name))

export default skillCategories