import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const endpoints = [
  ['GET', '/api/datasets', 'List datasets with metadata, ownership, quality, and sync status.'],
  ['GET', '/api/datasets/{id}', 'Read a single dataset profile.'],
  ['GET', '/api/datasets/{id}/lineage', 'Read dataset lineage and processing stages.'],
  ['GET', '/api/datasets/{id}/sync', 'Read sync status, cadence, and freshness.'],
  ['POST', '/api/search', 'Run keyword, metadata, semantic, graph, and geo search.'],
  ['POST', '/api/vectors/search', 'Run vector similarity and hybrid retrieval.'],
  ['POST', '/api/graph/query', 'Query entities, relationships, dependencies, and knowledge graphs.'],
  ['POST', '/api/entities/extract', 'Extract entities and relationships from source content.'],
]

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">API reference</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Developer APIs for trusted AI-ready data.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use OpenDataWorld APIs to discover datasets, query vectors and graphs, inspect lineage, monitor sync status, and extract entities.</p>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          {endpoints.map(([method, path, description]) => (
            <div key={path} className="grid gap-4 border-b border-white/10 p-6 last:border-b-0 lg:grid-cols-[100px_320px_1fr]">
              <span className="font-mono text-sm font-bold text-cyan-200">{method}</span>
              <code className="font-mono text-sm text-white">{path}</code>
              <p className="text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
