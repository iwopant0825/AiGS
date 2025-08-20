export default function Platform() {
	return (
		<main className="page section">
			<h1>Platform</h1>
			<div className="section-head">
				<p className="lead">Operate ESG programs end‑to‑end. Diagnose risks, deploy ready‑to‑execute plans, monitor KPIs, and certify results.</p>
			</div>
			<section className="features-grid">
				<article className="card feature">
					<h3>Plan Catalog</h3>
					<p className="muted">Browse standardized plans with scope, budget, timeline, and KPI templates.</p>
				</article>
				<article className="card feature">
					<h3>Live Monitoring</h3>
					<p className="muted">Connect data sources to track progress with automated alerts and risk prevention.</p>
				</article>
				<article className="card feature">
					<h3>Certification</h3>
					<p className="muted">Evaluation workflows and audit trails to generate verifiable ESG certificates.</p>
				</article>
			</section>
			<div style={{ height: 16 }} />
			<section className="kpis-grid">
				<div className="card stat">
					<div className="stat__value">42</div>
					<div className="stat__label">Projects Active</div>
				</div>
				<div className="card stat">
					<div className="stat__value">8</div>
					<div className="stat__label">Open Alerts</div>
				</div>
				<div className="card stat">
					<div className="stat__value">12</div>
					<div className="stat__label">Certifications In Progress</div>
				</div>
			</section>
			<div style={{ height: 16 }} />
			<section className="section">
				<h3>Recent Activity</h3>
				<ul className="timeline">
					<li>Certification review started for “Community Solar – Ward 5”.</li>
					<li>Flood retention cells Phase 1 reached 60% completion.</li>
					<li>Heat island micro‑forest planting scheduled for next week.</li>
				</ul>
			</section>
		</main>
	)
}


