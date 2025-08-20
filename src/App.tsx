import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import AnimatedText from './components/AnimatedText'
import ViewportCalibrate from './components/ViewportCalibrate'
import Solutions from './pages/Solutions'
import Platform from './pages/Platform'
import About from './pages/About'
import Contact from './pages/Contact'
import HowItWorks from './components/HowItWorks'
import ImpactStats from './components/ImpactStats'
import './App.css'

function GlassNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav" id="site-header">
      <div className="nav__inner">
        <Link to="/" className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/AiGS.svg" alt="AiGS" className="brand__logo" />
          <span className="brand__name">AiGS</span>
        </Link>
        <button className="nav__toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>
        <nav className={`menu ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/" end className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Solutions</NavLink>
          <NavLink to="/platform" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Platform</NavLink>
          <NavLink to="/about" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `menu__link ${isActive ? 'is-active' : ''}`}>Contact Us</NavLink>
        </nav>
        <div className="nav__actions">
          <Link to="/contact" className="nav__cta">Contact</Link>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <AnimatedText
          as="h1"
          className="hero__title"
          lines={["Where Climate", "Action", "Meets Innovation."]}
        />
        <div className="hero__cta">
          <a href="#intro" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>Explore Solutions</a>
          <a href="#about-intro" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); document.getElementById('about-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>Learn About AiGS</a>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section id="intro" className="intro intro-narrative">
      <div className="intro__leadwrap">
        <AnimatedText
          as="p"
          className="intro__lead"
          lines={[
            'We deliver data-driven solutions',
            'and ESG certification to tackle climate inequality',
            'and shape a sustainable future',
          ]}
          delayPerLineMs={300}
          delayPerWordMs={30}
        />
      </div>
      <p className="intro__body">
        AiGS finds risks before they find you. We synthesize climate models, hazard frequency, and
        socioeconomic vulnerability to prioritize actions. Then we provide standardized, ready-to-execute
        plans, support co-editing with experts, and enable live monitoring with verifiable certification.
      </p>
      <div className="intro-links">
        <a href="/solutions" className="link">Browse Solutions</a>
        <a href="/platform" className="link">Learn about the Platform</a>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className="page">
      <Hero />
      <div className="surface">
        <IntroSection />
        <ImpactStats />
        <HowItWorks />
        <section className="cta-social" aria-hidden="true" />
        <section id="about-intro" className="section">
          <h2>What is AiGS?</h2>
          <div className="about-split">
            <div>
              <h3>Proactive, productized ESG</h3>
              <p>
                We diagnose risks before they surface and ship standardized, ready-to-execute plans. Each plan contains
                scope, budget ranges, timeline and measurable KPIs — so teams can start fast with clarity.
              </p>
            </div>
            <div>
              <h3>From plan to verifiable outcomes</h3>
              <p>
                Clients execute; we enable partner matching, live monitoring and certification. The result is transparent,
                verifiable impact that reduces climate inequality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function SolutionsPage() { return <Solutions /> }
function PlatformPage() { return <Platform /> }
function AboutPage() { return <About /> }
function ContactPage() { return <Contact /> }

export default function App() {
  return (
    <>
      <ViewportCalibrate />
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
