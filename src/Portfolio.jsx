import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Content. Everything on the site lives here: edit freely.
   ───────────────────────────────────────────────────────────── */
const site = {
  name: "Abhishek Adurti",
  line: "I build data and AI products, and take photos of the places I end up.",
  email: "aadurti@andrew.cmu.edu",
  location: "Pittsburgh, PA",
  resume: "Abhishek_Adurti_Resume.pdf",
  github: "https://github.com/AbhishekAdurti2000",
  linkedin: "https://www.linkedin.com/in/abhishekadurti/",

  hero: {
    jpg: "hero-brooklyn.jpg",
    webp: "hero-brooklyn.webp",
    alt: "The sun setting behind the Brooklyn Bridge, with the Lower Manhattan skyline across the East River",
    place: "Brooklyn Bridge Park, New York",
    coords: "40.70° N, 73.99° W",
  },

  photo: { src: "headshot.jpeg", alt: "Portrait of Abhishek Adurti" },
  aboutLead:
    "Mechanical engineer turned consultant turned product person. These days I’m mostly thinking about where AI actually fits into a business.",
  about: [
    "I spent three years at KPMG building data platforms and enterprise apps for large clients, and a summer at ZS helping a global pharma client run its reporting fully digital for the first time. Somewhere in there I started caring less about how to build things and more about what to build, and why.",
    "Now I’m finishing my Master’s in Information Systems Management at Carnegie Mellon, working on RAG and agentic systems, recommendation models, and the product decisions around them.",
  ],
  notes: [
    { k: "Shooting", v: "Wherever I travel next" },
    { k: "Playing", v: "Tennis, still grinding the serve" },
    { k: "Reading", v: "Continuous Discovery Habits, Teresa Torres" },
  ],

  projects: [
    {
      when: "2026",
      title: "SentinelRAG",
      desc: "Agentic RAG assistant over live GitHub data, with guardrails and evaluations that run in CI.",
      stack: "LangGraph · Claude API · GitHub Actions",
      link: "https://github.com/AbhishekAdurti2000/sentinelrag",
    },
    {
      when: "2026",
      title: "Movie Recommendation Service",
      desc: "Kafka streaming pipeline and collaborative-filtering model for a million-user service, built with my team at CMU. My model went to production.",
      stack: "Apache Kafka · TensorFlow · Python",
    },
    {
      when: "2021",
      title: "CO₂ Emissions Forecasting",
      desc: "Random forest model forecasting annual CO₂ emissions from World Bank data, with an R² of 96.8%.",
      stack: "Python · scikit-learn · Pandas",
    },
    {
      when: "2021",
      title: "Facial Expression Detection",
      desc: "Deep convolutional network that recognizes seven emotions with 86.6% accuracy on FER-2013.",
      stack: "Python · TensorFlow · OpenCV",
    },
  ],

  experience: [
    {
      when: "2026",
      title: "ZS Associates",
      role: "Business Technology Solutions Associate Consultant Intern",
      desc: "Took a global pharma client from scattered requirements across six workstreams to its first fully digital reporting cycle.",
    },
    {
      when: "2024–25",
      title: "KPMG",
      role: "Associate Consultant",
      desc: "Databricks, Snowflake and Microsoft Fabric pipelines behind 100+ KPI dashboards; owned requirements on a client-facing sustainability transformation.",
    },
    {
      when: "2022–24",
      title: "KPMG",
      role: "Analyst",
      desc: "Shipped a distributor sales app with 95% adoption, automated 10,000+ monthly invoices, and built a RAG support assistant.",
    },
    {
      when: "2022",
      title: "KPMG",
      role: "Intern Analyst",
      desc: "Built a compliance approval tool that cut approval times by 90%.",
    },
  ],

  skills: [
    { k: "Languages", v: "Python, SQL, Java, JavaScript, C++" },
    { k: "Data", v: "Databricks, Apache Spark, Apache Kafka, Snowflake, BigQuery, Microsoft Fabric" },
    { k: "AI & ML", v: "LangGraph, RAG, TensorFlow, scikit-learn, OpenCV" },
    { k: "Cloud", v: "Azure, AWS, GCP, Docker, Azure DevOps" },
    { k: "Product", v: "Discovery and requirements, prototyping, Agile / Scrum, Jira, Figma" },
  ],

  quotes: [
    {
      text: "He went above and beyond, leading the team in feature development, code reviews, and knowledge transfer sessions.",
      who: "Gaurav Dureja, Technical Architect, KPMG India",
    },
    {
      text: "His ability to coordinate across multiple departments and propose innovative solutions demonstrated his technical expertise, strategic thinking, and attention to detail.",
      who: "Prince Sidana, Director, Digital Cloud Solutions, KPMG India",
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Pieces
   ───────────────────────────────────────────────────────────── */
function Bar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`bar${solid ? " solid" : ""}`} aria-label="Primary">
      <div className="bar-inner">
        <a className="bar-name" href="#top">AA</a>
        <ul>
          <li><a href="#work">Work</a></li>
          <li className="hide-sm"><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={site.resume} target="_blank" rel="noreferrer">Résumé</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <div className="section-inner">
        <div className="rail"><h2 id={`${id}-h`}>{title}</h2></div>
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

function Index({ rows }) {
  return (
    <ul className="index">
      {rows.map((r) => (
        <li key={r.title + (r.role || "")}>
          <span className="when">{r.when}</span>
          <div>
            <div className="title">{r.title}</div>
            {r.role && <div className="role">{r.role}</div>}
            <p className="desc">{r.desc}</p>
            {r.stack && <p className="stack">{r.stack}</p>}
          </div>
          {r.link
            ? <a className="go gold" href={r.link} target="_blank" rel="noreferrer">GitHub ↗</a>
            : <span />}
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const year = new Date().getFullYear();
  return (
    <>
      <a className="skip" href="#work">Skip to content</a>
      <Bar />

      <header id="top" className="hero">
        <picture>
          <source srcSet={site.hero.webp} type="image/webp" />
          <img src={site.hero.jpg} alt={site.hero.alt} fetchpriority="high" />
        </picture>
        <div className="hero-copy">
          <div>
            <div>
              <h1>{site.name}</h1>
              <p className="hero-line">{site.line}</p>
            </div>
            <p className="hero-meta">{site.hero.place}<br />{site.hero.coords}</p>
          </div>
        </div>
      </header>

      <main>
        <Section id="work" title="Work">
          <p className="sub">Projects</p>
          <Index rows={site.projects} />
          <p className="sub">Experience</p>
          <Index rows={site.experience} />
        </Section>

        <Section id="about" title="About">
          <p className="about-lead">{site.aboutLead}</p>
          <div className="about-grid">
            <figure><img src={site.photo.src} alt={site.photo.alt} loading="lazy" /></figure>
            <div className="about-text">
              {site.about.map((t, i) => <p key={i}>{t}</p>)}
              <dl className="notes">
                {site.notes.map((n) => <div key={n.k}><dt>{n.k}</dt><dd>{n.v}</dd></div>)}
              </dl>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Toolkit">
          <dl className="skills">
            {site.skills.map((s) => <div key={s.k}><dt>{s.k}</dt><dd>{s.v}</dd></div>)}
          </dl>
        </Section>

        <Section id="kind-words" title="Kind words">
          {site.quotes.map((q) => (
            <figure className="quote" key={q.who}>
              <blockquote>“{q.text}”</blockquote>
              <figcaption>{q.who}</figcaption>
            </figure>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-line">Always up for a good conversation about data, AI, or what makes a product worth building.</p>
          <a className="contact-mail gold" href={`mailto:${site.email}`}>{site.email}</a>
          <p className="contact-links">
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={site.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
            <span>{site.location}</span>
          </p>
        </Section>
      </main>

      <footer className="footer">
        <p><span>© {year} {site.name}</span><span>Words and photographs by me.</span></p>
      </footer>
    </>
  );
}
