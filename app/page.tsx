import { SiteHeader } from '@/components/site-header'
import { ButtonLink } from '@/components/ui/button-link'
import { Section } from '@/components/ui/section'
import { projects } from '@/lib/projects'

const pillars = [
  'Open-source SaaS blueprints',
  'AI-native product engineering',
  'Self-hosting and deployment guides',
  'Governance, security, and compliance patterns',
]

const roadmap = ['Discover', 'Fork', 'Configure', 'Deploy', 'Operate']

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-6 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_30%)]" />
        <SiteHeader />
        <div className="mx-auto grid max-w-7xl items-center gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">Open-source labs for AI-native SaaS builders</p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Build, ship, and self-host modern SaaS faster.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">OpenSaaSLabs curates practical templates, reference architectures, deployment guides, and community playbooks for founders, developers, and automation teams building durable SaaS products.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://github.com/opensaaslabs">Explore repositories</ButtonLink>
              <ButtonLink href="/docs" variant="secondary">Read docs</ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-6 ring-1 ring-white/10">
              <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
              <pre className="mt-8 overflow-hidden text-sm leading-7 text-slate-300"><code>{`npx create-opensaas app\n\n✓ auth + billing patterns\n✓ deployment recipes\n✓ AI workflow examples\n✓ governance checklists\n\nship: open, portable, production-ready`}</code></pre>
            </div>
          </div>
        </div>
      </section>
      <Section id="platform" eyebrow="Platform pillars" title="Everything needed to move from idea to production.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{pillars.map((pillar) => <div key={pillar} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-lg font-semibold text-slate-100">{pillar}</div>)}</div>
      </Section>
      <Section id="projects" eyebrow="Ecosystem" title="A lab network for reusable SaaS infrastructure.">
        <div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <a key={project.name} href={project.href} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:bg-slate-900"><h3 className="text-2xl font-bold">{project.name}</h3><p className="mt-4 leading-7 text-slate-300">{project.description}</p></a>)}</div>
      </Section>
      <Section id="roadmap" eyebrow="Workflow" title="A repeatable path for open SaaS delivery.">
        <div className="grid gap-4 md:grid-cols-5">{roadmap.map((step, index) => <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><p className="text-sm text-cyan-200">0{index + 1}</p><h3 className="mt-3 text-xl font-bold">{step}</h3></div>)}</div>
      </Section>
      <section id="community" className="px-6 py-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 to-fuchsia-400/15 p-8 sm:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Join the lab</p><h2 className="mt-4 text-4xl font-black tracking-tight">Contribute, fork, deploy, repeat.</h2></div><p className="text-lg leading-8 text-slate-200">OpenSaaSLabs is built for teams who want transparent software foundations: clear docs, portable code, modular services, and practical recipes that can move from prototype to production.</p></div></div></section>
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400 sm:px-8 lg:px-12">© {new Date().getFullYear()} OpenSaaSLabs. Built in the open.</footer>
    </main>
  )
}
