"use client";
import { useState } from "react";
import Image from "next/image";

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMe({ paragraphs }: AboutMeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about-section section-padding section-border-top">
      <div className="container">
        <div className="section-header reveal-up">
          <h2 className="section-title">About Me</h2>
        </div>

        <div id="about-content" className="reveal-up">
          <div className="grid-split" style={{ alignItems: "center", gap: "4rem" }}>
            
            <div className="about-text-col reveal-up">
              {paragraphs.map((p, index) => (
                <p 
                  key={index} 
                  className="about-text" 
                  style={{ 
                    fontSize: "1.15rem", 
                    color: "var(--text-secondary)", 
                    lineHeight: 1.8, 
                    marginBottom: "1.5rem",
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="about-image-col reveal-scale" style={{ display: "flex", justifyContent: "center", alignItems: "center", transitionDelay: "200ms" }}>
              <div 
                className="premium-portrait-container" 
                style={{ 
                  position: "relative", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  maxWidth: "400px", 
                  width: "100%", 
                  aspectRatio: "4/5", 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)" 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Glow layer */}
                <div 
                  className="portrait-glow" 
                  style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)", 
                    zIndex: 2, 
                    pointerEvents: "none", 
                    opacity: isHovered ? 1 : 0, 
                    transition: "opacity 0.5s ease" 
                  }}
                />
                
                {/* Image layer */}
                <Image 
                  src="/headshot.png" 
                  alt="Aashim Lal Portrait" 
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ 
                    objectFit: "cover", 
                    filter: isHovered ? "grayscale(0%) contrast(1.05) brightness(1.05)" : "grayscale(100%) contrast(1.1) brightness(0.85)", 
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)", 
                    transform: isHovered ? "scale(1.06)" : "scale(1.02)", 
                    display: "block" 
                  }} 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
