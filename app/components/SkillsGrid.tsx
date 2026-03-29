"use client";
import { Code, Cpu, Database, Layout, Cloud, MessageCircle } from "react-feather";

interface SkillCategory {
  category: string;
  items: string[];
}

export default function SkillsGrid({ skills }: { skills: SkillCategory[] }) {
  
  const getIcon = (category: string) => {
    switch (category) {
      case "Languages": return <Code size={20} />;
      case "Intelligent Systems & AI": return <Cpu size={20} />;
      case "Backend & Data": return <Database size={20} />;
      case "Frontend & UI": return <Layout size={20} />;
      case "DevOps & Tools": return <Cloud size={20} />;
      case "Collaboration": return <MessageCircle size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section section-padding section-border-top">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div className="section-header reveal-up" style={{ marginBottom: "5rem" }}>
          <h2 className="section-title">Skills / Capabilities</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid reveal-up" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "2rem" 
        }}>
          {skills.map((category, idx) => (
             <div 
               key={idx}
               style={{
                 background: "rgba(20, 20, 20, 0.4)",
                 border: "1px solid rgba(255, 255, 255, 0.05)",
                 borderRadius: "16px",
                 padding: "2.5rem 2rem",
                 display: "flex",
                 flexDirection: "column",
                 gap: "2.5rem",
                 backdropFilter: "blur(10px)",
                 transition: "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
                 cursor: "default"
               }}
               onMouseOver={(e) => {
                 e.currentTarget.style.background = "rgba(30, 30, 30, 0.6)";
                 e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
               }}
               onMouseOut={(e) => {
                 e.currentTarget.style.background = "rgba(20, 20, 20, 0.4)";
                 e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
               }}
             >
               {/* Card Header */}
               <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "12px", 
                    background: "rgba(255, 255, 255, 0.03)", 
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "var(--text-secondary)"
                  }}>
                    {getIcon(category.category)}
                  </div>
                  <h3 style={{ 
                    fontSize: "1.2rem", 
                    fontWeight: 500, 
                    color: "var(--text-primary)", 
                    margin: 0 
                  }}>
                    {category.category}
                  </h3>
               </div>
               
               {/* Pills Container */}
               <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                 {category.items.map((skill, sIdx) => (
                   <span 
                     key={sIdx}
                     style={{
                       fontSize: "0.9rem",
                       padding: "0.6rem 1.2rem",
                       background: "rgba(255, 255, 255, 0.03)",
                       border: "1px solid rgba(255, 255, 255, 0.05)",
                       borderRadius: "100px",
                       color: "var(--text-secondary)",
                       transition: "color 0.2s ease, background 0.2s ease"
                     }}
                     onMouseOver={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.color = "var(--text-primary)";
                     }}
                     onMouseOut={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                     }}
                   >
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
