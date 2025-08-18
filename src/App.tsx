import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function GlassNav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand">
          <img src="/AiGS.svg" alt="AiGS" className="brand__logo" />
          <span className="brand__name">AiGS</span>
        </Link>
        <nav className="menu">
          <NavLink to="/" end className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Solutions</NavLink>
          <NavLink to="/platform" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Platform</NavLink>
          <NavLink to="/about" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <h1 className="hero__title">Where Climate Action Meets Innovation.</h1>
        <div className="hero__cta">
          <a href="#intro" className="btn btn--primary">Explore Solutions</a>
          <a href="#about-intro" className="btn btn--ghost">Learn About AiGS</a>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section id="intro" className="intro">
      <p className="intro__lead">We deliver data-driven solutions and ESG certification to tackle climate inequality and shape a sustainable future</p>
      <div className="intro__grid">
        <div className="intro__item">Proactive risk detection with AI-driven insights</div>
        <div className="intro__item">Ready-to-execute ESG plans tailored to your context</div>
        <div className="intro__item">Live monitoring, evaluation, and verifiable certification</div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className="page">
      <Hero />
      <IntroSection />
      <section id="about-intro" className="section">
        <h2>What is AiGS?</h2>
        <p>
          AiGS finds risks before they find you—then delivers a ready-to-execute plan, live monitoring, and verifiable
          certification. We combine climate models, socioeconomic data, and on-the-ground signals to prioritize actions that
          matter most.
        </p>
      </section>
    </main>
  )
}

function SolutionsPage() {
  return (
    <main className="page section">
      <h1>Solutions</h1>
      <p>Browse standardized ESG plans across mitigation, adaptation, and social equity. Coming soon.</p>
    </main>
  )
}

function PlatformPage() {
  return (
    <main className="page section">
      <h1>Platform</h1>
      <p>Sign in to access dashboards, live KPIs, and certification workflows. Placeholder for now.</p>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="page section">
      <h1>About Us</h1>
      <p>
        We are building an AI-powered ESG platform to reduce climate inequality by making high-quality action plans
        accessible and verifiable.
      </p>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="page section">
      <h1>Contact Us</h1>
      <p>Email: hello@aigs.example</p>
    </main>
  )
}

export default function App() {
  return (
    <>
      <GlassNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
