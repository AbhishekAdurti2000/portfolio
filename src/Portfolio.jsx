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

  // Photos of me, shown as a strip in About. Each has a webp and a jpg.
  // `focus` sets which part of the photo stays in frame when it is cropped.
  photos: [
    { name: "me-hudson", alt: "Abhishek leaning on the railing by the Hudson River at night, the Jersey City skyline lit up behind him", caption: "Hudson River, New York", focus: "58% 45%" },
    { name: "me-run", alt: "Abhishek holding up a finisher’s medal after the Great Race, with the Pittsburgh skyline behind him", caption: "After the Great Race, Pittsburgh", focus: "50% 60%" },
    { name: "me-cmu", alt: "Abhishek standing in front of the large Carnegie Mellon University lettering on a wooden wall", caption: "Carnegie Mellon, Pittsburgh", focus: "0% 50%", wide: true },
  ],
  aboutLead:
    "I’m Abhishek. I build data and AI products, run when I can, and take photos of the places I end up.",
  about: [
    "I started out as a mechanical engineer, then spent three years at KPMG building data platforms and enterprise apps for large clients, and a summer at ZS helping a global pharma client run its reporting fully digital for the first time. Somewhere in there I started caring less about how to build things and more about what to build, and why.",
    "Now I’m finishing my Master’s in Information Systems Management at Carnegie Mellon, working on RAG and agentic systems, recommendation models, and the product decisions around them.",
  ],
  notes: [
    { k: "Running", v: "Pittsburgh’s Great Race, and whatever’s next" },
    { k: "Playing", v: "Tennis, still grinding the serve" },
    { k: "Shooting", v: "Cities, mostly after dark" },
    { k: "Reading", v: "Continuous Discovery Habits, Teresa Torres" },
  ],

  projects: [
    {
      when: "2024–25",
      title: "ESG Reporting System",
      tag: "Data Engineering · KPMG",
      desc: "Automated ESG metric ingestion for 100+ stakeholders, reducing manual effort by 40%.",
      stack: "Microsoft Fabric · Python · Power BI · EcoVadis API · RBAC",
      context: "Large enterprises needed a centralized, automated way to collect, transform, and report ESG metrics for CSRD compliance. Manual processes were slow, error-prone, and couldn’t scale across business units.",
      role: "Led the end-to-end design and development as Associate Consultant at KPMG. Owned the data pipeline architecture, stakeholder demos, and Power BI dashboard design.",
      features: [
        "Multi-layer data pipeline with automated ingestion from 100+ stakeholders",
        "Python optimization scripts improving pipeline efficiency by 35%",
        "Power BI KPI models with 30% better reporting accuracy",
        "Role-based access control and dynamic data masking",
        "EcoVadis API integration with HRMS for 500+ records a month",
      ],
      impact: "Cut manual reporting effort by 40% and enabled real-time, CSRD-compliant sustainability analysis across the organization.",
    },
    {
      when: "2022–24",
      title: "Distributor Management App",
      tag: "Enterprise App · KPMG",
      desc: "Sales app with 95% adoption, automating 10,000+ monthly transactions.",
      stack: "Power Apps · Azure Logic Apps · Azure DevOps · SharePoint",
      context: "Distributors were managing orders by email and spreadsheets, which led to delays and errors. The client needed a mobile-first app that worked with its existing ERP systems.",
      role: "Designed and built it end to end as an Analyst at KPMG. Led design sprints and stakeholder demos, and mentored 5 developers on the project.",
      features: [
        "Mobile-responsive order management in Power Apps",
        "Automated invoicing for 10,000+ monthly transactions",
        "Azure Logic Apps workflows for approvals",
        "SharePoint integration for documents",
        "Real-time order tracking and status notifications",
      ],
      impact: "Cut order processing time by 40%, reached 95% adoption among distributors, and lifted team adoption by 80% through design sprints.",
    },
    {
      when: "2021",
      title: "CO₂ Emissions Forecasting",
      tag: "Machine Learning",
      desc: "Random forest model predicting CO₂ emissions with a 96.8% R² score.",
      stack: "Python · scikit-learn · Pandas",
      context: "Sustainability teams needed accurate emissions forecasts to plan reduction strategies, and existing estimates were manual and imprecise.",
      role: "Solo project. Designed the ML pipeline, feature engineering, model selection, and evaluation.",
      features: [
        "Preprocessing pipeline on World Bank datasets",
        "Features for temporal and regional emission patterns",
        "Random forest regression with hyperparameter tuning",
        "Cross-validation and model comparison",
        "Visualization of emissions trends",
      ],
      impact: "Reached a 96.8% R² score, giving sustainability planning an accurate, data-driven forecast.",
    },
    {
      when: "2021",
      title: "Facial Expression Detection",
      tag: "Deep Learning",
      desc: "Deep convolutional network classifying seven emotions with 86.63% accuracy.",
      stack: "Python · TensorFlow · OpenCV",
      context: "An exploration of emotion-aware AI for human-computer interaction: a real-time emotion classifier from facial images.",
      role: "Solo project. Designed the CNN architecture, training pipeline, and evaluation.",
      features: [
        "Deep CNN for 7-class emotion recognition",
        "Data augmentation on the FER-2013 dataset",
        "Real-time inference with OpenCV face detection",
        "Confusion-matrix analysis and per-class tuning",
      ],
      impact: "86.63% accuracy across seven emotions, showing emotion-aware AI is viable in real time.",
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
        <a className="bar-name" href="#top">{site.name}</a>
        <ul>
          <li className="hide-sm"><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={site.resume} target="_blank" rel="noreferrer">Resume</a></li>
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

function Projects({ rows }) {
  return (
    <ul className="index projects">
      {rows.map((r) => (
        <li key={r.title}>
          <span className="when">{r.when}</span>
          <details>
            <summary>
              <span className="title">{r.title}</span>
              <span className="tag">{r.tag}</span>
              <span className="desc">{r.desc}</span>
              <span className="stack">{r.stack}</span>
              <span className="more" aria-hidden="true">Details</span>
            </summary>
            <div className="detail">
              <div><h4>Context</h4><p>{r.context}</p></div>
              <div><h4>My role</h4><p>{r.role}</p></div>
              <div><h4>What I built</h4><ul>{r.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
              <div><h4>Impact</h4><p>{r.impact}</p></div>
            </div>
          </details>
          {r.link
            ? <a className="go gold" href={r.link} target="_blank" rel="noreferrer">GitHub ↗</a>
            : <span />}
        </li>
      ))}
    </ul>
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
      <a className="skip" href="#about">Skip to content</a>
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
        {/* About: photos staggered on the left, words on the right */}
        <section id="about" className="section about-sec" aria-labelledby="about-h">
          <div className="about-wrap">
            <div className="about-photos">
              {site.photos.map((p) => (
                <figure key={p.name} className={p.wide ? "wide" : ""}>
                  <picture>
                    <source srcSet={`${p.name}.webp`} type="image/webp" />
                    <img src={`${p.name}.jpg`} alt={p.alt} loading="lazy" style={{ objectPosition: p.focus }} />
                  </picture>
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="about-words">
              <h2 id="about-h" className="about-label">About</h2>
              <p className="about-lead">{site.aboutLead}</p>
              <div className="about-text">
                {site.about.map((t, i) => <p key={i}>{t}</p>)}
              </div>
              <dl className="notes">
                {site.notes.map((n) => <div key={n.k}><dt>{n.k}</dt><dd>{n.v}</dd></div>)}
              </dl>
            </div>
          </div>
        </section>

        <Section id="work" title="Work">
          <p className="sub">Projects</p>
          <Projects rows={site.projects} />
          <p className="sub">Experience</p>
          <Index rows={site.experience} />
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
            <a href={site.resume} target="_blank" rel="noreferrer">Resume ↗</a>
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
