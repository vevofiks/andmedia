"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MicroInteractions() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid running on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Set initial custom cursor coordinates offscreen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseMoveEvent) => {
      // Direct placement for inner dot
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, overwrite: "auto" });
      // Soft lagging follow-through for outer ring
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.4, overwrite: "auto" });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Interactive Hover Listeners
    const hoverElements = document.querySelectorAll("a, button, [role='button'], .cursor-hover");
    
    const onMouseEnter = () => {
      gsap.to(dot, { scale: 1.8, backgroundColor: "#1CA7C6", duration: 0.3 });
      gsap.to(ring, { scale: 1.5, borderColor: "#12B5B0", borderWidth: "1px", duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(dot, { scale: 1, backgroundColor: "#12B5B0", duration: 0.3 });
      gsap.to(ring, { scale: 1, borderColor: "rgba(18, 181, 176, 0.4)", borderWidth: "1.5px", duration: 0.3 });
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Magnetic Button Effect
    const magneticElements = document.querySelectorAll(".group, a[href^='#'], button");
    
    const onMagneticMove = function(this: HTMLElement, e: MouseEvent) {
      const bound = this.getBoundingClientRect();
      const x = e.clientX - bound.left - bound.width / 2;
      const y = e.clientY - bound.top - bound.height / 2;
      
      // Pull element toward cursor (strength: 0.3)
      gsap.to(this, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const onMagneticLeave = function(this: HTMLElement) {
      // Snap element back to place
      gsap.to(this, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto"
      });
    };

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", onMagneticMove as any);
      el.addEventListener("mouseleave", onMagneticLeave as any);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", onMagneticMove as any);
        el.removeEventListener("mouseleave", onMagneticLeave as any);
      });
    };
  }, []);

  return (
    <>
      {/* Dual Ring Custom Cursor DOM Nodes */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-teal rounded-full pointer-events-none z-50 pointer-events-none mix-blend-difference hidden md:block"
        style={{ transition: "transform 0.1s ease-out" }}
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-9 h-9 border-1.5 border-brand-teal/40 rounded-full pointer-events-none z-50 pointer-events-none hidden md:block"
        style={{ transition: "transform 0.15s ease-out" }}
      />
    </>
  );
}

interface MouseMoveEvent {
  clientX: number;
  clientY: number;
}
