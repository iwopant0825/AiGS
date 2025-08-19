export default function Footer() {
  const igUrl = 'https://www.instagram.com/aigs_official1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__brand">
            <img src="/AiGS.svg" alt="AiGS" className="brand__logo" />
            <span className="brand__name">AiGS</span>
          </div>
          <p className="footer__tagline">Choose impact. Build a sustainable future with AiGS.</p>
          <p className="footer__updates">
            Find more updates on <a href={igUrl} target="_blank" rel="noreferrer" className="footer__link">@aigs_official1</a>
          </p>
          <a className="ig-btn ig-btn--sm" href={igUrl} target="_blank" rel="noreferrer">
            <svg className="ig-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
            Visit Instagram
          </a>
        </div>
        <div className="footer__right">
          <nav className="footer__nav">
            <a href="/" className="footer__link">Home</a>
            <span className="dot">·</span>
            <a href="/solutions" className="footer__link">Solutions</a>
            <span className="dot">·</span>
            <a href="/platform" className="footer__link">Platform</a>
            <span className="dot">·</span>
            <a href="/about" className="footer__link">About Us</a>
            <span className="dot">·</span>
            <a href="/contact" className="footer__link">Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">© {new Date().getFullYear()} AiGS. All rights reserved.</div>
    </footer>
  )
}


