const metadata = [
  ['Owner', 'OpenDataWorld Climate Working Group'],
  ['Steward', 'data-team@opendataworld.org'],
  ['License', 'CC-BY-4.0'],
  ['Freshness SLA', '24 hours'],
  ['Quality score', '98.4%'],
  ['Access', 'Public'],
]

const pipeline = ['Source sync', 'Unit normalization', 'Region mapping', 'Entity enrichment', 'Embedding generation', 'API publishing']

export default function ClimateDatasetPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/opendataworld/catalog" className="text-sm font-semibold text-cyan-300">← Catalog</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Dataset profile</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Global Climate Signals</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A governed climate dataset with tabular records, geospatial regions, source documents, embeddings, and graph relationships for AI-native analysis.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {metadata.map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{label}</p>
              <p className="mt-3 text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">Processing lineage</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {pipeline.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center">
                <p className="text-sm text-cyan-200">0{index + 1}</p>
                <h3 className="mt-3 font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
