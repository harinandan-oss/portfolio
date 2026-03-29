"use client";
import { useState } from "react";

const skills = [
  { name: "Python", pct: 80 },
  { name: "Machine Learning", pct: 72 },
  { name: "Data Analysis", pct: 75 },
  { name: "JavaScript", pct: 65 },
  { name: "React / Next.js", pct: 60 },
  { name: "SQL & Databases", pct: 68 },
];

const projects = [
  {
    icon: "🤖",
    title: "AI/ML Classifier",
    desc: "A supervised learning model built with Python and scikit-learn, achieving high accuracy on classification tasks.",
    tags: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    link: "https://github.com/harinandan-oss",
  },
  {
    icon: "🌐",
    title: "Portfolio Website",
    desc: "This very site — built with Next.js, deployed on Vercel, with a Neon PostgreSQL backend for contact form.",
    tags: ["Next.js", "TypeScript", "NeonDB", "Vercel"],
    link: "https://github.com/harinandan-oss",
  },
  {
    icon: "📊",
    title: "Data Viz Dashboard",
    desc: "An exploratory data analysis project visualizing real-world datasets with interactive charts.",
    tags: ["Python", "NumPy", "Seaborn", "Jupyter"],
    link: "https://github.com/harinandan-oss",
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#home" className="nav-logo">H.S.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="hero-eyebrow fade-up">AI/ML Developer</p>
          <h1 className="hero-name fade-up delay-1">
            Hari<span>nandan</span><br />S.
          </h1>
          <p className="hero-role fade-up delay-2">BSC Artificial Intelligence &amp; Machine Learning</p>
          <p className="hero-desc fade-up delay-3">
            First-year student at Kristu Jayanti University, Bengaluru. Passionate about building intelligent systems,
            exploring data, and crafting clean digital experiences.
          </p>
          <div className="hero-btns fade-up delay-4">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="https://github.com/harinandan-oss" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up delay-2">
          <div className="hero-img-wrap">
            <div className="hero-img-inner">
              <span className="hero-initials">HS</span>
            </div>
            <div className="hero-badge">
              <strong>2025–28</strong>
              Kristu Jayanti University
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div>
            <div className="about-stats">
              <div className="stat-box"><div className="num">3</div><div className="label">Years Program</div></div>
              <div className="stat-box"><div className="num">AI</div><div className="label">Specialization</div></div>
              <div className="stat-box"><div className="num">KJ</div><div className="label">University</div></div>
              <div className="stat-box"><div className="num">∞</div><div className="label">Curiosity</div></div>
            </div>
          </div>
          <div className="about-text">
            <p>Hey! I'm <strong>Harinandan S</strong>, a passionate first-year BSC AIML student at Kristu Jayanti (Deemed to be University), Bengaluru. I'm fascinated by how machines can learn, reason, and solve real-world problems.</p>
            <p>My academic journey is centered around Artificial Intelligence and Machine Learning — from understanding core algorithms to building practical applications. I enjoy working at the intersection of data, code, and creativity.</p>
            <p>When I'm not studying, I'm experimenting with side projects, contributing to open source, and sharpening my programming skills in Python, JavaScript, and beyond.</p>
            <a href="https://github.com/harinandan-oss" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-block", marginTop: "1rem" }}>
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-top">{p.icon}</div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrap">
          <div className="contact-info">
            <p>I'm open to collaborations, project ideas, internship opportunities, or just a friendly conversation about AI and tech. Drop me a message!</p>
            <div className="contact-items">
              <div className="contact-item"><div className="contact-item-icon">🎓</div><span>Kristu Jayanti University, Bengaluru</span></div>
              <div className="contact-item"><div className="contact-item-icon">📚</div><span>BSC AIML [A] — Batch 2025–2028</span></div>
              <div className="contact-item">
                <div className="contact-item-icon">💻</div>
                <a href="https://github.com/harinandan-oss" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>github.com/harinandan-oss</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="What's on your mind?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            {status === "success" && <div className="form-status success">✓ Message sent! I'll get back to you soon.</div>}
            {status === "error" && <div className="form-status error">✕ Something went wrong. Please try again.</div>}
            <button type="submit" className="btn-primary" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Harinandan S.</div>
        <p>© 2025 Harinandan S — BSC AIML, Kristu Jayanti University</p>
        <div className="footer-links">
          <a href="https://github.com/harinandan-oss" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
