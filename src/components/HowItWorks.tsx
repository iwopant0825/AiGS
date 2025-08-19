import Reveal from './Reveal'

export default function HowItWorks() {
  const steps = [
    {
      no: '01',
      title: 'Proactive Analysis & Plan Development',
      body:
        'Our AI analyzes climate models, hazard frequency, and socioeconomic vulnerability to diagnose risks and generate standardized, ready-to-execute ESG plans.',
    },
    {
      no: '02',
      title: 'Purchase & Co-editing with Experts',
      body:
        'Organizations purchase a plan and co-edit it with our domain experts to fit budget, capability, and goals — increasing ownership and feasibility.',
    },
    {
      no: '03',
      title: 'Execution with Transparent Evaluation',
      body:
        'Clients lead execution. We match partners and provide live monitoring to evaluate progress against the plan and mitigate emerging risks.',
    },
    {
      no: '04',
      title: 'Certification & Ecosystem Building',
      body:
        'Upon completion, we issue verifiable ESG certificates and foster a community where success stories and knowledge circulate for sustained impact.',
    },
  ]

  return (
    <section className="section section--loose">
      <h2>How AiGS Works</h2>
      <div className="hiw-grid">
        {steps.map((s, i) => (
          <Reveal key={s.no} delayMs={i * 100}>
            <article className="card hiw-card">
              <div className="hiw-card__no">{s.no}</div>
              <h3 className="hiw-card__title">{s.title}</h3>
              <p className="muted">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}


