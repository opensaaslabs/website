import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
