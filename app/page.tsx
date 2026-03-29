"use client";
import { useEffect } from "react";
import { data } from "@/lib/data";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SummarySection from "./components/SummarySection";
import ProjectsList from "./components/ProjectsList";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import AboutMe from "./components/AboutMe";
import ContactCTA from "./components/ContactCTA";

export default function Home() {

  useEffect(() => {
    // Spotlight Effect logic (from Vanilla JS converted to global effect)
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.spotlight-card');
      if (window.innerWidth > 768) {
        cards.forEach((card) => {
          const c = card as HTMLElement;
          const rect = c.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          c.style.setProperty("--mouse-x", `${x}px`);
          c.style.setProperty("--mouse-y", `${y}px`);
        });
      }
    };
    
    // Intersection Observer for the remaining reveal elements (from Vanilla JS)
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    
    // Slight delay to allow initial DOM insertions
    setTimeout(() => {
      document.querySelectorAll('.hidden-reveal, .reveal-up, .reveal-scale').forEach(el => observer.observe(el));
    }, 100);

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection personalInfo={data.personalInfo} />
      <SummarySection summaryParagraphs={data.summary} />
      <ProjectsList projects={data.projects} />
      <SkillsGrid skills={data.skills} />
      <ExperienceTimeline experience={data.experience} />
      <AboutMe paragraphs={data.about.paragraphs} />
      <ContactCTA 
        email={data.personalInfo.email} 
        github={data.personalInfo.github} 
        linkedin={data.personalInfo.linkedin} 
        resume={data.personalInfo.resume} 
      />
    </>
  );
}
