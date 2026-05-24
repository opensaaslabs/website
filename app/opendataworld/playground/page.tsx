const examples = [
  'Search climate datasets in South Asia',
  'Find entities related to renewable energy',
  'Run vector similarity on health reports',
  'Traverse dataset lineage relationships',
  'Query governance metadata for public datasets',
]

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Query playground</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Explore semantic, vector, graph, and metadata queries.</h1>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <textarea className="h-44 w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none" placeholder="Write a semantic query against the OpenDataWorld platform..." />
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-950">Run query</button>
            <button className="rounded-2xl border border-white/20 px-6 py-4 font-bold text-white">Generate API request</button>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Example queries</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-medium text-slate-200">{example}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
