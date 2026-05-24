const links = [
  ['Overview', '/opendataworld'],
  ['Catalog', '/opendataworld/catalog'],
  ['Search', '/opendataworld/search'],
  ['Vectors', '/opendataworld/vectors'],
  ['Graph', '/opendataworld/graph'],
  ['Lineage', '/opendataworld/lineage'],
  ['Governance', '/opendataworld/governance'],
  ['Analytics', '/opendataworld/analytics'],
  ['Lake', '/opendataworld/lake'],
  ['Sync', '/opendataworld/sync'],
  ['Entities', '/opendataworld/entities'],
  ['API', '/opendataworld/api'],
  ['Playground', '/opendataworld/playground'],
]

export function OpenDataWorldNav() {
  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 pt-8 sm:px-10 lg:px-16">
      {links.map(([label, href]) => (
        <a key={href} href={href} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white">
          {label}
        </a>
      ))}
    </nav>
  )
}
