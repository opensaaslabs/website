const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
]

export function SiteHeader() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
      <a href="#" className="text-sm font-semibold tracking-[0.3em] text-cyan-200">
        OPENSAASLABS
      </a>
      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
      <a
        href="https://github.com/opensaaslabs"
        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
      >
        GitHub
      </a>
    </nav>
  )
}
