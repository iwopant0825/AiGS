export default function Solutions() {
  return (
    <main className="page section">
      <h1>Solutions</h1>
      <div style={{ height: 8 }} />
      <p>
        Explore our catalog of ready-to-execute ESG plans. Each plan includes objectives, budget ranges,
        measurable KPIs, partners, and certification criteria.
      </p>
      <div style={{ height: 24 }} />
      <div className="solutions-grid">
        {[
          { title: 'Urban Heat Island Mitigation', tag: 'Mitigation' },
          { title: 'Flood-Resilient Infrastructure', tag: 'Adaptation' },
          { title: 'Community Solar for Low-income', tag: 'Equity' },
        ].map((s, i) => (
          <article key={i} className="card plan-card">
            <div className="plan-card__tag">{s.tag}</div>
            <h3>{s.title}</h3>
            <p className="muted">Includes site selection, cost model, timeline, and KPI definitions.</p>
          </article>
        ))}
      </div>
    </main>
  )
}


