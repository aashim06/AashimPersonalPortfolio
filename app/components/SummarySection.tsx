"use client";
import { Code, MapPin, Cpu, MessageCircle } from "lucide-react";

interface SummarySectionProps {
  summaryParagraphs: string[];
}

export default function SummarySection({ summaryParagraphs }: SummarySectionProps) {
  // Highlight the specific text
  const formatText = (text: string) => {
    const target = "building AI-powered systems, frontend dashboards, and robust backend architectures";
    if (text.includes(target)) {
      const parts = text.split(target);
      return (
        <>
          {parts[0]}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{target}</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section id="summary" className="summary-section section-padding">
      <div className="container">
        
        <div className="section-header reveal-up">
          <h2 className="section-title">Professional Summary</h2>
        </div>
        
        <div id="summary-content" className="reveal-up">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            <div className="summary-text-col" style={{ paddingRight: "1rem" }}>
              {summaryParagraphs.map((p, idx) => (
                <p 
                  key={idx} 
                  className="about-text" 
                  style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}
                >
                  {formatText(p)}
                </p>
              ))}
            </div>
            
            {/* Premium Right Column: Quick Facts Bento */}
            <div className="summary-metrics-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              
              <div className="metric-card spotlight-card" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                <div className="spotlight-content">
                  <Code color="var(--text-primary)" size={24} style={{ marginBottom: "1.2rem" }} />
                  <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px" }}>Background</h4>
                  <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "1.15rem" }}>Software Eng. Grad</p>
                </div>
              </div>
              
              <div className="metric-card spotlight-card" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                <div className="spotlight-content">
                  <MapPin color="var(--text-primary)" size={24} style={{ marginBottom: "1.2rem" }} />
                  <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px" }}>Location</h4>
                  <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "1.15rem" }}>Melbourne, AU</p>
                </div>
              </div>
              
              <div className="metric-card spotlight-card" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                <div className="spotlight-content">
                  <Cpu color="var(--text-primary)" size={24} style={{ marginBottom: "1.2rem" }} />
                  <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px" }}>Expertise</h4>
                  <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "1.15rem" }}>Full-Stack, AI & Cloud</p>
                </div>
              </div>
              
              <div className="metric-card spotlight-card" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                <div className="spotlight-content">
                  <MessageCircle color="var(--text-primary)" size={24} style={{ marginBottom: "1.2rem" }} />
                  <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.5px" }}>Status</h4>
                  <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "1.15rem" }}>Open to Connect</p>
                </div>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
