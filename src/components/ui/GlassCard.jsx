import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const GlassCard = forwardRef(
  ({
    children,
    className,
    variant = 'default',
    hover = true,
    glow = false,
    border = true,
    padding = 'lg',
    ...props
  }, ref) => {
    const variants = {
      default: 'bg-slate-900/40 backdrop-blur-xl',
      light: 'bg-slate-900/20 backdrop-blur-lg',
      strong: 'bg-slate-900/70 backdrop-blur-2xl',
      gradient: 'bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-xl',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    }

    const borderStyles = border ? 'border border-slate-700/30' : ''
    const hoverStyles = hover ? 'card-hover' : ''
    const glowStyles = glow ? 'hover:shadow-glow-lg' : ''

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl transition-all duration-500',
          variants[variant],
          paddings[padding],
          borderStyles,
          hoverStyles,
          glowStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export default GlassCard