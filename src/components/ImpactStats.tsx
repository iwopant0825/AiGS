import CountUp from './CountUp'

export default function ImpactStats() {
  const stats = [
    { value: 500, suffix: '+', label: 'Projects Monitored' },
    { value: 95, suffix: '%', label: 'Risk Detection Rate' },
    { value: 50, prefix: '$', suffix: 'M+', label: 'ESG Investment Tracked' },
  ]
  return (
    <section className="section">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="card stat">
            <div className="stat__value">
              <CountUp to={s.value} prefix={s.prefix as any} suffix={s.suffix as any} />
            </div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


