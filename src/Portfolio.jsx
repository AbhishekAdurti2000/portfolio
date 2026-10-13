import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Content. Everything on the site lives here: edit freely.
   ───────────────────────────────────────────────────────────── */
const site = {
  name: "Abhishek Adurti",
  tagline: ["builder", "photographer", "runner"],
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
    "I studied mechanical engineering, then spent three years at KPMG building data platforms and apps for clients, plus a summer at ZS. Somewhere along the way I got more interested in what to build than in how to build it.",
    "Now I’m doing my Master’s in Information Systems Management at Carnegie Mellon, mostly working on AI: RAG, agents, recommendation models, and the product side of all of it.",
  ],

  // Each project: a one-line summary, and a short story that opens on click.
  projects: [
    {
      when: "2026",
      title: "SentinelRAG",
      tag: "Carnegie Mellon",
      desc: "An AI assistant that answers questions from live GitHub data, with guardrails and tests that run on every change.",
      stack: "LangGraph · Claude API · GitHub Actions",
      link: "https://github.com/AbhishekAdurti2000/sentinelrag",
      story: "A solo project. The agent is built with LangGraph on the Claude API and pulls live data from GitHub instead of a saved copy. It has guardrails on what it will answer, and a set of evaluations runs in CI every time I push a change. I built most of it with Claude Code.",
    },
    {
      when: "2026",
      title: "Movie Recommendation Service",
      tag: "Machine Learning in Production, Carnegie Mellon",
      desc: "A movie recommender for about a million users, fed by a live Kafka stream. Built with my team.",
      stack: "Apache Kafka · TensorFlow · Python",
      story: "Our team, Backprop to the Future, runs a recommendation service the way it would run in production. I built one of the candidate models, a collaborative-filtering recommender, and the team picked it as the one to put into production.",
    },
    {
      when: "2024–25",
      title: "ESG Reporting System",
      tag: "KPMG",
      desc: "Pulls sustainability data together for 100+ stakeholders, so nobody has to do it by hand anymore.",
      stack: "Microsoft Fabric · Python · Power BI · EcoVadis API",
      story: "Clients needed ESG numbers for CSRD reporting, and collecting them meant a lot of spreadsheets. I designed and built the pipeline in Microsoft Fabric, the Power BI dashboards on top of it, and the access controls that keep sensitive HR data masked. It cut the manual work by about 40%.",
    },
    {
      when: "2022–24",
      title: "Distributor Management App",
      tag: "KPMG",
      desc: "An ordering app that replaced email and spreadsheets for a client’s distributors. 95% of them use it.",
      stack: "Power Apps · Azure Logic Apps · SharePoint",
      story: "Distributors were placing orders over email and in spreadsheets. I designed and built a mobile app on Power Apps with approval flows in Azure Logic Apps, ran design sprints with the client, and mentored the five developers on the team. Orders now take about 40% less time to process.",
    },
    {
      when: "2021",
      title: "CO₂ Emissions Forecasting",
      tag: "College project",
      desc: "Forecasts annual CO₂ emissions from World Bank data.",
      stack: "Python · scikit-learn · Pandas",
      story: "I cleaned up World Bank data, tried a few models, and settled on a random forest. It reached an R² of 0.968.",
    },
    {
      when: "2021",
      title: "Facial Expression Detection",
      tag: "College project",
      desc: "Looks at a face and tells which of seven emotions it shows.",
      stack: "Python · TensorFlow · OpenCV",
      story: "A convolutional neural network trained on the FER-2013 dataset, running in real time with OpenCV. It got 86.6% accuracy across the seven emotions.",
    },
  ],

  experience: [
    {
      when: "2026",
      title: "ZS Associates",
      logo: { src: "logo-zs.svg", text: "ZS" },
      role: "Business Technology Solutions Associate Consultant Intern",
      desc: "Helped a global pharma client replace a pile of manual reporting with one digital process, from first requirements to sign-off.",
    },
    {
      when: "2024–25",
      title: "KPMG",
      logo: { src: "logo-kpmg.svg" },
      role: "Associate Consultant",
      desc: "Built data pipelines in Databricks, Snowflake and Microsoft Fabric, and led requirements on a sustainability project for a client.",
    },
    {
      when: "2022–24",
      title: "KPMG",
      logo: { src: "logo-kpmg.svg" },
      role: "Analyst",
      desc: "Built apps and automations for clients on Power Platform and Azure, and a RAG assistant for customer support.",
    },
    {
      when: "2022",
      title: "KPMG",
      logo: { src: "logo-kpmg.svg" },
      role: "Intern Analyst",
      desc: "Built a compliance approval tool that cut approval time by 90%.",
    },
  ],

  education: [
    { when: "2025–26", title: "Carnegie Mellon University", logo: { src: "logo-cmu.webp", text: "CMU", full: true }, role: "Master of Information Systems Management, Heinz College" },
    { when: "2018–22", title: "Vellore Institute of Technology", logo: { src: "logo-vit.svg" }, role: "B.Tech in Mechanical Engineering · GPA 3.86 / 4.0" },
    { when: "2018", title: "Springdales School, Delhi", logo: { src: "logo-springdales.png" }, role: "High school, science" },
  ],

  awards: [
    { when: "2024", title: "Encore Spot Award", logo: { src: "logo-kpmg.svg" }, role: "KPMG India", desc: "For going beyond delivery: client demos, estimates and pre-sales work." },
    { when: "2024", title: "Encore Kudos Award", logo: { src: "logo-kpmg.svg" }, role: "KPMG India", desc: "For consistently good client work and picking up new skills quickly." },
    { when: "2023", title: "Up for Anything Team Member", logo: { src: "logo-kpmg.svg" }, role: "KPMG India", desc: "For owning critical work and delivering under tight deadlines." },
    { when: "2021", title: "Chairperson, Scientific Research Society", logo: { src: "logo-vit.svg" }, role: "VIT", desc: "Led 100+ members and 15+ events, including an outreach program teaching computer science to children." },
    { when: "2018", title: "Special Achiever Award", logo: { src: "logo-springdales.png" }, role: "Springdales School", desc: "For organizing state-level tech fests and representing the school at competitions." },
  ],

  certifications: "Professional Scrum Master I · AWS Certified Cloud Practitioner · Microsoft Azure Fundamentals (AZ-900) · Power Platform App Maker (PL-100) · Power Platform Developer (PL-400)",

  // Skills, laid out like a shelf: languages on one line, then groups.
  // `i` is an icon file in public/icons (optional).
  languages: [
    { n: "Python", i: "python" }, { n: "SQL", i: "sql" }, { n: "Java", i: "java" },
    { n: "JavaScript", i: "javascript" }, { n: "C++", i: "cplusplus" },
  ],
  skills: [
    { group: "AI & ML", items: [
      { n: "LangGraph" }, { n: "RAG" }, { n: "TensorFlow", i: "tensorflow" },
      { n: "scikit-learn", i: "scikitlearn" }, { n: "OpenCV", i: "opencv" }, { n: "Pandas", i: "pandas" },
    ] },
    { group: "Data", items: [
      { n: "Databricks" }, { n: "Apache Spark", i: "apachespark" }, { n: "Apache Kafka", i: "apachekafka" },
      { n: "Snowflake" }, { n: "BigQuery", i: "googlecloud" }, { n: "Microsoft Fabric" },
    ] },
    { group: "Cloud & DevOps", items: [
      { n: "Azure", i: "azure" }, { n: "AWS", i: "amazonwebservices" }, { n: "GCP", i: "googlecloud" },
      { n: "Docker", i: "docker" }, { n: "Azure DevOps", i: "azuredevops" },
      { n: "Git", i: "git" }, { n: "GitHub Actions", i: "githubactions" },
    ] },
    { group: "Product", items: [
      { n: "Discovery & requirements" }, { n: "Prototyping" }, { n: "Agile / Scrum" },
      { n: "Jira", i: "jira" }, { n: "Figma", i: "figma" },
    ] },
  ],

  quotes: [
    {
      text: "Focused and diligent, demonstrating a great work ethic by seamlessly working on multiple projects and delivering tasks on time. He went above and beyond, leading the team in feature development, code reviews, and knowledge transfer sessions.",
      name: "Gaurav Dureja", title: "Technical Architect, KPMG India", rel: "My manager and mentor",
    },
    {
      text: "His ability to coordinate across multiple departments and propose innovative solutions demonstrated his technical expertise, strategic thinking, and attention to detail. He will be an asset to any organization.",
      name: "Prince Sidana", title: "Director, Digital Cloud Solutions, KPMG India", rel: "Manager and mentor",
    },
    {
      text: "Through his technical expertise and leadership skills, he has made significant contributions across various projects. He mentored junior developers, guided code reviews, and promoted best software practices.",
      name: "Subhajyoti Majumdar", title: "Senior Technical Architect, KPMG India", rel: "Project and performance manager",
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Pieces
   ───────────────────────────────────────────────────────────── */
function Bar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`bar${solid ? " solid" : ""}`} aria-label="Primary">
      <div className="bar-inner">
        <a className="bar-logo" href="#top" aria-label={`${site.name}, back to top`}>
          <picture>
            <source srcSet="logo.webp" type="image/webp" />
            <img src="logo.png" alt="" width="188" height="128" />
          </picture>
        </a>
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
        <div className="rail"><h2 id={`${id}-h`} className="label">{title}</h2></div>
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
              <span className="head">
                <span className="title">{r.title}</span>
                <span className="toggle" aria-hidden="true" />
              </span>
              <span className="tag">{r.tag}</span>
              <span className="desc">{r.desc}</span>
              <span className="stack">{r.stack}</span>
            </summary>
            <div className="detail">
              <p>{r.story}</p>
              {r.link && <a className="link" href={r.link} target="_blank" rel="noreferrer">See it on GitHub ↗</a>}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

function Logo({ logo }) {
  const [failed, setFailed] = useState(false);
  if (!logo) return null;
  if (logo.src && !failed) {
    return (
      <span className={`logo${logo.full ? " logo-full" : ""}`}>
        <img src={logo.src} alt="" onError={() => setFailed(true)} />
      </span>
    );
  }
  return <span className="logo logo-text" aria-hidden="true">{logo.text}</span>;
}

function Index({ rows }) {
  return (
    <ul className="index">
      {rows.map((r) => (
        <li key={r.title + (r.role || "")}>
          <span className="when">{r.when}</span>
          <div className={r.logo ? "with-logo" : ""}>
            <Logo logo={r.logo} />
            <div>
              <div className="title">{r.title}</div>
              {r.role && <div className="role">{r.role}</div>}
              {r.desc && <p className="desc">{r.desc}</p>}
              {r.stack && <p className="stack">{r.stack}</p>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Icons show in their own colours; a few that are black by design are
// tinted to the text colour instead so they stay visible on the dark page.
const MONO = new Set(["apachekafka", "amazonwebservices", "pandas"]);
function Icon({ name }) {
  if (!name) return <span className="icon icon-none" aria-hidden="true" />;
  if (MONO.has(name)) {
    return <span className="icon icon-mono" aria-hidden="true" style={{ WebkitMaskImage: `url(icons/${name}.svg)`, maskImage: `url(icons/${name}.svg)` }} />;
  }
  return <img className="icon" src={`icons/${name}.svg`} alt="" aria-hidden="true" />;
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
        <div className="hero-center">
          <h1>{site.name}</h1>
          <p className="hero-tag">{site.tagline.join(" · ")}</p>
        </div>
        <a className="hero-down" href="#about" aria-label="Scroll to About">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
        </a>
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
              <h2 id="about-h" className="label">About</h2>
              <p className="about-lead">{site.aboutLead}</p>
              <div className="about-text">
                {site.about.map((t, i) => <p key={i}>{t}</p>)}
              </div>
            </div>
          </div>
        </section>

        <Section id="work" title="Projects">
          <Projects rows={site.projects} />
        </Section>

        <Section id="experience" title="Experience">
          <Index rows={site.experience} />
        </Section>

        <Section id="awards" title="Awards & recognition">
          <Index rows={site.awards} />
          <p className="certs"><span className="label">Certifications</span>{site.certifications}</p>
        </Section>

        <Section id="education" title="Education">
          <Index rows={site.education} />
        </Section>

        <Section id="skills" title="Skills">
          <ul className="langs">
            {site.languages.map((l) => <li key={l.n}><Icon name={l.i} />{l.n}</li>)}
          </ul>
          <div className="skill-groups">
            {site.skills.map((g) => (
              <div key={g.group}>
                <h3 className="label">{g.group}</h3>
                <ul>{g.items.map((it) => <li key={it.n}><Icon name={it.i} />{it.n}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials">
          {site.quotes.map((q) => (
            <figure className="quote" key={q.name}>
              <blockquote>“{q.text}”</blockquote>
              <figcaption><b>{q.name}</b><span>{q.title} · {q.rel}</span></figcaption>
            </figure>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-line">Always up for a good conversation about data, AI, or what makes a product worth building.</p>
          <a className="contact-mail link" href={`mailto:${site.email}`}>{site.email}</a>
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
