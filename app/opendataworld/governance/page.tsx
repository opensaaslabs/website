const governanceAreas = ['Ownership', 'Stewardship', 'Licensing', 'Access policy', 'Review workflows', 'Audit readiness']

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Governance</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Govern public data with clear ownership, policy, and trust signals.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">OpenDataWorld makes governance visible through dataset owners, stewards, licenses, approval states, review status, and operational controls.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governanceAreas.map((area) => (
            <div key={area} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">{area}</h2>
              <p className="mt-3 text-slate-400">Policy and trust layer for responsible open data operations.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
