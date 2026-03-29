"use client";
import { ArrowRight, GitHub as Github, Linkedin, FileText } from "react-feather";

export default function ContactCTA({ email, github, linkedin, resume }: { email: string, github: string, linkedin: string, resume: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <div className="contact-cta spotlight-card reveal-up" style={{ padding: "5rem 2rem", borderRadius: "32px", textAlign: "center", margin: "4rem 0" }}>
            <div className="spotlight-content">
              <div 
                className="cta-mesh-bg" 
                style={{ 
                  position: "absolute", 
                  top: "50%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  width: "100%", 
                  height: "100%", 
                  background: "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.08) 0%, transparent 60%)", 
                  zIndex: -1, 
                  pointerEvents: "none" 
                }}
              />
              
              <h2 className="contact-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", letterSpacing: "-2px", fontWeight: 700, background: "linear-gradient(to right, #fff, #9ca3af)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Let's build something<br/>exceptional together.
              </h2>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "500px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="contact-actions" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href={`mailto:${email}`} className="btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "100px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", textDecoration: "none" }}>
                  Say Hello <ArrowRight size={20} />
                </a>
              </div>
              
              <div className="social-tags" style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginTop: "4rem", flexWrap: "wrap" }}>
                <a href={github} target="_blank" rel="noreferrer" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Github size={18} /> GitHub
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={resume} target="_blank" rel="noreferrer" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FileText size={18} /> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ borderTop: "1px solid var(--border-color)", padding: "var(--space-xl) 0" }}>
        <div className="container">
          <div className="footer-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div className="footer-logo">
              <a href="#home" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-1px", color: "var(--text-primary)", textDecoration: "none" }}>
                AASH<span style={{ color: "var(--text-muted)" }}>.</span>
              </a>
            </div>
            <p className="footer-text" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              © 2026 Aashim Lal Memanaparambil Asokalal.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
