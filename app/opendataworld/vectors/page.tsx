import { OpenDataWorldNav } from '@/components/opendataworld-nav'

const capabilities = ['Embedding storage', 'Hybrid retrieval', 'Similarity search', 'RAG-ready APIs', 'Multimodal embeddings', 'Semantic ranking']

export default function VectorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <OpenDataWorldNav />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <a href="/opendataworld" className="text-sm font-semibold text-cyan-300">← OpenDataWorld</a>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Vector database</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Semantic infrastructure for AI-native retrieval.</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-bold">{item}</h2><p className="mt-3 text-slate-400">Vector search capabilities for open datasets and knowledge systems.</p></div>)}</div>
      </section>
    </main>
  )
}
