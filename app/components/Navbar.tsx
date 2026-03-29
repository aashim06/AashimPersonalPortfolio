"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Link href="#home" className="logo" style={{ textDecoration: "none", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
          AASH<span style={{ color: "var(--text-muted)" }}>.</span>
        </Link>
        <ul className="nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#summary" className="nav-link">SUMMARY</a></li>
          <li><a href="#projects" className="nav-link">WORK</a></li>
          <li><a href="#skills" className="nav-link">SKILLS</a></li>
          <li><a href="#experience" className="nav-link">JOURNEY</a></li>
          <li><a href="#about" className="nav-link">ABOUT</a></li>
        </ul>
        <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", letterSpacing: "0.05em", textDecoration: "none" }}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
