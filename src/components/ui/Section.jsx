import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Section = forwardRef(
  ({
    children,
    className,
    id,
    padding = 'lg',
    container = true,
    background = 'transparent',
    scrollMargin = true,
    ...props
  }, ref) => {
    const paddings = {
      none: '',
      sm: 'py-12 sm:py-16',
      md: 'py-16 sm:py-20 lg:py-24',
      lg: 'py-20 sm:py-28 lg:py-32',
      xl: 'py-28 sm:py-36 lg:py-44',
    }

    const backgrounds = {
      transparent: '',
      dark: 'bg-slate-950',
      darker: 'bg-slate-950/80 backdrop-blur-sm',
      gradient: 'bg-gradient-mesh',
      mesh: 'bg-gradient-hero',
    }

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full',
          scrollMargin && 'scroll-mt-24',
          paddings[padding],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {container ? (
          <div className="section-container relative z-10">{children}</div>
        ) : (
          <div className="relative z-10">{children}</div>
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section