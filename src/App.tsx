import { useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  HeartPulse,
  Instagram,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const creatorTypes = [
  { title: 'Wellness & fitness', text: 'Routines, recovery, and what actually helped.', icon: HeartPulse },
  { title: 'Beauty & skin', text: 'Care that connects to real health, not just products.', icon: Sparkles },
  { title: 'Family & caregiving', text: 'Helping parents, partners, and loved ones find their next step every day.', icon: Users },
  { title: 'Mental health', text: 'Lived experience and honest nervous-system care.', icon: ShieldCheck },
];

const faqs = [
  ['What is Careverse?', 'Careverse is an AI-powered care platform from Care Access PBC. It helps people find, compare, and book trusted care across everyday health, mental health, family care, wellness, and more — so care feels coordinated instead of chaotic.'],
  ['How do I join the Creator Network?', 'Click Apply, submit your public channel and a short note about the care stories you share. If you’re a fit, we’ll onboard you and open your affiliate link.'],
  ['What do I need to become a Careverse creator?', 'Authentic health, wellness, beauty, fitness, or caregiving content, plus at least one active public channel. No follower minimum. You do not need a medical license.'],
  ['How will I know when I make a sale?', 'You’ll get an email on each qualified conversion. Full referral, sales, and commission stats live in your affiliate dashboard.'],
  ['Can I give medical advice?', 'No. Share your experience and point people to Careverse. Don’t diagnose, promise outcomes, or tell anyone to start or stop treatment.'],
  ['What can’t I promote?', 'No fake reviews, buying engagement, claiming Careverse replaces a doctor, or targeting people in a medical crisis with scare tactics.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  const handleRingTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('.hero-tile') as HTMLElement | null;
    if (!target) return;
    const wasActive = target.classList.contains('is-active');
    ringRef.current?.querySelectorAll('.hero-tile.is-active').forEach((el) => el.classList.remove('is-active'));
    if (!wasActive) target.classList.add('is-active');
  };

  return (
    <div className="page-wash">
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Careverse home">
            <span className="brand-mark"><img src="/careverse_logo_(1).png" alt="Careverse" /></span>
            <span>careverse<span className="brand-dot">.</span></span>
          </a>
          <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why join</a>
            <a href="#who" onClick={() => setMenuOpen(false)}>Who it’s for</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="button button-small" href="https://careverse-creator-application.vercel.app/" onClick={() => setMenuOpen(false)}>Apply to join <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-eyebrow-banner reveal"><span className="eyebrow-line" /> Careverse Creator Network <span className="eyebrow-line" /></div>
          <div className="hero-copy reveal">
            <div className="hero-top">
              <h1>Earn by <span className="mark">helping people find care</span></h1>
            </div>
            <div className="hero-bottom">
              <p className="lede">Careverse helps people find, compare, and book trusted care — medical, mental health, wellness, family care, and more — in one calm place.</p>
              <div className="hero-actions">
                <a className="button" href="https://careverse-creator-application.vercel.app/">Apply to join <ArrowRight size={17} /></a>
                <a className="button btn-ghost-light" href="#how">See how it works</a>
              </div>
              <p className="fine"><Check size={15} /> No follower minimum.</p>
            </div>
            <p className="hero-commission-line">You earn <span className="commission-highlight">25%</span> when someone converts through your link.</p>
          </div>
          <div className="hero-tile-ring" aria-label="Careverse care categories" ref={ringRef} onClick={handleRingTap}>
            <figure className="hero-tile hero-tile-elderly"><img src="/images/image copy 7.png" alt="Elderly caregiving" /></figure>
            <figure className="hero-tile hero-tile-family"><img src="/images/image copy 8.png" alt="Child and family caregiving" /></figure>
            <figure className="hero-tile hero-tile-fitness"><img src="/image.png" alt="Fitness and wellness" /></figure>
            <figure className="hero-tile hero-tile-beauty"><img src="/images/image copy 10.png" alt="Beauty and skincare" /></figure>
            <figure className="hero-tile hero-tile-pet"><img src="/images/image copy 11.png" alt="Pet care" /></figure>
            <figure className="hero-tile hero-tile-aesthetic"><img src="/images/image copy 12.png" alt="Med spa and aesthetic treatment" /></figure>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-items">
            <span className="trust-label">Built by Care Access PBC</span>
            <span><i /> Find, compare & book trusted care</span>
            <span><i /> HIPAA-ready, consent-based architecture</span>
            <span><i /> Human-centered. Not another supplement pitch.</span>
          </div>
        </section>

        <section className="section story-section" id="why">
          <div className="container story-grid">
            <div className="section-intro reveal">
              <div className="eyebrow">Why creators matter</div>
              <h2>People are feeling lost between providers.</h2>
              <p>Finding a provider is only the first step. Coverage, cost, the right specialist, the follow-up, care for a parent or a kid — the handoffs are where people get stuck.</p>
              <p>Careverse is built to bring a calm, coordinated, human touch to the healthcare system. As a creator with an audience and the ability to speak to their health problems, we are allowing you to earn when you help them find solutions.</p>
            </div>
            <div className="pillar-stack">
              <article className="pillar-card reveal reveal-delay-1"><span className="pillar-number">01</span><div><h3>Earn from care you already recommend</h3><p>Get a unique link. Earn a commission when someone completes a qualified purchase or booking.</p></div></article>
              <article className="pillar-card reveal reveal-delay-2"><span className="pillar-number">02</span><div><h3>Join the Careverse</h3><p>Be an early voice in a global care movement — with branded assets, community, and a mission to make care easier for everyone.</p></div></article>
              <article className="pillar-card reveal reveal-delay-3"><span className="pillar-number">03</span><div><h3>Help build better care tools</h3><p>Founding creators help shape the journeys, language, and tools people actually need.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section creators-section" id="who">
          <div className="container">
            <div className="center-intro reveal"><div className="eyebrow">Who we’re looking for</div><h2>Made for people who share care in public.</h2><p>We want creators who can talk about healthcare realities.</p></div>
            <div className="creator-grid">
              {creatorTypes.map(({ title, text, icon: Icon }, index) => <article className={`creator-card reveal reveal-delay-${(index % 3) + 1}`} key={title}><span className="creator-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <article className="commission-card reveal">
              <h3>How you earn</h3>
              <p className="commission-main">You earn <span className="commission-highlight">25%</span> on every user who converts.</p>
              <p className="commission-sub">If they click today and convert any time in the next 90 days, you still earn.</p>
            </article>
            <article className="apply-card reveal">
              <img src="/images/image copy 5.png" alt="Creator filming a care story at home" />
              <div className="apply-card-copy">
                <span className="live-pill">Apply to the Careverse Creator Network</span>
                <h3>Make care easier to find.</h3>
                <p>If you are active on socials and talk about health, wellness, beauty, fitness, or caregiving, we want to hear from you. Authenticity matters more than follower count.</p>
                <a className="button apply-card-button" href="https://careverse-creator-application.vercel.app/">Apply to join <ArrowRight size={18} /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="section how-section" id="how">
          <div className="container">
            <div className="center-intro reveal"><div className="eyebrow">Simple by design</div><h2>Join the Careverse creator network today</h2><p>You’re sharing access to care. No medical license required.</p></div>
            <div className="steps-grid">
              <article className="step-card reveal reveal-delay-1"><span className="step-number">01</span><div className="step-visual"><div className="form-window"><div className="fake-bar" /><div className="fake-line wide" /><div className="fake-line" /><div className="fake-line short" /><div className="fake-button" /></div></div><h3>Apply</h3><p>Tell us where you create and what care stories you share. Takes a few minutes.</p></article>
              <article className="step-card reveal reveal-delay-2"><span className="step-number">02</span><div className="step-visual approve-visual"><div className="approve-badge"><Check size={40} /></div></div><h3>Get approved</h3><p>Our team will review your eligibility</p></article>
              <article className="step-card reveal reveal-delay-3"><span className="step-number">03</span><div className="step-visual phone-visual"><div className="phone"><div className="phone-top" /><div className="phone-logo"><HeartPulse size={12} /> careverse</div><div className="phone-title">Find your next<br />step in care.</div><div className="phone-search">Search care <span>⌕</span></div></div></div><h3>Get onboarded</h3><p>Get your affiliate link, creative assets, and a dashboard</p></article>
              <article className="step-card reveal reveal-delay-4"><span className="step-number">04</span><div className="step-visual creator-visual"><img src="/images/image copy.png" alt="Creator sharing an honest care story" /></div><h3>Share and earn</h3><p>Create content that drives paid users and get rewarded.</p></article>
            </div>
          </div>
        </section>

        <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow">Make care easier to find</div><h2 className="cta-steps">Step 1: Help people find care.<br />Step 2: Earn</h2><p>Early applicants get founding-creator assets.</p></div><a className="button" href="https://careverse-creator-application.vercel.app/">Apply to the Creator Network <ArrowRight size={17} /></a></div></section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid"><div className="faq-heading"><div className="eyebrow">The details</div><h2>Good questions deserve clear answers.</h2><p>Still curious? Reach the creator team at <a href="mailto:email@careverse.ai">email@careverse.ai</a>.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span><ChevronDown size={18} /></span></summary><p>{answer}</p></details>)}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a className="brand brand-light" href="#top"><span className="brand-mark"><img src="/careverse_logo_(1).png" alt="Careverse" /></span><span>careverse<span className="brand-dot">.</span></span></a><p>Care, made easier to find.</p></div><div className="footer-apply"><span>Build the next chapter of care.</span><a className="button button-small" href="https://careverse-creator-application.vercel.app/">Apply to join <ArrowRight size={16} /></a></div></div><div className="container footer-bottom"><span>Careverse™ by Care Access PBC</span><div><a href="#faq">Privacy</a><a href="#faq">Terms</a><a href="#faq">Creator guidelines</a><a href="mailto:email@careverse.ai">Contact</a></div><span className="footer-social"><Instagram size={16} /> @careverse.ai</span></div></footer>
    </div>
  );
}

export default App;
