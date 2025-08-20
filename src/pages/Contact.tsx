export default function Contact() {
  return (
    <main className="page section">
      <h1>Contact Us</h1>
      <p>Email: hello@aigs.example</p>
      <section className="about-split">
        <div>
          <h2>Core Team</h2>
          <p className="muted">The people who will make this vision a reality.</p>
          <div className="card" style={{ padding: 16 }}>
            <h3>PARK GANGMIN — Founder</h3>
            <p className="muted">Presents the vision and strategy for the business and leads the team. Leverages experience in IT and business development to pioneer markets and drive growth.</p>
            <div style={{ height: 8 }} />
            <h3>SEO JUHWAN — Chief Technology Officer</h3>
            <p className="muted">Oversees the development of AI and big‑data analytics technologies. Responsible for perfecting the core technologies of this business and enhancing the system.</p>
          </div>
        </div>
        <div>
          <h2>Team Images</h2>
          <div className="card" style={{ height: 280, display: 'grid', placeItems: 'center' }}>
            <span className="muted">[CEO/CTO photos placeholder]</span>
          </div>
        </div>
      </section>
      <div style={{ height: 16 }} />
      <section className="section">
        <div className="section-head">
          <h2>Get in touch</h2>
          <p className="lead">Tell us about your project. We’ll get back within 24–48 hours.</p>
        </div>
        <form className="card" style={{ padding: 16, display: 'grid', gap: 12 }} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea placeholder="Message" rows={4} className="input" />
          <button className="btn btn--primary" type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}


