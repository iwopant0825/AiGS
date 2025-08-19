import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AnimatedText from './components/AnimatedText'
import ViewportCalibrate from './components/ViewportCalibrate'
import Solutions from './pages/Solutions'
import HowItWorks from './components/HowItWorks'
import ImpactStats from './components/ImpactStats'
import './App.css'

function GlassNav() {
  return (
    <header className="nav" id="site-header">
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
        <AnimatedText
          as="h1"
          className="hero__title"
          lines={["Where Climate Action", "Meets Innovation."]}
        />
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
      <IntroSection />
      <ImpactStats />
      <HowItWorks />
      <section className="cta-social">
        <a className="ig-btn" href="https://www.instagram.com/aigs_official1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
          <svg className="ig-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
          Visit Instagram
        </a>
        <div className="cta-note">Find more updates on @aigs_official1</div>
      </section>
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

function SolutionsPage() { return <Solutions /> }

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
