const lakeLayers = ['Raw zone', 'Clean zone', 'Curated zone', 'Feature zone', 'Vector zone', 'Published zone']

export default function LakePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Data lake</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">A lakehouse foundation for open, multimodal, AI-ready data.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Store raw, cleaned, enriched, embedded, and published datasets with clear lifecycle stages and machine-readable metadata.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lakeLayers.map((layer) => (
            <div key={layer} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{layer}</h2>
              <p className="mt-3 text-slate-400">Organized storage layer for durable public data products and AI pipelines.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
