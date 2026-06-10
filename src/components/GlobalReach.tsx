"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dashboardCards = [
  { title: "Airlines Network", value: "IN-FLIGHT", details: "Indigo, Air India, Spice Jet, Emirates, Etihad, Singapore, British", icon: "⌗" },
  { title: "OOH Locations", value: "INFLUENTIAL", details: "Prime digital billboard hubs", icon: "⚿" },
  { title: "Transit Media", value: "CONNECTED", details: "Interactive smart city transit networks", icon: "⛟" }
];

const connectionPoints = [
  { name: "DXB (Dubai Nexus)", x: 580, y: 270, lat: "25.2048° N", lon: "55.2708° E", primary: true },
  { name: "LHR (London Hub)",  x: 440, y: 160, lat: "51.5074° N", lon: "0.1278° W" },
  { name: "JFK (New York Hub)", x: 210, y: 190, lat: "40.7128° N", lon: "74.0060° W" },
  { name: "SIN (Singapore Hub)", x: 760, y: 340, lat: "1.3521° N",  lon: "103.8198° E" },
  { name: "HND (Tokyo Hub)",    x: 840, y: 210, lat: "35.6762° N", lon: "139.6503° E" },
  { name: "SYD (Sydney Corridor)", x: 870, y: 430, lat: "33.8688° S", lon: "151.2093° E" }
];

export default function GlobalReach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal headers
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
      });

      // 2. Staggered reveal for Dashboard Cards
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
    <section ref={containerRef} id="global-reach" className="py-24 bg-[#090C15] text-white overflow-hidden relative select-none border-b border-white/[0.04]">
      
      {/* HUD Digital Grid Map Texture background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,181,176,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,181,176,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(28,167,198,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Header Block */}
        <div ref={titleRef} className="text-center mb-20 opacity-0">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4">
            GLOBAL OPERATIONS COMMAND
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-none font-sans">
            Our Global Media Reach
          </h2>
          <p className="text-white/45 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mt-4 font-body">
            Watch flights, networks, and transit nodes interconnect across continents. Pure authority, mapped in real time.
          </p>
        </div>

        {/* ====================================================
            TACTICAL COMMAND CENTER HUD LAYOUT
            ==================================================== */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Columns: Interactive Self-Building Map (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* HUD Status line */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 text-[10px] font-mono text-white/50 tracking-wider">
              <span>SYS.OPERATIONS: COMMENCE_MAP_BUILD</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#12B5B0] animate-pulse" />
                ONLINE FEED ACTIVE
              </span>
            </div>

            {/* Map Frame */}
            <div className="relative w-full aspect-[2/1] min-h-[300px] rounded-2xl overflow-hidden">

              {/* Realistic Earth at night satellite photograph */}
              <Image
                src="/images/earth-night-satellite.png"
                alt="Earth at night from space showing global city lights across Europe, Middle East, Asia"
                fill
                className="object-cover object-center scale-110"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />

              {/* Edge vignettes to blend with dark panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A]/60 via-transparent to-[#0D111A]/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0D111A]/40 via-transparent to-[#0D111A]/40 pointer-events-none" />

              {/* Geographic HUD Node Pins overlaid on image */}
              {connectionPoints.map((pt, i) => (
                <div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${pt.x / 10}%`, top: `${pt.y / 5}%` }}
                >
                  <div className="relative">
                    {/* Glowing Pulse Ring */}
                    <span className={`absolute inset-0 w-4 h-4 -left-1 -top-1 rounded-full bg-${pt.primary ? "yellow" : "teal"}/30 animate-ping`} style={{ animationDuration: pt.primary ? "2s" : "3.5s" }} />
                    {/* Node Core */}
                    <div className={`w-2 h-2 rounded-full bg-brand-${pt.primary ? "yellow" : "teal"} shadow-[0_0_12px_rgba(242,212,0,0.8)]`} />
                  </div>

                  {/* Floating Coordinates Tag */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#090C15]/90 border border-white/10 px-2 py-1 rounded text-[8px] font-mono whitespace-nowrap opacity-20 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="block font-bold text-white leading-none">{pt.name}</span>
                    <span className="block text-[#12B5B0] mt-0.5 leading-none">{pt.lat} | {pt.lon}</span>
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
                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-5 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300 flex items-center justify-between opacity-0"
              >
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white/55 tracking-wider uppercase">{card.title}</span>
                  <span className="text-2xl font-black text-[#12B5B0] mt-1 font-sans leading-none">{card.value}</span>
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

      </div>
    </section>
  );
}
