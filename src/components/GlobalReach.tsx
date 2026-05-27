"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 500, suffix: "+", label: "Campaigns Delivered" },
  { value: 2, suffix: "B+", label: "Total Impressions" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const cities = [
  { name: "Dubai", x: "62%", y: "42%" },
  { name: "London", x: "48%", y: "25%" },
  { name: "New York", x: "25%", y: "32%" },
  { name: "Singapore", x: "75%", y: "55%" },
  { name: "Mumbai", x: "67%", y: "48%" },
  { name: "Sydney", x: "82%", y: "72%" },
  { name: "Tokyo", x: "80%", y: "35%" },
  { name: "São Paulo", x: "32%", y: "65%" },
];

export default function GlobalReach() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      gsap.fromTo(mapRef.current, { scale: 0.9, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: mapRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        const valueEl = stat.querySelector(".counter-value");
        if (!valueEl) return;
        const target = parseInt(valueEl.getAttribute("data-target") || "0");

        gsap.fromTo(stat, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: stat, start: "top 90%", toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to({ val: 0 }, {
                val: target, duration: 2, ease: "power2.out",
                onUpdate: function () {
                  if (valueEl) valueEl.textContent = Math.round(this.targets()[0].val).toString();
                },
              });
            },
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="global-reach" className="section-padding gradient-teal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-[12px] font-bold text-white/60 tracking-[0.25em] uppercase mb-4">Global Presence</span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Our Global Media Reach
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connecting brands with audiences across continents through strategic media placements.
          </p>
        </div>

        {/* Map */}
        <div ref={mapRef} className="relative w-full max-w-4xl mx-auto mb-16 aspect-[2/1] opacity-0">
          {/* Simplified world map outline */}
          <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
            {/* World map simplified paths */}
            <ellipse cx="500" cy="250" rx="480" ry="230" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            <ellipse cx="500" cy="250" rx="350" ry="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
            <ellipse cx="500" cy="250" rx="220" ry="110" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
            {/* Grid lines */}
            <line x1="500" y1="20" x2="500" y2="480" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="20" y1="250" x2="980" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            {/* Connection lines between cities */}
            <line x1="620" y1="210" x2="250" y2="160" stroke="rgba(242,212,0,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="620" y1="210" x2="750" y2="275" stroke="rgba(242,212,0,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="620" y1="210" x2="670" y2="240" stroke="rgba(242,212,0,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="620" y1="210" x2="480" y2="125" stroke="rgba(242,212,0,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="620" y1="210" x2="800" y2="175" stroke="rgba(242,212,0,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* City dots */}
          {cities.map((city, i) => (
            <div key={city.name} className="absolute group" style={{ left: city.x, top: city.y, transform: "translate(-50%, -50%)" }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-brand-yellow shadow-[0_0_15px_rgba(242,212,0,0.5)]" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-brand-yellow/40 animate-pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
              </div>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {city.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} ref={(el) => { if (el) statsRef.current[i] = el; }}
              className="glass rounded-2xl p-6 lg:p-8 text-center opacity-0">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="counter-value text-4xl md:text-5xl font-extrabold text-white counter-number" data-target={stat.value}>0</span>
                <span className="text-2xl md:text-3xl font-bold text-brand-yellow">{stat.suffix}</span>
              </div>
              <span className="text-[13px] text-white/50 font-medium tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
