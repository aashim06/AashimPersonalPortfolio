"use client";
import { ArrowUpRight, Play, GitHub, ArrowRight, ArrowLeft } from "react-feather";
import { useState, useRef, useEffect } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  stack: string[];
  role: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      
      // Calculate active slide index
      const slideWidth = clientWidth * 0.85 + clientWidth * 0.02; // flex basis + gap
      const newIndex = Math.round(scrollLeft / slideWidth);
      setActiveIndex(Math.min(newIndex, projects.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollAction = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth * 0.85;
      sliderRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  // Unique accent colors per card
  const accents = [
    { color: "56, 189, 248", label: "#38bdf8" },   // sky blue
    { color: "168, 85, 247", label: "#a855f7" },    // violet
  ];

  return (
    <section id="projects" className="projects-section section-padding section-border-top">
      
      {/* Section Header */}
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" }}>
        <div className="section-header reveal-up" style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>Selected Works</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", marginTop: "0.75rem" }}>
              System architectures & implementations I&apos;m proud of.
            </p>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "0.5rem", marginRight: "0.5rem" }}>
              {projects.map((_, i) => (
                <div key={i} style={{
                  width: activeIndex === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "100px",
                  background: activeIndex === i ? `rgba(${accents[i % accents.length].color}, 0.8)` : "rgba(255,255,255,0.15)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                }} />
              ))}
            </div>

            {/* Arrow controls */}
            <button 
              onClick={() => scrollAction('left')}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: canScrollLeft ? "rgba(255,255,255,0.08)" : "transparent",
                border: `1px solid ${canScrollLeft ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
                color: canScrollLeft ? "var(--text-primary)" : "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: canScrollLeft ? "pointer" : "not-allowed",
                transition: "all 0.25s ease"
              }}
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scrollAction('right')}
              disabled={!canScrollRight}
              aria-label="Next project"
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: canScrollRight ? "rgba(255,255,255,0.08)" : "transparent",
                border: `1px solid ${canScrollRight ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
                color: canScrollRight ? "var(--text-primary)" : "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: canScrollRight ? "pointer" : "not-allowed",
                transition: "all 0.25s ease"
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div className="projects-slider-viewport">
        <div 
          ref={sliderRef}
          className="projects-slider reveal-up" 
          onScroll={checkScroll}
          style={{ 
            display: "flex", 
            overflowX: "auto", 
            scrollSnapType: "x mandatory", 
            scrollBehavior: "smooth",
            gap: "2.5vw",
            padding: "0 5vw 2rem 5vw",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {projects.map((project, idx) => {
            const accent = accents[idx % accents.length];
            return (
             <div 
               key={idx}
               className="project-slide"
               style={{
                 flex: "0 0 70vw",
                 maxWidth: "900px",
                 scrollSnapAlign: "start",
                 scrollSnapStop: "always",
                 position: "relative",
                 overflow: "hidden",
                 padding: "clamp(2.5rem, 4vw, 4.5rem)",
                 background: `linear-gradient(145deg, rgba(${accent.color}, 0.18) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.05) 100%)`,
                 border: `1px solid rgba(${accent.color}, 0.35)`,
                 borderRadius: "28px",
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 minHeight: "60vh",
                 boxShadow: `0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(${accent.color}, 0.25)`,
                 backdropFilter: "blur(10px)",
               }}
             >
               {/* Intense corner glows */}
               <div style={{
                 position: "absolute",
                 top: "-100px",
                 right: "-100px",
                 width: "400px",
                 height: "400px",
                 background: `radial-gradient(circle, rgba(${accent.color}, 0.2) 0%, transparent 70%)`,
                 pointerEvents: "none",
                 borderRadius: "50%"
               }} />
               
               {/* Bottom-left soft glow */}
               <div style={{
                 position: "absolute",
                 bottom: "-80px",
                 left: "-80px",
                 width: "350px",
                 height: "350px",
                 background: `radial-gradient(circle, rgba(${accent.color}, 0.12) 0%, transparent 70%)`,
                 pointerEvents: "none",
                 borderRadius: "50%"
               }} />

               {/* Number badge */}
               <div style={{
                 position: "relative",
                 display: "inline-flex",
                 alignItems: "center",
                 gap: "1rem",
                 marginBottom: "1.5rem",
               }}>
                 <span style={{
                   fontSize: "0.85rem",
                   fontWeight: 800,
                   letterSpacing: "0.15em",
                   textTransform: "uppercase",
                   color: "#ffffff",
                   padding: "0.4rem 1rem",
                   background: `rgba(${accent.color}, 0.4)`,
                   border: `1px solid rgba(${accent.color}, 0.5)`,
                   borderRadius: "100px",
                   boxShadow: `0 0 15px rgba(${accent.color}, 0.2)`
                 }}>
                   Project 0{idx + 1}
                 </span>
                 <span style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600, opacity: 1 }}>
                   {project.role}
                 </span>
               </div>

               {/* Title */}
               <h3 style={{ 
                 fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
                 fontWeight: 800, 
                 color: "#ffffff", 
                 letterSpacing: "-1px", 
                 marginBottom: "0.6rem",
                 lineHeight: 1.1,
                 position: "relative",
                 textShadow: "0 2px 10px rgba(0,0,0,0.3)"
               }}>
                 {project.title}
               </h3>
               <p style={{ 
                 fontSize: "1.25rem", 
                 color: "#ffffff", 
                 marginBottom: "2.5rem",
                 fontWeight: 500,
                 opacity: 0.95
               }}>
                 {project.subtitle}
               </p>

               {/* Description */}
               <div style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  color: "#ffffff",
                  textAlign: "justify",
                  hyphens: "auto",
                  marginBottom: "2rem",
                  maxWidth: "780px",
                  position: "relative",
                  opacity: 0.9
               }}>
                 <p>{project.description}</p>
               </div>
               
               {/* Impact callout */}
               <div style={{
                 padding: "1.5rem 2rem",
                 background: `rgba(${accent.color}, 0.12)`,
                 borderLeft: `5px solid rgba(${accent.color}, 1)`,
                 borderRadius: "0 20px 20px 0",
                 marginBottom: "3rem",
                 maxWidth: "800px",
                 boxShadow: `inset 0 0 30px rgba(${accent.color}, 0.1), 0 10px 20px -10px rgba(0,0,0,0.5)`
               }}>
                 <p style={{ 
                   fontSize: "1.1rem", 
                   lineHeight: 1.7,
                   color: "#ffffff",
                   margin: 0,
                   fontWeight: 500
                 }}>
                   <strong style={{ color: `rgba(${accent.color}, 1)`, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.95rem", fontWeight: 800 }}>Impact — </strong>
                   {project.impact}
                 </p>
               </div>
               
               {/* Tech Stack */}
               <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "3.5rem" }}>
                  {project.stack.map(tech => (
                    <span key={tech} style={{ 
                      fontSize: "0.9rem", 
                      padding: "0.5rem 1.4rem", 
                      background: "rgba(255,255,255,0.12)", 
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "100px",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                    }}>
                      {tech}
                    </span>
                  ))}
               </div>

               {/* Action Buttons */}
               <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "auto", position: "relative" }}>
                  {project.links.github && (
                     <a 
                       href={project.links.github} 
                       target="_blank" 
                       rel="noreferrer"
                       style={{ 
                         display: "inline-flex", 
                         alignItems: "center", 
                         gap: "0.6rem", 
                         padding: "0.85rem 1.8rem", 
                         background: "rgba(255,255,255,0.06)", 
                         border: "1px solid rgba(255,255,255,0.12)",
                         borderRadius: "100px",
                         color: "var(--text-primary)",
                         textDecoration: "none",
                         fontSize: "0.9rem",
                         fontWeight: 500,
                         transition: "all 0.25s ease"
                       }}
                       onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                       onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                     >
                       <GitHub size={17} /> Source Code
                     </a>
                  )}
                  {project.links.demo && (
                     <a 
                       href={project.links.demo} 
                       target="_blank" 
                       rel="noreferrer"
                       style={{ 
                         display: "inline-flex", 
                         alignItems: "center", 
                         gap: "0.6rem", 
                         padding: "0.85rem 1.8rem", 
                         background: `rgba(${accent.color}, 0.15)`, 
                         border: `1px solid rgba(${accent.color}, 0.3)`,
                         color: "var(--text-primary)",
                         borderRadius: "100px",
                         textDecoration: "none",
                         fontSize: "0.9rem",
                         fontWeight: 600,
                         transition: "all 0.25s ease"
                       }}
                       onMouseOver={(e) => { e.currentTarget.style.background = `rgba(${accent.color}, 0.25)`; }}
                       onMouseOut={(e) => { e.currentTarget.style.background = `rgba(${accent.color}, 0.15)`; }}
                     >
                       <Play size={17} /> Watch Demo
                     </a>
                  )}
                  {project.links.live && (
                     <a 
                       href={project.links.live} 
                       target="_blank" 
                       rel="noreferrer"
                       style={{ 
                         display: "inline-flex", 
                         alignItems: "center", 
                         gap: "0.6rem", 
                         padding: "0.85rem 1.8rem", 
                         background: "transparent", 
                         border: "1px solid rgba(255,255,255,0.12)",
                         borderRadius: "100px",
                         color: "var(--text-primary)",
                         textDecoration: "none",
                         fontSize: "0.9rem",
                         fontWeight: 500,
                         transition: "all 0.25s ease"
                       }}
                       onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                       onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; }}
                     >
                       Visit Live <ArrowUpRight size={17} />
                     </a>
                  )}
               </div>

             </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
