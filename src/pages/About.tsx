export default function About() {
  return (
    <main className="page section">
      <h1>About AiGS</h1>
      <p>
        AiGS is an AI‑powered ESG solution platform. We turn climate action into an executable product: diagnose risks,
        deliver standardized plans, monitor live KPIs, and issue verifiable certificates.
      </p>
      <div style={{ height: 24 }} />
      <section className="about-split">
        <div>
          <h2>Mission</h2>
          <p className="muted">Make ESG a growth engine — not a mandate — by lowering execution barriers with AI and productized plans.</p>
          <h2>What We Do</h2>
          <ul className="muted">
            <li>Proactive risk diagnosis from climate and socioeconomic data</li>
            <li>Ready‑to‑execute plan catalog with budgets, timelines, and KPIs</li>
            <li>Live monitoring and automated evaluation</li>
            <li>Verifiable certification and ecosystem building</li>
          </ul>
        </div>
        <div>
          <h2>Vision</h2>
          <p className="muted">Reduce climate inequality by making high‑quality action plans accessible, executable, and auditable for every organization.</p>
        </div>
      </section>

      <div style={{ height: 24 }} />
      <section className="section">
        <div className="section-head">
          <h2>Core Team</h2>
          <p className="lead">The people who will make this vision a reality.</p>
        </div>
        <div className="team-grid">
          <article className="card person-card">
            <div className="person-photo">[Founder image]</div>
            <h3>PARK GANGMIN</h3>
            <p className="muted">Founder — presents the vision and strategy, leads the team, and drives market development.</p>
          </article>
          <article className="card person-card">
            <div className="person-photo">[CTO image]</div>
            <h3>SEO JUHWAN</h3>
            <p className="muted">Chief Technology Officer — oversees AI and big‑data analytics; perfects core technologies.</p>
          </article>
        </div>
        <div style={{ height: 12 }} />
        <p className="muted">Specialist Team — develops practical implementation plans based on AI diagnosis.</p>
      </section>
    </main>
  )
}


