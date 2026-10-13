import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Content. Everything on the site lives here: edit freely.
   ───────────────────────────────────────────────────────────── */
const site = {
  name: "Abhishek Adurti",
  roles: ["Data", "AI", "Product"],
  intro:
    "I build data platforms and AI products, and I’m happiest somewhere between the whiteboard and the commit. Right now I’m finishing my Master’s at Carnegie Mellon, after three years at KPMG and a summer at ZS.",
  email: "aadurti@andrew.cmu.edu",
  location: "Pittsburgh, PA",
  resume: "Abhishek_Adurti_Resume.pdf",
  github: "https://github.com/AbhishekAdurti2000",
  linkedin: "https://www.linkedin.com/in/abhishekadurti/",
  photo: "headshot.jpeg",
  hero: {
    jpg: "hero-brooklyn.jpg",
    webp: "hero-brooklyn.webp",
    alt: "The sun setting behind the Brooklyn Bridge, with the Lower Manhattan skyline across the East River",
    caption: "Brooklyn Bridge Park, New York. Shot by me.",
  },

  about: [
    "I started out as a mechanical engineer, then spent three years at KPMG building data platforms and enterprise apps for large clients. Somewhere in there I realized I cared less about how to build things and more about what to build, and why.",
    "These days I’m at Carnegie Mellon’s Heinz College, spending most of my time on AI products: RAG and agentic systems, recommendation models, and the harder question of where AI actually fits into a business.",
    "Off the clock I take photos (the one at the top is from Brooklyn Bridge Park), play tennis, and travel whenever I can. Probably all three in the same week.",
  ],
  lately: [
    { label: "Reading", value: "Continuous Discovery Habits, Teresa Torres" },
    { label: "Listening", value: "Lenny’s Podcast" },
    { label: "Playing", value: "Tennis, still grinding the serve" },
  ],

  projects: [
    {
      title: "SentinelRAG",
      when: "2026",
      desc: "An agentic RAG assistant over live GitHub data, with guardrails and evaluations that run in CI on every change.",
      stack: ["LangGraph", "Claude API", "GitHub Actions"],
      link: "https://github.com/AbhishekAdurti2000/sentinelrag",
    },
    {
      title: "Movie Recommendation Service",
      when: "Fall 2026",
      desc: "A Kafka streaming pipeline and collaborative-filtering model for a million-user service, built with my team at CMU. My model was the one we put into production.",
      stack: ["Apache Kafka", "TensorFlow", "Collaborative Filtering"],
    },
    {
      title: "CO₂ Emissions Forecasting",
      when: "2021",
      desc: "A random forest model that forecasts annual CO₂ emissions from World Bank data, with an R² of 96.8%.",
      stack: ["Python", "scikit-learn", "Pandas"],
    },
    {
      title: "Facial Expression Detection",
      when: "2021",
      desc: "A deep convolutional network that recognizes seven emotions with 86.6% accuracy on FER-2013.",
      stack: ["Python", "TensorFlow", "OpenCV"],
    },
  ],

  experience: [
    {
      org: "ZS Associates",
      role: "Business Technology Solutions Associate Consultant Intern",
      where: "Princeton, NJ",
      when: "Jun – Aug 2026",
      desc: "Took a global pharma client from scattered requirements across six workstreams to its first fully digital reporting cycle, prototyping with GenAI along the way.",
    },
    {
      org: "KPMG",
      role: "Associate Consultant",
      where: "Gurgaon, India",
      when: "2024 – 2025",
      desc: "Built Databricks, Snowflake and Microsoft Fabric pipelines behind 100+ KPI dashboards, and owned requirements on a client-facing sustainability transformation.",
    },
    {
      org: "KPMG",
      role: "Analyst",
      where: "Gurgaon, India",
      when: "2022 – 2024",
      desc: "Shipped a distributor sales app that reached 95% adoption, automated 10,000+ monthly invoices, and built a RAG support assistant that cut token costs by 30%.",
    },
    {
      org: "KPMG",
      role: "Intern Analyst",
      where: "Gurgaon, India",
      when: "Jan – Jun 2022",
      desc: "Built a compliance approval tool that cut approval times by 90% and rolled out single sign-on for 900+ users.",
    },
    {
      org: "SKF India",
      role: "Summer Intern",
      where: "Bangalore, India",
      when: "Jul – Aug 2021",
      desc: "New product development on a charging roller assembly, from CAD to supplier and QA reviews.",
    },
  ],

  toolkit: [
    { group: "Languages", items: ["Python", "SQL", "Java", "JavaScript"] },
    { group: "Data", items: ["Databricks", "Spark", "Kafka", "Snowflake", "BigQuery", "Microsoft Fabric"] },
    { group: "AI & ML", items: ["LangGraph", "RAG", "TensorFlow", "scikit-learn"] },
    { group: "Cloud", items: ["Azure", "AWS", "GCP", "Docker"] },
    { group: "Product", items: ["Discovery & requirements", "Prototyping", "Agile / Scrum", "Jira", "Figma"] },
  ],

  quotes: [
    {
      text: "Focused and diligent, demonstrating a great work ethic by seamlessly working on multiple projects and delivering tasks on time. He went above and beyond, leading the team in feature development, code reviews, and knowledge transfer sessions.",
      name: "Gaurav Dureja",
      title: "Technical Architect, KPMG India",
    },
    {
      text: "His ability to coordinate across multiple departments and propose innovative solutions demonstrated his technical expertise, strategic thinking, and attention to detail.",
      name: "Prince Sidana",
      title: "Director, Digital Cloud Solutions, KPMG India",
    },
    {
      text: "He mentored junior developers, guided code reviews, and promoted best software practices.",
      name: "Subhajyoti Majumdar",
      title: "Senior Technical Architect, KPMG India",
    },
  ],

  education: [
    { what: "Carnegie Mellon University, MS Information Systems Management", when: "2026" },
    { what: "Vellore Institute of Technology, B.Tech Mechanical Engineering", when: "2022" },
  ],
  recognition: [
    { what: "Encore Spot Award, KPMG", when: "2024" },
    { what: "Encore Kudos Award, KPMG", when: "2024" },
    { what: "Professional Scrum Master I", when: "Scrum.org" },
    { what: "AWS Certified Cloud Practitioner", when: "AWS" },
    { what: "Azure AZ-900 · Power Platform PL-100, PL-400", when: "Microsoft" },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Pieces
   ───────────────────────────────────────────────────────────── */
function Section({ id, title, lede, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <a className="nav-name" href="#top">{site.name}</a>
        <ul className="nav-links">
          <li className="hide-sm"><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li className="hide-sm"><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="resume" href={site.resume} target="_blank" rel="noreferrer">Résumé</a></li>
        </ul>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />

      <main id="main">
        {/* Hero: a photo I took, then a short hello */}
        <header id="top" className="hero-photo">
          <picture>
            <source srcSet={site.hero.webp} type="image/webp" />
            <img src={site.hero.jpg} alt={site.hero.alt} fetchpriority="high" />
          </picture>
          <div className="hero-overlay">
            <div className="hero-inner">
              <h1 className="hero-name">{site.name}</h1>
              <p className="hero-roles" aria-label={site.roles.join(", ")}>
                {site.roles.map((r) => <span key={r}>{r}</span>)}
              </p>
            </div>
          </div>
          <p className="hero-caption">{site.hero.caption}</p>
        </header>

        <section className="hero-text" aria-label="Introduction">
          <p className="hero-intro">{site.intro}</p>
          <p className="hero-links">
            <a className="chev" href="#work">See my work</a>
            <a className="chev" href={site.resume} target="_blank" rel="noreferrer">Read my résumé</a>
            <a className="chev" href={`mailto:${site.email}`}>Say hello</a>
          </p>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="about">
            <div className="about-photo">
              <img src={site.photo} alt="Portrait of Abhishek Adurti" loading="lazy" />
            </div>
            <div>
              <div className="about-text">
                {site.about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <dl className="lately">
                {site.lately.map((l) => (
                  <div key={l.label}><dt>{l.label}</dt><dd>{l.value}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* Work */}
        <Section id="work" title="Work" lede="Things I’ve built on my own or with a small team.">
          <ul className="rows">
            {site.projects.map((p) => (
              <li className="row" key={p.title}>
                <div className="row-top">
                  <h3 className="row-title">{p.title}</h3>
                  {p.link
                    ? <a className="row-link chev" href={p.link} target="_blank" rel="noreferrer">GitHub</a>
                    : <span className="row-meta">{p.when}</span>}
                </div>
                <p className="row-desc">{p.desc}</p>
                <p className="row-stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <ul className="rows">
            {site.experience.map((e) => (
              <li className="row" key={e.org + e.role}>
                <div className="row-top">
                  <h3 className="row-title">{e.org}</h3>
                  <span className="row-meta">{e.when}</span>
                </div>
                <p className="row-sub">{e.role} · {e.where}</p>
                <p className="row-desc">{e.desc}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Toolkit */}
        <Section id="toolkit" title="Toolkit">
          <div className="toolkit">
            {site.toolkit.map((t) => (
              <div key={t.group}>
                <h3>{t.group}</h3>
                <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Kind words */}
        <Section id="kind-words" title="Kind words" lede="From people I worked with at KPMG.">
          <div className="quotes">
            {site.quotes.map((q) => (
              <figure className="quote" key={q.name}>
                <blockquote>{q.text}</blockquote>
                <figcaption>{q.name} <span>· {q.title}</span></figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Education & recognition */}
        <Section id="background" title="Background">
          <div className="pair">
            <div className="mini">
              <h3>Education</h3>
              <ul>{site.education.map((e) => <li key={e.what}><span>{e.what}</span><span>{e.when}</span></li>)}</ul>
            </div>
            <div className="mini">
              <h3>Awards &amp; certifications</h3>
              <ul>{site.recognition.map((r) => <li key={r.what}><span>{r.what}</span><span>{r.when}</span></li>)}</ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="contact-line">
            Always up for a good conversation about data, AI, or what makes a product worth building.
          </p>
          <dl className="contact-grid">
            <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={site.linkedin} target="_blank" rel="noreferrer">abhishekadurti</a></dd></div>
            <div><dt>GitHub</dt><dd><a href={site.github} target="_blank" rel="noreferrer">AbhishekAdurti2000</a></dd></div>
            <div><dt>Based in</dt><dd>{site.location}</dd></div>
          </dl>
        </Section>
      </main>

      <footer className="footer">
        <p>© {year} {site.name}. Designed and built in Pittsburgh.</p>
      </footer>
    </>
  );
}
