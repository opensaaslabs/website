import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({ children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200'
      : 'border border-white/15 text-white hover:bg-white/10'

  return (
    <a
      className={`rounded-full px-7 py-4 text-center font-bold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
