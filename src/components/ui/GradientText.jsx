import { cn } from '../../utils/cn'

export const GradientText = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent',
    warm: 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent',
    cool: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent',
    purple: 'bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent',
    rainbow: 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:300%_100%] animate-gradient-shift',
    subtle: 'bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent',
  }

  return (
    <span className={cn('inline-block', variants[variant], className)} {...props}>
      {children}
    </span>
  )
}

export default GradientText