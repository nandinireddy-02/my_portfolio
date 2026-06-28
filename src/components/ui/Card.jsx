import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Card = forwardRef(
  ({ children, className, variant = 'default', hover = false, padding = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-glass',
      glass: 'glass',
      strong: 'glass-strong',
      gradient: 'glass gradient-border',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    }

    const hoverStyles = hover ? 'card-hover' : ''

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all duration-500',
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card