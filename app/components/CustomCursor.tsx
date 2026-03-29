"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on mobile touch devices
    if (window.innerWidth <= 768) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    let rafId: number;
    const position = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      
      const targetElement = e.target as HTMLElement;
      if (!targetElement || !cursorRef.current) return;
      
      const isInteractive = 
        targetElement.closest('a') !== null ||
        targetElement.closest('button') !== null ||
        targetElement.tagName.toLowerCase() === 'input' ||
        targetElement.tagName.toLowerCase() === 'textarea' ||
        targetElement.closest('.timeline-dot') !== null ||
        targetElement.closest('.skill-card') !== null ||
        targetElement.closest('.metric-card') !== null ||
        targetElement.closest('.social-card') !== null ||
        targetElement.closest('.project-slide') !== null ||
        targetElement.closest('img') !== null; // Also hover interact with images
      
      if (isInteractive) {
        cursorRef.current.classList.add('hover');
      } else {
        cursorRef.current.classList.remove('hover');
      }
    };

    const updatePosition = () => {
      position.x += (target.x - position.x) * 0.15;
      position.y += (target.y - position.y) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Set initial position instantly
    window.addEventListener("mousemove", (e) => {
      position.x = e.clientX;
      position.y = e.clientY;
    }, { once: true });
    
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
