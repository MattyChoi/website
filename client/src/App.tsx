import { useState, useEffect, useRef, FC, ReactNode, CSSProperties } from "react";

/* ── Fonts ────────────────────────────────────────────────────────────────── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Nunito:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');`;

/* ── Types ────────────────────────────────────────────────────────────────── */
interface Language {
  name: string;
  color: string;
}

interface Project {
  title: string;
  stack: string;
  desc: string;
  link: string;
}

interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  desc: string;
}

interface EducationItem {
  year: string;
  school: string;
  field: string;
  coursework: string;
  honors: string;
}

interface FadeSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}


/* ── Data ─────────────────────────────────────────────────────────────────── */
const LANGUAGES: Language[] = [
  { name: "Python",     color: "#3b82f6" },
  { name: "Java",       color: "#f59e0b" },
  { name: "C++",        color: "#8b5cf6" },
  { name: "JavaScript", color: "#eab308" },
  { name: "HTML",       color: "#f97316" },
  { name: "CSS",        color: "#06b6d4" },
  { name: "React",      color: "#38bdf8" },
  { name: "SQL",        color: "#10b981" },
];

const PROJECTS: Project[] = [
  {
    title: "Tumor scanner",
    stack: "Python",
    desc:  "Using CNNs and computer vision models to classify and perform semantic image segmentation on brain MRI scans to look for brain tumors",
    link:  "https://github.com/MattyChoi/TumorScanner",
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    year:    "2024",
    company: "Meta",
    role:    "Software Engineer",
    desc:    "Facebook Integrity Entity and Actor Understanding team - Building production ML models and using LLMs to reduce harm in the Facebook ecosystem.",
  },
];

const EDUCATION: EducationItem[] = [
  {
    year:       "2020-2024",
    school:     "University of Minnesota, Twin Cities",
    field:      "Computer Science and Mathematics",
    coursework: "",
    honors:     "Dean's List · University of Minnesota 2021 & 2022 Hackathon Winner",
  }
];

const NAV_SECTIONS = ["about", "projects", "experience", "education"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

/* ── Hooks ────────────────────────────────────────────────────────────────── */
function useTypingCycle(words: string[], speed = 90, pause = 1800): string {
  const [display,  setDisplay]  = useState<string>("");
  const [wIdx,     setWIdx]     = useState<number>(0);
  const [charIdx,  setCharIdx]  = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const word  = words[wIdx];
    const delay = deleting
      ? speed / 2
      : charIdx === word.length
        ? pause
        : speed;

    const t = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplay(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWIdx((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, wIdx, words, speed, pause]);

  return display;
}

function useFadeIn(): [React.RefObject<HTMLElement>, boolean] {
  const ref     = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/* ── Components ───────────────────────────────────────────────────────────── */
const FadeSection: FC<FadeSectionProps> = ({ children, id, className, style }) => {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

/* ── CSS ──────────────────────────────────────────────────────────────────── */
const CSS = `
${FONTS}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #f8f7f4;
  --white:   #ffffff;
  --ink:     #1c1917;
  --ink2:    #44403c;
  --muted:   #78716c;
  --border:  #e7e5e0;
  --border2: #d6d3cd;
  --surface: #f0ede8;
  --blue:    #2563eb;
  --blue-lt: #eff6ff;
  --blue-bd: #bfdbfe;
  --serif:   'Instrument Serif', Georgia, serif;
  --sans:    'Nunito', sans-serif;
  --mono:    'JetBrains Mono', monospace;
  --max:     1100px;
  --pad:     clamp(1.25rem, 6vw, 3rem);
}

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 400;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--ink); color: var(--white); }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(248,247,244,.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0 var(--pad);
}
.nav-inner {
  max-width: var(--max); margin: 0 auto;
  height: 56px; display: flex; align-items: center; justify-content: space-between;
}
.nav-logo {
  font-family: var(--serif); font-size: 1.15rem;
  color: var(--ink); text-decoration: none;
}
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a {
  font-family: var(--mono); font-size: .7rem; letter-spacing: .08em;
  text-transform: uppercase; color: var(--muted); text-decoration: none;
  transition: color .15s; padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}
.nav-links a:hover { color: var(--ink); border-bottom-color: var(--ink); }
.dark-toggle {
  font-family: var(--mono); font-size: .68rem; letter-spacing: .07em;
  text-transform: uppercase; padding: .32rem .8rem;
  border: 1px solid var(--border2); background: transparent;
  color: var(--muted); cursor: pointer; transition: all .15s;
}
.dark-toggle:hover { border-color: var(--ink); color: var(--ink); }

/* HERO */
.hero {
  max-width: var(--max); margin: 0 auto;
  padding: clamp(5rem,13vw,9rem) var(--pad) clamp(3rem,7vw,5rem);
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3rem; align-items: center;
}
.hero-eyebrow {
  font-family: var(--mono); font-size: .72rem; letter-spacing: .16em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 1.25rem;
  display: flex; align-items: center; gap: .6rem;
}
.hero-eyebrow::before { content:''; width: 24px; height: 1px; background: var(--blue); }
.hero-h1 {
  font-family: var(--serif);
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 400; letter-spacing: -.03em; line-height: 1.05;
  color: var(--ink); margin-bottom: .5rem;
}
.hero-typed {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(1.6rem, 4.5vw, 3rem);
  color: var(--muted); line-height: 1.2; margin-bottom: 2rem;
  min-height: 3.5rem;
}
.cursor {
  display: inline-block; width: 2px; height: 1em; background: var(--blue);
  margin-left: 2px; animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.hero-desc { font-size: 1rem; color: var(--ink2); line-height: 1.85; margin-bottom: 2.25rem; max-width: 460px; }
.hero-btns { display: flex; gap: .75rem; flex-wrap: wrap; }
.btn {
  font-family: var(--mono); font-size: .72rem; font-weight: 500; letter-spacing: .07em;
  text-transform: uppercase; padding: .62rem 1.35rem; border: none; cursor: pointer;
  text-decoration: none; display: inline-flex; align-items: center; gap: .4rem;
  transition: all .15s;
}
.btn-primary { background: var(--ink); color: var(--white); }
.btn-primary:hover { background: var(--blue); }
.btn-outline { background: transparent; color: var(--ink); border: 1px solid var(--border2); }
.btn-outline:hover { border-color: var(--ink); }
.hero-img { display: flex; justify-content: center; }
.hero-img img { max-width: 380px; width: 100%; opacity: .85; }

/* SECTIONS */
section { max-width: var(--max); margin: 0 auto; padding: clamp(3rem,8vw,5.5rem) var(--pad); }
.rule { max-width: var(--max); margin: 0 auto; padding: 0 var(--pad); }
.rule hr { border: none; border-top: 1px solid var(--border); }
.s-label {
  font-family: var(--mono); font-size: .65rem; letter-spacing: .18em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 2.5rem;
  display: flex; align-items: center; gap: .65rem;
}
.s-label::after { content:''; flex:1; max-width:60px; height:1px; background:var(--border); }
h2.section-title {
  font-family: var(--serif); font-size: clamp(1.8rem,4vw,2.8rem);
  font-weight: 400; letter-spacing: -.02em; color: var(--ink); margin-bottom: 2.5rem;
}

/* LANGUAGES */
.lang-grid { display: flex; flex-wrap: wrap; gap: .85rem; }
.lang-pill {
  display: flex; align-items: center; gap: .5rem;
  padding: .55rem 1.1rem;
  background: var(--white); border: 1px solid var(--border);
  font-family: var(--mono); font-size: .78rem; font-weight: 500;
  color: var(--ink2); transition: all .2s;
}
.lang-pill:hover {
  border-color: var(--ink); color: var(--ink);
  transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,.07);
}
.lang-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

/* PROJECTS */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.proj-card {
  background: var(--white); border: 1px solid var(--border);
  overflow: hidden; transition: box-shadow .2s, transform .2s;
}
.proj-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.09); }
.proj-card iframe { display: block; width: 100%; height: 200px; border: none; }
.proj-body { padding: 1.25rem; }
.proj-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 400; letter-spacing: -.01em; margin-bottom: .25rem; }
.proj-stack { font-family: var(--mono); font-size: .63rem; color: var(--blue); letter-spacing: .05em; margin-bottom: .65rem; }
.proj-desc { font-size: .88rem; color: var(--ink2); line-height: 1.7; margin-bottom: 1rem; }
.proj-link {
  font-family: var(--mono); font-size: .68rem; font-weight: 500; letter-spacing: .07em;
  text-transform: uppercase; padding: .48rem 1rem;
  background: var(--ink); color: var(--white); text-decoration: none;
  display: inline-block; transition: background .15s;
}
.proj-link:hover { background: var(--blue); }

/* TIMELINE */
.timeline-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.timeline-img img { max-width: 340px; width: 100%; opacity: .8; }
.timeline { position: relative; padding-left: 1.5rem; }
.timeline::before {
  content:''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 1px; background: var(--border);
}
.tl-item { position: relative; margin-bottom: 2rem; padding-left: 1.25rem; }
.tl-item::before {
  content:''; position: absolute; left: -1.875rem; top: .45rem;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--blue); border: 2px solid var(--white);
  box-shadow: 0 0 0 1px var(--blue);
}
.tl-year    { font-family: var(--mono); font-size: .62rem; letter-spacing: .12em; color: var(--blue); text-transform: uppercase; margin-bottom: .25rem; }
.tl-company { font-family: var(--serif); font-size: 1.1rem; font-weight: 400; color: var(--ink); }
.tl-role    { font-family: var(--mono); font-size: .68rem; color: var(--muted); letter-spacing: .05em; margin-bottom: .45rem; }
.tl-desc    { font-size: .88rem; color: var(--ink2); line-height: 1.7; }

/* EDUCATION */
.edu-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.edu-item {
  margin-bottom: 2rem; padding: 1.5rem;
  background: var(--white); border: 1px solid var(--border); border-left: 3px solid var(--blue);
}
.edu-year   { font-family: var(--mono); font-size: .62rem; letter-spacing: .12em; color: var(--blue); text-transform: uppercase; margin-bottom: .3rem; }
.edu-school { font-family: var(--serif); font-size: 1.15rem; color: var(--ink); margin-bottom: .1rem; }
.edu-field  { font-family: var(--mono); font-size: .7rem; color: var(--muted); margin-bottom: .3rem; }
.edu-detail { font-size: .82rem; color: var(--ink2); line-height: 1.7; margin-bottom: .4rem; }
.edu-honors { font-size: .82rem; color: var(--muted); font-style: italic; }
.edu-img img { max-width: 340px; width: 100%; opacity: .8; margin-top: 2rem; }

/* CERTIFICATES */
.cert-carousel-wrap { position: relative; overflow: hidden; }
.cert-track { display: flex; gap: 1.5rem; transition: transform .4s cubic-bezier(.22,1,.36,1); }
.cert-slide { flex-shrink: 0; width: calc(33.333% - 1rem); }
.cert-slide img { width: 100%; border: 1px solid var(--border); display: block; }
.cert-nav { display: flex; justify-content: center; gap: .75rem; margin-top: 1.75rem; }
.cert-btn {
  font-family: var(--mono); font-size: .68rem; font-weight: 500; letter-spacing: .07em;
  text-transform: uppercase; padding: .45rem 1.1rem;
  border: 1px solid var(--border2); background: transparent; color: var(--ink);
  cursor: pointer; transition: all .15s;
}
.cert-btn:hover { border-color: var(--ink); }
.cert-btn:disabled { opacity: .35; cursor: default; }

/* FOOTER */
footer {
  max-width: var(--max); margin: 0 auto;
  padding: 2rem var(--pad) 3rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: .75rem; border-top: 1px solid var(--border);
}
.footer-copy { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .05em; }

/* DARK MODE */
body.dark {
  --bg:      #111110;
  --white:   #1c1b1a;
  --ink:     #e8e5df;
  --ink2:    #a8a29e;
  --muted:   #57534e;
  --border:  #2a2825;
  --border2: #3a3733;
  --surface: #1e1d1b;
  --blue:    #60a5fa;
  --blue-lt: #1e3a5f;
  --blue-bd: #2d4f7c;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero               { grid-template-columns: 1fr; }
  .hero-img           { display: none; }
  .timeline-layout    { grid-template-columns: 1fr; }
  .edu-layout         { grid-template-columns: 1fr; }
  .edu-img            { display: none; }
  .cert-slide         { width: calc(50% - .75rem); }
  .nav-links          { display: none; }
}
@media (max-width: 500px) {
  .cert-slide { width: 100%; }
}
`;

/* ── App ──────────────────────────────────────────────────────────────────── */
const App: FC = () => {
  const [dark, setDark] = useState<boolean>(false);
  const typed = useTypingCycle(["Matthew", "a Developer", "a Student"]);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#about" className="nav-logo">Matthew Choi</a>
          <ul className="nav-links">
            {NAV_SECTIONS.map((s: NavSection) => (
              <li key={s}>
                <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
              </li>
            ))}
          </ul>
          <button className="dark-toggle" onClick={() => setDark((d) => !d)}>
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div id="about" style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 var(--pad)" }}>
        <div className="hero" style={{ padding: "clamp(5rem,13vw,9rem) 0 clamp(3rem,7vw,5rem)" }}>
          <div>
            <div className="hero-eyebrow">Portfolio</div>
            <h1 className="hero-h1">Hey, I'm</h1>
            <div className="hero-typed">
              {typed}<span className="cursor" />
            </div>
            <p className="hero-desc">
              Full-time software engineer working on Facebook Integrity. Previously a student majoring
              in computer science and mathematics.
            </p>
            <div className="hero-btns">
              <a href="images/project/CSResume.pdf" className="btn btn-primary">
                📄 View my Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mattychoi/"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src="images/undraw/software_engineer.svg" alt="Software engineer illustration" />
          </div>
        </div>
      </div>

      <div className="rule"><hr /></div>

      {/* LANGUAGES */}
      <FadeSection id="languages">
        <div className="s-label">Stack</div>
        <h2 className="section-title">Languages</h2>
        <div className="lang-grid">
          {LANGUAGES.map((l: Language) => (
            <div key={l.name} className="lang-pill">
              <span className="lang-dot" style={{ background: l.color }} />
              {l.name}
            </div>
          ))}
        </div>
      </FadeSection>

      <div className="rule"><hr /></div>

      {/* PROJECTS */}
      <FadeSection id="projects">
        <div className="s-label">Work</div>
        <h2 className="section-title">Projects</h2>
        <div className="proj-grid">
          {PROJECTS.map((p: Project) => (
            <div key={p.title} className="proj-card">
              <iframe
                src={p.video}
                title={p.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="proj-body">
                <div className="proj-title">{p.title}</div>
                <div className="proj-stack">{p.stack}</div>
                <p className="proj-desc">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                  Visit Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      <div className="rule"><hr /></div>

      {/* EXPERIENCE */}
      <FadeSection id="experience">
        <div className="timeline-layout">
          <div className="timeline-img" style={{ display: "flex", alignItems: "center", paddingTop: "4rem" }}>
            <img src="images/undraw/code_review.svg" alt="Code review illustration" />
          </div>
          <div>
            <div className="s-label">Career</div>
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {EXPERIENCE.map((e: ExperienceItem, i: number) => (
                <div key={i} className="tl-item">
                  <div className="tl-year">{e.year}</div>
                  <div className="tl-company">{e.company}</div>
                  <div className="tl-role">{e.role}</div>
                  <p className="tl-desc">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      <div className="rule"><hr /></div>

      {/* EDUCATION */}
      <FadeSection id="education">
        <div className="edu-layout">
          <div>
            <div className="s-label">Background</div>
            <h2 className="section-title">Education</h2>
            {EDUCATION.map((e: EducationItem, i: number) => (
              <div key={i} className="edu-item">
                <div className="edu-year">{e.year}</div>
                <div className="edu-school">{e.school}</div>
                {e.field && <div className="edu-field">{e.field}</div>}
                <p className="edu-detail"><strong>Coursework:</strong> {e.coursework}</p>
                <p className="edu-honors">{e.honors}</p>
              </div>
            ))}
          </div>
          <div className="edu-img" style={{ display: "flex", alignItems: "center" }}>
            <img src="images/undraw/programming.svg" alt="Programming illustration" />
          </div>
        </div>
      </FadeSection>

      <div className="rule"><hr /></div>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">© {new Date().getFullYear()} Matthew Choi</span>
        <span className="footer-copy">
          <a
            href="https://www.linkedin.com/in/mattychoi/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="https://github.com/MattyChoi"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            GitHub
          </a>
        </span>
      </footer>
    </>
  );
};

export default App;