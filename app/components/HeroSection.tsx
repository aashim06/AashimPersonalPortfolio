"use client";
import { useEffect, useState } from "react";
import { GitHub as Github, Linkedin, FileText, Mail } from "react-feather";

interface HeroSectionProps {
  personalInfo: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
    resume: string;
    location: string;
    role: string;
  };
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="hero-section" style={{ 
      position: "relative",
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      background: "transparent",
      overflow: "hidden" 
    }}>
      
      {/* Subtle background glow */}
      <div style={{
         position: "absolute",
         top: "-20%",
         left: "-10%",
         width: "60vw",
         height: "60vw",
         background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)",
         pointerEvents: "none",
         zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "0 2rem", width: "100%", display: "flex", justifyContent: "center" }}>
        
        {/* Center Aligned Content */}
        <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          
          <div className="reveal-up" style={{ marginBottom: "2rem" }}>
            <span style={{ 
              fontSize: "0.85rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em", 
              color: "var(--text-secondary)",
              padding: "0.4rem 1rem",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              display: "inline-block"
            }}>
              Based in {personalInfo.location}
            </span>
          </div>

          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            fontWeight: 700, 
            letterSpacing: "-0.03em", 
            lineHeight: 1.1,
            color: "var(--text-primary)",
            margin: "0 0 1.5rem 0",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            Aashim Lal.<br/>
            <span style={{ color: "var(--text-secondary)" }}>{personalInfo.role}.</span>
          </h1>
          
          <h2 className="reveal-up" style={{ 
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", 
            fontWeight: 400, 
            color: "var(--text-muted)", 
            maxWidth: "700px",
            lineHeight: 1.5,
            transitionDelay: "200ms"
          }}>
            Building intelligent systems, reliable backend architectures, and polished digital experiences.
          </h2>

          {/* Action Links */}
          <div className="reveal-up" style={{ 
            display: "flex", 
            justifyContent: "center",
            gap: "2.5rem", 
            flexWrap: "wrap", 
            marginTop: "4rem",
            transitionDelay: "400ms"
          }}>
             <a href={personalInfo.github} target="_blank" rel="noreferrer" className="minimal-link" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }} onMouseOver={e => e.currentTarget.style.color = "var(--text-primary)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-secondary)"} aria-label="GitHub">
                <Github size={24} />
             </a>
             <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="minimal-link" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }} onMouseOver={e => e.currentTarget.style.color = "var(--text-primary)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-secondary)"} aria-label="LinkedIn">
               <Linkedin size={24} />
             </a>
             <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="minimal-link" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }} onMouseOver={e => e.currentTarget.style.color = "var(--text-primary)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-secondary)"} aria-label="Resume">
               <FileText size={24} />
             </a>
             <a href={`mailto:${personalInfo.email}`} className="minimal-link" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }} onMouseOver={e => e.currentTarget.style.color = "var(--text-primary)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-secondary)"} aria-label="Email">
               <Mail size={24} />
             </a>
          </div>

        </div>
      </div>
    </section>
  );
}
