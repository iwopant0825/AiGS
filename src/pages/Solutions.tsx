type Plan = {
  title: string
  tag: 'Mitigation' | 'Adaptation' | 'Equity'
  summary: string
  kpis: string[]
  budget: string
  duration: string
}

const plans: Plan[] = [
  {
    title: 'Urban Heat Island Mitigation',
    tag: 'Mitigation',
    summary:
      'Deploy reflective surfaces and micro-forests in hotspots prioritized by AI risk maps to cut peak temperatures.',
    kpis: ['Avg. surface temp reduction (°C)', 'Canopy coverage increase (%)', 'Heat-related ER visits'],
    budget: '$250k–$1.2M',
    duration: '6–12 months',
  },
  {
    title: 'Flood-Resilient Infrastructure',
    tag: 'Adaptation',
    summary:
      'Retrofit drainage and build nature‑based retention in flood-prone grids determined by hydrological models.',
    kpis: ['Flooded hours ↓', 'Runoff absorbed (m³)', 'Insured loss avoided ($)'],
    budget: '$400k–$2.0M',
    duration: '9–18 months',
  },
  {
    title: 'Community Solar for Low‑income',
    tag: 'Equity',
    summary:
      'Install shared PV and deliver energy credits to vulnerable households identified by socioeconomic indices.',
    kpis: ['Households served', 'kWh produced', 'Energy burden ↓ (%)'],
    budget: '$300k–$1.5M',
    duration: '6–12 months',
  },
]

export default function Solutions() {
  return (
    <main className="page section">
      <h1>Solutions</h1>
      <p className="muted">
        Ready‑to‑execute ESG plans designed from proactive AI diagnosis and expert co‑design. Each plan ships with
        scope, budget range, timeline, KPIs, partners, and certification criteria.
      </p>
      <div style={{ height: 16 }} />
      <div className="solutions-grid">
        {plans.map((p) => (
          <article key={p.title} className="card plan-card">
            <div className="plan-card__tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p className="muted">{p.summary}</p>
            <div style={{ height: 8 }} />
            <div className="muted" style={{ fontSize: 13 }}>
              <strong>KPIs:</strong> {p.kpis.join(' · ')}<br />
              <strong>Budget:</strong> {p.budget} · <strong>Duration:</strong> {p.duration}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}


