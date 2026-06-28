import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-medium tracking-wide
      transition-all duration-300
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      active:scale-[0.98]
    `

    const variants = {
      primary: `
        px-8 py-3.5 text-sm rounded-xl
        bg-gradient-to-r from-primary-500 to-primary-600 text-white
        hover:from-primary-400 hover:to-primary-500
        hover:shadow-glow
        focus-visible:ring-primary-500/50
      `,
      secondary: `
        px-8 py-3.5 text-sm rounded-xl
        glass border border-slate-700/50 text-slate-100
        hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-glow
        focus-visible:ring-primary-500/50
      `,
      ghost: `
        px-6 py-2.5 text-sm rounded-lg
        text-slate-300 hover:text-white hover:bg-slate-800/50
        focus-visible:ring-primary-500/50
      `,
      outline: `
        px-8 py-3.5 text-sm rounded-xl
        border-2 border-primary-500/50 text-primary-400
        hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-300 hover:shadow-glow
        focus-visible:ring-primary-500/50
      `,
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-3.5 text-sm',
      lg: 'px-10 py-4 text-base',
      xl: 'px-12 py-5 text-lg',
    }

    const widthStyles = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], widthStyles, className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button