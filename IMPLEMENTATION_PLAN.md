# Nandini Reddy Portfolio - Implementation Plan

## Tech Stack
- **React 18** with **Vite** (fast dev server, optimized builds)
- **Tailwind CSS** (utility-first, dark mode, responsive)
- **Framer Motion** (smooth animations, scroll reveal, gestures)
- **Lucide React** (clean, premium icons)
- **React Router** (if needed for multi-page, but single-page with smooth scroll)

## Folder Structure
```
nandini-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── avatar.jpg
│   │   │   ├── faillab-ai.jpg
│   │   │   ├── statathon.jpg
│   │   │   └── dentech-ai.jpg
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── GradientText.jsx
│   │   │   ├── Section.jsx
│   │   │   └── Badge.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Achievements.jsx
│   │   │   └── Contact.jsx
│   │   └── animations/
│   │       ├── FloatingIcons.jsx
│   │       ├── ScrollReveal.jsx
│   │       └── GlowingBackground.jsx
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   ├── useIntersectionObserver.js
│   │   └── useSmoothScroll.js
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── achievements.js
│   │   └── socialLinks.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── utils/
│   │   ├── cn.js (className utility)
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── README.md
```

## Component Architecture

### 1. Core UI Components (`src/components/ui/`)
- **Button.jsx** - Primary, secondary, ghost variants with glow effects
- **Card.jsx** - Base card with glassmorphism
- **GlassCard.jsx** - Premium glassmorphism card with backdrop-blur
- **GradientText.jsx** - Reusable gradient text component
- **Section.jsx** - Section wrapper with consistent spacing, scroll-margin
- **Badge.jsx** - Status badges (In Progress, Upcoming, Live, etc.)

### 2. Layout Components (`src/components/layout/`)
- **Navbar.jsx** - Sticky glassmorphism navbar with:
  - Logo/name
  - Navigation links (Home, About, Skills, Projects, Achievements, Contact, Resume)
  - Active section highlight
  - Mobile hamburger menu
  - Smooth scroll to sections
  - Scroll-based background opacity
- **Footer.jsx** - Minimal footer with copyright, credits
- **MobileMenu.jsx** - Slide-in mobile navigation

### 3. Section Components (`src/components/sections/`)
- **Hero.jsx** - Full-screen hero with:
  - Animated gradient background (CSS/Canvas)
  - Floating tech icons (React, Node, Python, AI, etc.)
  - Profile avatar card with glow
  - Gradient text for name/role
  - "Available for Opportunities" badge
  - CTA buttons (View Projects, Contact Me, Download Resume)
  - Scroll indicator
- **About.jsx** - Professional intro + 4 highlight cards with hover effects
- **Skills.jsx** - Animated grouped skill cards (6 categories) with:
  - Staggered entrance animations
  - Hover glow effects
  - Icon + skill chips layout
- **Projects.jsx** - Featured project (FailLab AI) + supporting projects grid
  - Large featured card for FailLab AI
  - Grid of supporting project cards
  - Glassmorphism cards with hover lift/glow
  - Tech stack tags, status badges, action buttons
- **Achievements.jsx** - Animated timeline/cards with staggered reveal
- **Contact.jsx** - Glassmorphism form + social links

### 4. Animation Components (`src/components/animations/`)
- **FloatingIcons.jsx** - Tech icons floating in hero background
- **ScrollReveal.jsx** - Wrapper for scroll-triggered animations
- **GlowingBackground.jsx** - Animated gradient mesh background

## Custom Hooks (`src/hooks/`)
- **useScrollSpy.js** - Track active section for navbar highlight
- **useIntersectionObserver.js** - Trigger animations on scroll
- **useSmoothScroll.js** - Smooth scroll to section IDs

## Data Files (`src/data/`)
All content centralized for easy editing:
- **profile.js** - Name, role, tagline, bio, avatar, resume URL
- **skills.js** - 6 categories with icons, skills arrays
- **projects.js** - Featured + supporting projects with all metadata
- **achievements.js** - Timeline items with dates, descriptions
- **socialLinks.js** - GitHub, LinkedIn, Email, Resume URLs

## Design System (Tailwind Config)
- **Colors**: Dark theme with cyan/emerald/blue accents
- **Typography**: Inter (body) + Space Grotesk (headings)
- **Spacing**: Consistent scale
- **Animations**: Custom keyframes for glow, float, pulse
- **Glassmorphism**: backdrop-blur, border, bg-opacity utilities

## Animation Strategy (Framer Motion)
- **Page Load**: Staggered hero elements (name → role → tagline → buttons → avatar)
- **Scroll Reveal**: Each section fades up with stagger
- **Hover**: Cards lift, glow, scale slightly
- **Navbar**: Background blur on scroll, active link indicator
- **Floating Icons**: Continuous subtle animation
- **Buttons**: Tap scale, hover glow

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px

## Performance Optimizations
- Lazy load images
- Code splitting (if multi-page)
- Optimized Framer Motion (use `transform` only)
- Minimal re-renders (React.memo where needed)
- CSS-first animations where possible

## Accessibility
- Semantic HTML
- Focus visible states
- ARIA labels
- Color contrast (WCAG AA)
- Reduced motion support
- Keyboard navigation

## Implementation Order
1. Project setup (Vite, Tailwind, Framer Motion, deps)
2. Config files (tailwind.config.js, vite.config.js)
3. Core utilities (cn.js, animations.js)
4. Data files (profile, skills, projects, achievements, social)
5. UI primitives (Button, Card, GlassCard, GradientText, Section, Badge)
6. Layout components (Navbar, Footer, MobileMenu)
7. Animation components (FloatingIcons, ScrollReveal, GlowingBackground)
8. Section components (Hero, About, Skills, Projects, Achievements, Contact)
9. Custom hooks (useScrollSpy, useIntersectionObserver, useSmoothScroll)
10. App composition & routing
11. Global styles & polish
12. Testing & optimization