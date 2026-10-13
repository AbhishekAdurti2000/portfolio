import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Content. Everything on the site lives here: edit freely.
   To add a second About photo, add another entry to aboutPhotos.
   ───────────────────────────────────────────────────────────── */
const site = {
  name: "Abhishek Adurti",
  tagline: ["builder", "photographer", "tennis player"],
  email: "aadurti@andrew.cmu.edu",
  location: "Pittsburgh, Pennsylvania",
  resume: "Abhishek_Adurti_Resume.pdf",
  github: "https://github.com/AbhishekAdurti2000",
  linkedin: "https://www.linkedin.com/in/abhishekadurti/",

  hero: {
    jpg: "hero-brooklyn.jpg",
    webp: "hero-brooklyn.webp",
    alt: "The sun setting behind the Brooklyn Bridge, with the Lower Manhattan skyline across the East River",
    credit: "Brooklyn Bridge Park, New York",
  },

  aboutPhotos: [
    { src: "headshot.jpeg", alt: "Portrait of Abhishek Adurti" },
  ],
  aboutLead:
    "I’m Abhishek. I build data platforms and AI products, take photos of the places I end up, and spend too much time on a tennis court.",
  aboutMore: [
    "Mechanical engineer turned consultant turned product person. I spent three years at KPMG building data platforms and enterprise apps, and a summer at ZS helping a global pharma client go fully digital. Somewhere in there I started caring less about how to build things and more about what to build, and why.",
    "Now I’m finishing my Master’s in Information Systems Management at Carnegie Mellon, working mostly on AI products: RAG and agentic systems, recommendation models, and where AI actually fits into a business.",
  ],

  projects: [
    {
      title: "SentinelRAG",
      desc: "Agentic RAG assistant over live GitHub data, with guardrails and evaluations that run in CI.",
      stack: "LangGraph, Claude API, GitHub Actions",
      link: "https://github.com/AbhishekAdurti2000/sentinelrag",
    },
    {
      title: "Movie Recommendation Service",
      desc: "Kafka streaming pipeline and collaborative-filtering model for a million-user service. My model went to production.",
      stack: "Apache Kafka, TensorFlow, Python",
      when: "CMU · Fall 2026",
    },
    {
      title: "CO₂ Emissions Forecasting",
      desc: "Random forest model forecasting annual CO₂ emissions from World Bank data, with an R² of 96.8%.",
      stack: "Python, scikit-learn, Pandas",
      when: "2021",
    },
    {
      title: "Facial Expression Detection",
      desc: "Deep convolutional network that recognizes seven emotions with 86.6% accuracy on FER-2013.",
      stack: "Python, TensorFlow, OpenCV",
      when: "2021",
    },
  ],

  experience: [
    {
      title: "ZS Associates",
      role: "Business Technology Solutions Associate Consultant Intern",
      desc: "Took a global pharma client from scattered requirements across six workstreams to its first fully digital reporting cycle.",
      when: "Summer 2026",
    },
    {
      title: "KPMG",
      role: "Associate Consultant",
      desc: "Databricks, Snowflake and Microsoft Fabric pipelines behind 100+ KPI dashboards; owned requirements on a client-facing sustainability transformation.",
      when: "2024 – 2025",
    },
    {
      title: "KPMG",
      role: "Analyst",
      desc: "Shipped a distributor sales app with 95% adoption, automated 10,000+ monthly invoices, and built a RAG support assistant.",
      when: "2022 – 2024",
    },
    {
      title: "KPMG",
      role: "Intern Analyst",
      desc: "Built a compliance approval tool that cut approval times by 90%.",
      when: "2022",
    },
  ],

  languages: ["Python", "SQL", "Java", "JavaScript", "C++"],
  skills: [
    { group: "Data", items: ["Databricks", "Apache Spark", "Apache Kafka", "Snowflake", "BigQuery", "Microsoft Fabric"] },
    { group: "AI & ML", items: ["LangGraph", "RAG", "TensorFlow", "scikit-learn", "OpenCV"] },
    { group: "Cloud", items: ["Azure", "AWS", "GCP", "Docker", "Azure DevOps"] },
    { group: "Product", items: ["Discovery & requirements", "Prototyping", "Agile / Scrum", "Jira", "Figma"] },
  ],

  quotes: [
    {
      text: "He went above and beyond, leading the team in feature development, code reviews, and knowledge transfer sessions.",
      name: "Gaurav Dureja",
      title: "Technical Architect, KPMG India",
    },
    {
      text: "His ability to coordinate across multiple departments and propose innovative solutions demonstrated his technical expertise, strategic thinking, and attention to detail.",
      name: "Prince Sidana",
      title: "Director, Digital Cloud Solutions, KPMG India",
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav${show ? " show" : ""}`} aria-label="Primary">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li className="hide-sm"><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default function Portfolio() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav />

      {/* Hero */}
      <header className="hero">
        <picture>
          <source srcSet={site.hero.webp} type="image/webp" />
          <img src={site.hero.jpg} alt={site.hero.alt} fetchpriority="high" />
        </picture>
        <div className="hero-text">
          <h1>{site.name}</h1>
          <p>{site.tagline.join(" · ")}</p>
        </div>
        <a className="hero-down" href="#about" aria-label="Scroll to About">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
        <p className="hero-credit">{site.hero.credit}</p>
      </header>

      <main>
        {/* About */}
        <section id="about" className="section">
          <div className="about">
            <div className="about-photos">
              {site.aboutPhotos.map((p) => (
                <figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" /></figure>
              ))}
            </div>
            <div className="about-copy">
              <p className="lead">{site.aboutLead}</p>
              {site.aboutMore.map((t, i) => <p className="more" key={i}>{t}</p>)}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section">
          <div className="col">
            <h2>Work</h2>

            <div className="group">
              <h3 className="sub">Projects</h3>
              {site.projects.map((p) => (
                <div className="item" key={p.title}>
                  <div className="item-top">
                    <span className="item-title">{p.title}</span>
                    {p.link
                      ? <a className="item-link" href={p.link} target="_blank" rel="noreferrer">GitHub</a>
                      : <span className="item-when">{p.when}</span>}
                  </div>
                  <p className="item-desc">{p.desc}</p>
                  <p className="item-meta">{p.stack}</p>
                </div>
              ))}
            </div>

            <div className="group">
              <h3 className="sub">Experience</h3>
              {site.experience.map((e) => (
                <div className="item" key={e.title + e.role}>
                  <div className="item-top">
                    <span className="item-title">{e.title}</span>
                    <span className="item-when">{e.when}</span>
                  </div>
                  <p className="item-role">{e.role}</p>
                  <p className="item-desc">{e.desc}</p>
                </div>
              ))}
              <p className="item-meta" style={{ marginTop: 20 }}>
                <a className="item-link" href={site.resume} target="_blank" rel="noreferrer">Full résumé →</a>
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="col">
            <h2>Skills</h2>
            <div className="langs">{site.languages.map((l) => <span key={l}>{l}</span>)}</div>
            <div className="skill-groups">
              {site.skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kind words */}
        <section id="kind-words" className="section">
          <div className="col">
            <h2>Kind words</h2>
            {site.quotes.map((q) => (
              <figure className="quote" key={q.name}>
                <blockquote>“{q.text}”</blockquote>
                <figcaption><b>{q.name}</b> · {q.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="col">
            <p className="label">Say hello.</p>
            <dl>
              <div><dt>Location</dt><dd>{site.location}</dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>GitHub</dt><dd><a href={site.github} target="_blank" rel="noreferrer">github.com/AbhishekAdurti2000</a></dd></div>
              <div><dt>LinkedIn</dt><dd><a href={site.linkedin} target="_blank" rel="noreferrer">Abhishek Adurti</a></dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {year} {site.name}. Photos by me.</p>
      </footer>
    </>
  );
}
