import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const stages = ['Ingestion', 'Validation', 'Transformation', 'Enrichment', 'Embedding generation', 'Publishing']

export default function LineagePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Lineage</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Track dataset flow across the platform.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">OpenDataWorld provides visibility into how datasets move through ingestion, processing, enrichment, and publishing workflows.</p>
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, index) => (
            <div key={stage} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-sm text-cyan-200">0{index + 1}</p>
              <h2 className="mt-3 text-lg font-bold">{stage}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
