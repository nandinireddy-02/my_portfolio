import { Github, ExternalLink } from 'lucide-react'

export const featuredProject = {
  id: 'faillab-ai',
  name: 'FailLab AI',
  tagline: 'AI-Powered Failure Analysis Platform',
  description: `FailLab AI is an intelligent platform that helps engineering teams automatically analyze, categorize, and prevent system failures. Using advanced ML models, it processes logs, metrics, and traces to identify root causes and predict potential issues before they impact production.`,
  longDescription: `Built as a comprehensive observability solution, FailLab AI integrates with existing monitoring stacks (Datadog, Prometheus, Grafana) to provide actionable insights. The platform features real-time anomaly detection, automated incident timelines, and collaborative postmortem generation.`,
  image: '/assets/images/faillab-ai.jpg',
  techStack: [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'FastAPI',
    'TensorFlow',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
    'WebSockets',
  ],
  status: 'live',
  featured: true,
  links: [
    { label: 'Live Demo', url: 'https://faillab.ai', icon: ExternalLink },
    { label: 'GitHub', url: 'https://github.com/nandini/faillab-ai', icon: Github },
    { label: 'Case Study', url: '/case-studies/faillab-ai', icon: ExternalLink },
  ],
  highlights: [
    'Reduced MTTR by 65% for partner teams',
    'Processes 1M+ logs/day in real-time',
    '99.9% uptime SLA',
    'Used by 50+ engineering teams',
  ],
  metrics: [
    { label: 'Log Volume', value: '1M+/day' },
    { label: 'Accuracy', value: '94.2%' },
    { label: 'Latency', value: '<200ms' },
    { label: 'Teams', value: '50+' },
  ],
}

export const supportingProjects = [
  {
    id: 'statathon',
    name: 'Statathon',
    tagline: 'Real-time Sports Analytics Dashboard',
    description: `A comprehensive sports analytics platform providing real-time statistics, predictive modeling, and interactive visualizations for cricket and football. Built for fantasy sports enthusiasts and analysts.`,
    image: '/assets/images/statathon.jpg',
    techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'WebSockets', 'Chart.js', 'Docker'],
    status: 'live',
    links: [
      { label: 'Live Demo', url: 'https://statathon.com', icon: ExternalLink },
      { label: 'GitHub', url: 'https://github.com/nandini/statathon', icon: Github },
    ],
    highlights: ['Real-time data processing', 'ML-powered predictions', '10k+ active users'],
    category: 'Full Stack',
  },
  {
    id: 'dentech-ai',
    name: 'Dentech AI',
    tagline: 'AI Dental Diagnosis Assistant',
    description: `An AI-powered web application that assists dentists in diagnosing dental conditions from X-ray images. Uses computer vision models to detect cavities, periodontal disease, and other anomalies with high accuracy.`,
    image: '/assets/images/dentech-ai.jpg',
    techStack: ['React', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Docker', 'AWS', 'TensorFlow'],
    status: 'in-progress',
    links: [
      { label: 'GitHub', url: 'https://github.com/nandini/dentech-ai', icon: Github },
      { label: 'Demo Video', url: 'https://youtube.com/demo', icon: ExternalLink },
    ],
    highlights: ['94% detection accuracy', 'HIPAA compliant', 'FDA pathway'],
    category: 'AI/ML',
  },
  {
    id: 'devflow',
    name: 'DevFlow',
    tagline: 'Developer Productivity Suite',
    description: `A VS Code extension and web dashboard that tracks coding patterns, provides productivity insights, and helps developers maintain flow state. Features automated time tracking, focus metrics, and team analytics.`,
    image: '/assets/images/devflow.jpg',
    techStack: ['TypeScript', 'Electron', 'React', 'Node.js', 'SQLite', 'Chart.js'],
    status: 'upcoming',
    links: [
      { label: 'GitHub', url: 'https://github.com/nandini/devflow', icon: Github },
      { label: 'Waitlist', url: 'https://devflow.dev', icon: ExternalLink },
    ],
    highlights: ['VS Code Extension', 'Privacy-first', 'Team insights'],
    category: 'Developer Tools',
  },
  {
    id: 'neural-style',
    name: 'Neural Style Transfer',
    tagline: 'Real-time Artistic Video Filter',
    description: `A mobile-first web app that applies artistic styles to live video using optimized neural networks. Features 20+ artistic styles, real-time processing at 30fps, and offline capability using TensorFlow.js.`,
    image: '/assets/images/neural-style.jpg',
    techStack: ['React', 'TensorFlow.js', 'WebGL', 'TypeScript', 'Vite', 'PWA'],
    status: 'completed',
    links: [
      { label: 'Live Demo', url: 'https://neural-style.vercel.app', icon: ExternalLink },
      { label: 'GitHub', url: 'https://github.com/nandini/neural-style', icon: Github },
    ],
    highlights: ['30fps real-time', 'Works offline', '20+ styles', 'PWA ready'],
    category: 'AI/ML',
  },
  {
    id: 'code-review-ai',
    name: 'CodeReview AI',
    tagline: 'Automated Code Review Assistant',
    description: `GitHub Action that uses LLMs to automatically review pull requests for bugs, security issues, and style violations. Integrates with GitHub Checks API and provides inline suggestions.`,
    image: '/assets/images/code-review-ai.jpg',
    techStack: ['Node.js', 'TypeScript', 'OpenAI API', 'GitHub Actions', 'Docker'],
    status: 'live',
    links: [
      { label: 'GitHub Marketplace', url: 'https://github.com/marketplace/codereview-ai', icon: ExternalLink },
      { label: 'GitHub', url: 'https://github.com/nandini/codereview-ai', icon: Github },
    ],
    highlights: ['GitHub Action', 'GPT-4 powered', '500+ repos using it'],
    category: 'Developer Tools',
  },
  {
    id: 'eco-tracker',
    name: 'EcoTracker',
    tagline: 'Personal Carbon Footprint Tracker',
    description: `A mobile-first PWA that helps users track and reduce their carbon footprint through automated tracking, personalized recommendations, and community challenges.`,
    image: '/assets/images/eco-tracker.jpg',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind', 'PWA', 'Vercel'],
    status: 'completed',
    links: [
      { label: 'Live Demo', url: 'https://ecotracker.app', icon: ExternalLink },
      { label: 'GitHub', url: 'https://github.com/nandini/ecotracker', icon: Github },
    ],
    highlights: ['PWA', 'Automated tracking', 'Community features', 'Open source'],
    category: 'Full Stack',
  },
]

export const allProjects = [featuredProject, ...supportingProjects]

export default { featuredProject, supportingProjects, allProjects }