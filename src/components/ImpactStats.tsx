export default function ImpactStats() {
  const stats = [
    { value: '500+', label: 'Projects Monitored' },
    { value: '95%', label: 'Risk Detection Rate' },
    { value: '$50M+', label: 'ESG Investment Tracked' },
  ]
  return (
    <section className="section">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="card stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


