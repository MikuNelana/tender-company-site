import { useEffect, useState } from 'react';
import './App.css';

const services = [
  {
    number: '01',
    title: 'Project Management',
    description:
      'Planning, coordination and delivery of projects from initiation to completion.',
  },
  {
    number: '02',
    title: 'Technical Services',
    description:
      'Practical technical support and solutions tailored to project requirements.',
  },
  {
    number: '03',
    title: 'Maintenance & Support',
    description:
      'Reliable maintenance and ongoing support to keep operations running smoothly.',
  },
];

const projects = [
  {
    category: 'PROJECT DELIVERY',
    title: 'Infrastructure Development',
    description:
      'Coordinated project delivery with a focus on quality, timelines and accountability.',
  },
  {
    category: 'TECHNICAL SERVICES',
    title: 'Technical Support Solutions',
    description:
      'Practical solutions designed around client requirements and operational needs.',
  },
];

function App() {

  const [showBackToTop, setShowBackToTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 300);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">A</span>
          <span>
            <strong>APEX</strong>
            <small>PROJECTS</small>
          </span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">Contact us ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">PROJECTS · PEOPLE · PROGRESS</p>
            <h1>Building solutions.<br />
              <span>Delivering results.</span>
            </h1>
            <p className="hero-description">
              We partner with organisations to deliver practical,
              dependable project solutions — from planning to completion.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our services ↗
              </a>
              <a className="button button-secondary" href="#about">
                Discover our company
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              A dependable partner for your next project
            </div>
          </div>

          <div className="hero-visual" aria-label="Project delivery illustration">
            <div className="visual-topline">
              <span>OUR APPROACH</span>
              <span>01 — 03</span>
            </div>
            <div className="visual-symbol">A<span>.</span></div>
            <div className="visual-bottom">
              <span>PLAN WITH PURPOSE</span>
              <span>DELIVER WITH CONFIDENCE</span>
            </div>
          </div>

          <div className="hero-index">01 / BUILT AROUND YOUR GOALS</div>
        </section>

        <section className="intro section" id="about">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2>Good projects start<br />with the right partner.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Apex Projects is a project-focused company committed to
              dependable service, clear communication and quality delivery.
              We work to understand each client's needs and develop solutions
              that fit their objectives.
            </p>
            <a className="text-link" href="#contact">Let's work together ↗</a>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Services built around<br />your objectives.</h2>
            </div>
            <p>Flexible solutions. Clear communication.<br />A focus on delivery.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <div className="card-arrow">↗</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED CAPABILITIES</p>
              <h2>Focused on getting<br />the work done.</h2>
            </div>
            <p>Every project is an opportunity to<br />build trust and deliver value.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art project-art-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div className="project-art-lines"></div>
                  <strong>APEX<span>.</span></strong>
                </div>
                <div className="project-info">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Illustrative examples only. Replace these with the company's
            actual projects and verified experience before publication.
          </p>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make progress<br />together.</h2>
          <p>Tell us about your requirements and let's start a conversation.</p>
          <a className="button button-light" href="mailto:info@example.com">
            Email our team ↗
          </a>
          <small>Temporary contact address — update before launch.</small>
        </section>
      </main>

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          aria-label="Back to top"
          title="Back to top"
        >
            ↑
      </button>
)}

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">A</span>
          <span><strong>APEX</strong><small>PROJECTS</small></span>
        </a>
        <p>Built on trust. Focused on delivery.</p>
        <span>© {new Date().getFullYear()} Apex Projects</span>
      </footer>
    </>
  );
}

export default App;
