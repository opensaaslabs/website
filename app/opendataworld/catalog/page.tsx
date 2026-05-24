import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const datasets = [
  { name: 'Global Climate Signals', domain: 'Environment', status: 'Synced', modalities: 'Tabular, geospatial, documents, embeddings', href: '/opendataworld/datasets/climate' },
  { name: 'Open Transit Registry', domain: 'Mobility', status: 'Validated', modalities: 'GTFS, geospatial, graph', href: '/opendataworld/catalog' },
  { name: 'Public Health Atlas', domain: 'Health', status: 'Governed', modalities: 'Tabular, documents, entities', href: '/opendataworld/catalog' },
  { name: 'Economic Indicators Graph', domain: 'Economy', status: 'Lineage ready', modalities: 'Graph, tabular, vectors', href: '/opendataworld/catalog' },
]

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Dataset catalog</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Discover governed, AI-ready open datasets.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Search across dataset metadata, owners, licenses, schemas, lineage, quality scores, modalities, sync status, and API endpoints.</p>
        <div className="mt-12 grid gap-5">
          {datasets.map((dataset) => (
            <a key={dataset.name} href={dataset.href} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{dataset.name}</h2>
                  <p className="mt-2 text-slate-400">{dataset.domain} · {dataset.modalities}</p>
                </div>
                <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">{dataset.status}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
