const modules = [
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
]

export default function OpenDataWorldPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            OpenDataWorld
          </p>
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
            Open data infrastructure for the AI-native world.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            OpenDataWorld unifies multimodal databases, vector search, graph intelligence,
            governance, lineage, sync, analytics, and APIs into one trusted public data platform.
          </p>
        </div>

        <section>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Platform modules</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(([name, href]) => (
              <a key={name} href={href} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="mt-3 text-slate-400">Explore the {name.toLowerCase()} layer of the OpenDataWorld platform.</p>
              </a>
            ))}
          </div>
        </section>

        <section id="developers" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Developer layer
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            APIs for search, vectors, graphs, lineage, sync, entities, and analytics.
          </h2>
          <pre className="mt-8 overflow-auto rounded-2xl bg-black p-6 text-sm text-cyan-200">
{`GET /api/datasets
GET /api/search?q=climate
POST /api/vectors/search
POST /api/graph/query
GET /api/datasets/{id}/lineage
GET /api/datasets/{id}/sync
POST /api/entities/extract`}
          </pre>
        </section>
      </section>
    </main>
  )
}
