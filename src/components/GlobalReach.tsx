"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 54, suffix: "+", label: "Countries Activated", desc: "Across 5 continents" },
  { value: 520, suffix: "+", label: "Global Campaigns", desc: "Delivered with precision" },
  { value: 2.4, suffix: "B+", label: "Audience Impressions", desc: "Verified reach metrics" },
  { value: 98.6, suffix: "%", label: "Retention Rate", desc: "Enterprise scale loyalty" },
];

const dashboardCards = [
  { title: "Airports Activated", value: "18+ Hubs", details: "DXB, LHR, JFK, SIN, CDG, HND", icon: "✈" },
  { title: "Airlines Network", value: "15+ Carriers", details: "Emirates, Etihad, Singapore, British", icon: "⌗" },
  { title: "OOH Locations", value: "1,200+ Screens", details: "Prime digital billboard hubs", icon: "⚿" },
  { title: "Transit Media", value: "4,500+ Fleets", details: "Interactive smart city taxis", icon: "⛟" }
];

const connectionPoints = [
  { name: "DXB (Dubai Nexus)", x: 620, y: 220, lat: "25.2048° N", lon: "55.2708° E", primary: true },
  { name: "LHR (London Hub)", x: 470, y: 140, lat: "51.5074° N", lon: "0.1278° W" },
  { name: "JFK (New York Hub)", x: 260, y: 160, lat: "40.7128° N", lon: "74.0060° W" },
  { name: "SIN (Singapore Hub)", x: 740, y: 290, lat: "1.3521° N", lon: "103.8198° E" },
  { name: "HND (Tokyo Hub)", x: 810, y: 160, lat: "35.6762° N", lon: "139.6503° E" },
  { name: "SYD (Sydney Corridor)", x: 840, y: 390, lat: "33.8688° S", lon: "151.2093° E" }
];

export default function GlobalReach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const routePathsRef = useRef<SVGPathElement[]>([]);
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal headers
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
      });

      // 2. Map Building Animation on Scroll
      const mapTl = gsap.timeline({
        scrollTrigger: {
          trigger: mapSvgRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 1.2,
        }
      });

      // Draw route lines
      routePathsRef.current.forEach((path) => {
        if (!path) return;
        mapTl.fromTo(path,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 3, ease: "power2.inOut" },
          0
        );
      });

      // Scale in pulsing dots
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        mapTl.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1.2, opacity: 1, duration: 2, ease: "back.out(2)" },
          1.5
        );
      });

      // 3. Stats Tickers & Stagger Fades
      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        const valueEl = stat.querySelector(".counter-value");
        if (!valueEl) return;
        const targetValue = parseFloat(valueEl.getAttribute("data-target") || "0");

        gsap.fromTo(stat, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            onEnter: () => {
              gsap.to({ val: 0 }, {
                val: targetValue,
                duration: 2.2,
                ease: "power2.out",
                onUpdate: function () {
                  const currentVal = this.targets()[0].val;
                  valueEl.textContent = targetValue % 1 === 0
                    ? Math.round(currentVal).toString()
                    : currentVal.toFixed(1);
                },
              });
            },
          },
        });
      });

      // 4. Staggered reveal for Dashboard Cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%" },
            delay: i * 0.12
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="global-reach" className="py-24 bg-brand-dark text-white overflow-hidden relative select-none">
      
      {/* HUD Digital Grid Map Texture background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,181,176,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,181,176,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(28,167,198,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Header Block */}
        <div ref={titleRef} className="text-center mb-20 opacity-0">
          <span className="inline-block text-[11px] font-extrabold text-brand-teal tracking-[0.3em] uppercase mb-4">
            GLOBAL OPERATIONS COMMAND
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-none font-sans">
            Our Global Media Reach
          </h2>
          <p className="text-white/45 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mt-4 font-body">
            Watch flights, networks, and transit nodes interconnect across continents. Pure authority, mapped in real time.
          </p>
        </div>

        {/* ====================================================
            TACTICAL COMMAND CENTER HUD LAYOUT
            ==================================================== */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Columns: Interactive Self-Building Map (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* HUD Status line */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 text-[10px] font-mono text-white/50 tracking-wider">
              <span>SYS.OPERATIONS: COMMENCE_MAP_BUILD</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                ONLINE FEED ACTIVE
              </span>
            </div>

            {/* Map Frame */}
            <div className="relative w-full aspect-[2/1] min-h-[300px]">
              
              {/* SVG Map Lines & Connections */}
              <svg ref={mapSvgRef} viewBox="0 0 1000 500" className="w-full h-full pointer-events-none" fill="none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#12B5B0" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#1CA7C6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F2D400" stopOpacity="0.8" />
                  </linearGradient>
                  
                  <linearGradient id="meridianGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#12B5B0" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>

                  <filter id="hudGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Cyber style compass rings */}
                <circle cx="620" cy="220" r="140" stroke="rgba(18,181,176,0.06)" strokeWidth="1" />
                <circle cx="620" cy="220" r="80" stroke="rgba(18,181,176,0.04)" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Horizontal grid lines */}
                <line x1="50" y1="250" x2="950" y2="250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="50" y1="125" x2="950" y2="125" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="50" y1="375" x2="950" y2="375" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 2" />

                {/* Dubai Vertical Meridian projection */}
                <path d="M 620 50 L 620 450" stroke="url(#meridianGrad)" strokeWidth="1" />

                {/* Connection lines from DXB (Nexus) to global endpoints */}
                
                {/* DXB -> LHR (London) */}
                <path
                  ref={(el) => { if (el) routePathsRef.current[0] = el; }}
                  d="M 620 220 Q 545 160 470 140"
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  filter="url(#hudGlow)"
                />

                {/* DXB -> JFK (New York) */}
                <path
                  ref={(el) => { if (el) routePathsRef.current[1] = el; }}
                  d="M 620 220 Q 420 120 260 160"
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  filter="url(#hudGlow)"
                />

                {/* DXB -> SIN (Singapore) */}
                <path
                  ref={(el) => { if (el) routePathsRef.current[2] = el; }}
                  d="M 620 220 Q 685 260 740 290"
                  stroke="url(#routeGradient)"
                  strokeWidth="2.1"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  filter="url(#hudGlow)"
                />

                {/* DXB -> HND (Tokyo) */}
                <path
                  ref={(el) => { if (el) routePathsRef.current[3] = el; }}
                  d="M 620 220 Q 720 180 810 160"
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  filter="url(#hudGlow)"
                />

                {/* DXB -> SYD (Sydney) */}
                <path
                  ref={(el) => { if (el) routePathsRef.current[4] = el; }}
                  d="M 620 220 Q 750 310 840 390"
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  filter="url(#hudGlow)"
                />

                {/* Dotted HUD map continents hints (Minimalist vector markers) */}
                {/* North America */}
                <path d="M 120 100 Q 150 120 200 130 T 280 180 T 320 250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Europe/Africa */}
                <path d="M 450 100 Q 480 160 460 250 T 490 320 T 520 400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Asia */}
                <path d="M 650 120 Q 740 130 800 150 T 850 250 T 780 340" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Geographic HUD Node Pins */}
              {connectionPoints.map((pt, i) => (
                <div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${pt.x / 10}%`, top: `${pt.y / 5}%` }}
                >
                  <div className="relative">
                    {/* Glowing Pulse Ring */}
                    <span className={`absolute inset-0 w-4 h-4 -left-1 -top-1 rounded-full bg-brand-${pt.primary ? "yellow" : "teal"}/30 animate-ping`} style={{ animationDuration: pt.primary ? "2s" : "3.5s" }} />
                    {/* Node Core */}
                    <div className={`w-2 h-2 rounded-full bg-brand-${pt.primary ? "yellow" : "teal"} shadow-[0_0_12px_rgba(242,212,0,0.8)]`} />
                  </div>
                  
                  {/* Floating Coordinates Tag */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-dark/90 border border-white/10 px-2 py-1 rounded text-[8px] font-mono whitespace-nowrap opacity-20 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="block font-bold text-white leading-none">{pt.name}</span>
                    <span className="block text-brand-teal mt-0.5 leading-none">{pt.lat} | {pt.lon}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Columns: Tactical Metric Summary (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            {dashboardCards.map((card, i) => (
              <div
                key={i}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-center justify-between opacity-0"
              >
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white/55 tracking-wider uppercase">{card.title}</span>
                  <span className="text-2xl font-extrabold text-brand-teal mt-1 font-sans leading-none">{card.value}</span>
                  <span className="text-[10px] text-white/35 font-light mt-1.5 font-body leading-none">{card.details}</span>
                </div>
                
                {/* Tactical HUD Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-brand-yellow font-sans group-hover:bg-brand-yellow/15 group-hover:text-brand-yellow transition-all duration-300">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ====================================================
            SCROLL-LINKED BIG STATS COUNTER STRIP
            ==================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/5">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => { if (el) statsRef.current[i] = el; }}
              className="text-center flex flex-col gap-1.5 select-none opacity-0"
            >
              <div className="flex items-baseline justify-center gap-1 font-sans">
                <span className="counter-value text-4xl md:text-5xl lg:text-6xl font-extrabold text-white counter-number" data-target={stat.value}>0</span>
                <span className="text-2xl md:text-3xl font-extrabold text-brand-yellow">{stat.suffix}</span>
              </div>
              <span className="text-[13px] font-bold text-white/70 tracking-wider uppercase mt-1">{stat.label}</span>
              <span className="text-[11px] text-white/35 font-light font-body">{stat.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
