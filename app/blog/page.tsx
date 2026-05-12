const posts = [
  {
    title: 'Launching OpenSaaSLabs',
    excerpt: 'Why open operational infrastructure matters for the next generation of SaaS products.',
  },
  {
    title: 'Self-hosting AI-native stacks',
    excerpt: 'Portable deployment workflows for resilient and sovereign infrastructure.',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          Blog
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">Insights & Updates</h1>
        <div className="mt-12 grid gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
