import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const graphLayers = ['Knowledge graph', 'Entity graph', 'Lineage graph', 'Dependency graph', 'Ontology mapping', 'Graph query APIs']

export default function GraphPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Graph database</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Connect datasets, entities, sources, owners, and transformations.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">OpenDataWorld models public data as a living graph of entities, relationships, provenance, schemas, dependencies, and downstream usage.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {graphLayers.map((layer) => (
            <div key={layer} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{layer}</h2>
              <p className="mt-3 text-slate-400">Graph-native layer for explainable, traceable, and queryable open data infrastructure.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
