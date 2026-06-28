import { cn } from '../../utils/cn'

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot = false,
  dotColor,
  icon,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-800/50 border border-slate-700/50 text-slate-300',
    primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
    accent: 'bg-accent-500/20 text-accent-400 border border-accent-500/30',
    amber: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    violet: 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
    red: 'bg-red-500/20 text-red-400 border border-red-500/30',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    error: 'bg-red-500/20 text-red-400 border border-red-500/30',
    outline: 'bg-transparent border border-slate-600/50 text-slate-300 hover:border-primary-500/50 hover:text-primary-400',
    glass: 'glass text-slate-100',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-[0.625rem]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
    xl: 'px-5 py-2 text-base',
  }

  const dotColors = {
    primary: 'bg-primary-400',
    accent: 'bg-accent-400',
    amber: 'bg-amber-400',
    violet: 'bg-violet-400',
    red: 'bg-red-400',
    green: 'bg-emerald-400',
    gray: 'bg-slate-400',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full animate-pulse',
            dotColors[dotColor] || 'bg-primary-400'
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  )
}

export const StatusBadge = ({ status, className, ...props }) => {
  const statusVariants = {
    live: 'success',
    'in-progress': 'warning',
    upcoming: 'primary',
    completed: 'default',
    archived: 'outline',
  }

  const statusLabels = {
    live: 'Live',
    'in-progress': 'In Progress',
    upcoming: 'Upcoming',
    completed: 'Completed',
    archived: 'Archived',
  }

  return (
    <Badge
      variant={statusVariants[status] || 'default'}
      dot
      dotColor={status === 'live' ? 'green' : status === 'in-progress' ? 'amber' : status === 'upcoming' ? 'primary' : 'gray'}
      className={className}
      {...props}
    >
      {statusLabels[status] || status}
    </Badge>
  )
}

export default Badge