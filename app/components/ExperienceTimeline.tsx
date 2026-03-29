"use client";
import { useEffect, useRef } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export default function ExperienceTimeline({ experience }: { experience: Experience[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal observer specifically for the timeline progress line
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('timeline-item')) {
            const dot = entry.target.querySelector('.timeline-dot');
            if (dot) setTimeout(() => dot.classList.add('pulse'), 300);
          }
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    if (timelineRef.current) {
      if (document.querySelector('.timeline-progress')) {
        observer.observe(document.querySelector('.timeline-progress') as Element);
      }
      document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="journey-section section-padding section-border-top">
      <div className="container">
        
        <div className="section-header reveal-up">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-progress"></div>
          
          <div id="experience-timeline" className="timeline">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="timeline-item reveal-up" 
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  position: "relative",
                  paddingLeft: "var(--space-2xl)",
                  paddingBottom: "var(--space-3xl)" 
                }}
              >
                <div className="timeline-dot" style={{
                  position: "absolute",
                  left: "-6px",
                  top: "0.5rem",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--text-primary)",
                  boxShadow: "0 0 0 4px var(--bg-primary), 0 0 10px rgba(255,255,255,0.5)",
                  zIndex: 2,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}></div>
                <span className="timeline-period" style={{ display: "inline-block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  {exp.period}
                </span>
                <h3 className="timeline-role" style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.5px", marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
                <h4 className="timeline-company" style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 500, marginBottom: "1.5rem" }}>
                  {exp.company}
                </h4>
                <ul className="timeline-points" style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                   {exp.points.map((point, pIdx) => (
                     <li key={pIdx} style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "0.8rem", position: "relative", paddingLeft: "1.5rem", lineHeight: 1.6 }}>
                       <span style={{ position: "absolute", left: 0, top: "0.6rem", width: "6px", height: "1px", background: "var(--text-muted)" }}></span>
                       {point}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
