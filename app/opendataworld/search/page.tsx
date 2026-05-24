import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const searchModes = ['Keyword search', 'Metadata filters', 'Semantic search', 'Vector similarity', 'Graph traversal', 'Geospatial search']

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Search</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Search across datasets, entities, vectors, graphs, and metadata.</h1>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none" placeholder="Search open datasets, agencies, entities, regions, metrics..." />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {searchModes.map((mode) => <div key={mode} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-xl font-bold">{mode}</h2><p className="mt-3 text-slate-400">Discovery interface for trusted, AI-ready public data.</p></div>)}
        </div>
      </section>
    </main>
  )
}
