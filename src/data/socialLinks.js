import { Github, Linkedin, Mail, Twitter, FileText, Globe } from 'lucide-react'

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/nandini-reddy',
    icon: Github,
    color: 'hover:text-primary-400',
    bgColor: 'hover:bg-primary-500/10',
    borderColor: 'hover:border-primary-500/30',
    description: 'View my repositories and contributions',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/nandini-reddy',
    icon: Linkedin,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
    borderColor: 'hover:border-blue-500/30',
    description: 'Connect with me professionally',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:nandini.reddy@example.com',
    icon: Mail,
    color: 'hover:text-emerald-400',
    bgColor: 'hover:bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/30',
    description: 'Send me a direct message',
  },
  {
    id: 'twitter',
    label: 'Twitter/X',
    url: 'https://twitter.com/nandini_reddy',
    icon: Twitter,
    color: 'hover:text-sky-400',
    bgColor: 'hover:bg-sky-500/10',
    borderColor: 'hover:border-sky-500/30',
    description: 'Follow my thoughts and updates',
  },
  {
    id: 'resume',
    label: 'Resume',
    url: '/resume.pdf',
    icon: FileText,
    color: 'hover:text-violet-400',
    bgColor: 'hover:bg-violet-500/10',
    borderColor: 'hover:border-violet-500/30',
    description: 'Download my resume (PDF)',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    url: 'https://nandini-reddy.dev',
    icon: Globe,
    color: 'hover:text-amber-400',
    bgColor: 'hover:bg-amber-500/10',
    borderColor: 'hover:border-amber-500/30',
    description: 'Visit my personal website',
  },
]

export const footerSocialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/nandini-reddy',
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/nandini-reddy',
    icon: Linkedin,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/nandini_reddy',
    icon: Twitter,
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:nandini.reddy@example.com',
    icon: Mail,
  },
]

export default socialLinks