"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: "joyalukkas",
    client: "JoyAlukkas",
    tagline: "DOOH Taxi Screen Campaigns",
    quote: "AND Media Solutions delivered a 7.2% CTR through their DOOH taxi smart-screen campaigns — far exceeding our previous benchmarks. Their real-time demographic targeting across Dubai was exceptional and delivered verified footfalls.",
    author: "Marketing Director",
    stats: [
      { value: "7.2%", label: "CTR Achieved", benchmark: "1.8% Industry Avg." },
      { value: "2.4M+", label: "Target Impressions", benchmark: "Over 30 Days" },
      { value: "85%", label: "Recall Index", benchmark: "High saturation" },
    ],
    heatmapHotspots: [
      { name: "Downtown Dubai", level: "94%" },
      { name: "Dubai Marina", level: "88%" },
      { name: "DXB Terminals", level: "92%" },
    ],
  },
  {
    id: "rb",
    client: "R&B Fashion",
    tagline: "In-Flight & Premium OOH Corridor",
    quote: "The brand recall lift from our cross-border aviation campaigns was outstanding. AND Media's absolute alignment with our high-fashion brand values created an unmatched, seamless presence among affluent regional travelers.",
    author: "Head of Brand Strategy",
    stats: [
      { value: "3.2x", label: "Recall Lift Factor", benchmark: "Verified by survey" },
      { value: "84%", label: "Engagement Rate", benchmark: "Flight duration dwell" },
      { value: "12", label: "Markets Activated", benchmark: "GCC & International" },
    ],
    heatmapHotspots: [
      { name: "Business Class Dwell", level: "95%" },
      { name: "VIP Lounge Corridors", level: "89%" },
      { name: "Double-Page Spreads", level: "91%" },
    ],
  }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("joyalukkas");
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  // Tabs handle transition
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    // Out transition
    gsap.timeline({
      onComplete: () => {
        setActiveTab(tabId);
        // In transition
        gsap.fromTo(contentRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
        gsap.fromTo(visualRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "power4.out" });
      }
    })
    .to([contentRef.current, visualRef.current], {
      opacity: 0,
      scale: 0.97,
      duration: 0.3,
      ease: "power2.in"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section entrance reveal
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeData = caseStudies.find(c => c.id === activeTab) || caseStudies[0];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-brand-soft overflow-hidden select-none">
      
      {/* Decorative vector background */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-brand-teal/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-extrabold text-brand-teal tracking-[0.3em] uppercase mb-4">
            PROVEN RESULTS & CASE STORIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark tracking-tight leading-none font-sans">
            Campaign Case Storytelling
          </h2>
          <p className="text-brand-dark/45 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mt-4 font-body">
            Examine high-performance media architectures built for some of the world's most recognizable brands.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex justify-center gap-4 mb-16 border-b border-brand-dark/5 pb-6">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => handleTabChange(study.id)}
              className={`px-8 py-3.5 rounded-full text-[14px] font-extrabold tracking-wider transition-all duration-300 ${
                activeTab === study.id
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_rgba(18,181,176,0.25)] scale-105"
                  : "bg-white border border-brand-dark/5 text-brand-dark/60 hover:text-brand-dark hover:border-brand-teal/30"
              }`}
            >
              {study.client} Case Study
            </button>
          ))}
        </div>

        {/* CASE STUDY CORE ROW (Split layout) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          
          {/* Left panel: Testimonial & stats text (5 cols) */}
          <div ref={contentRef} className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Quote details */}
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-brand-teal tracking-widest uppercase">
                {activeData.tagline}
              </span>
              
              {/* Quote bubble */}
              <div className="relative">
                <span className="absolute -left-6 -top-4 text-7xl text-brand-teal/15 font-serif select-none pointer-events-none">“</span>
                <p className="text-brand-dark/70 text-lg md:text-xl font-light font-body italic leading-relaxed relative z-10">
                  {activeData.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-cyan flex items-center justify-center shadow-md">
                  <span className="text-white text-[13px] font-bold">{activeData.client[0]}</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-brand-dark">{activeData.author}</h4>
                  <p className="text-[12px] text-brand-dark/45 font-medium">{activeData.client}</p>
                </div>
              </div>
            </div>

            {/* Micro Stats cards grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-dark/5 pt-6">
              {activeData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal tracking-tight font-sans">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-brand-dark/55 uppercase tracking-wide mt-1 leading-none">
                    {stat.label}
                  </span>
                  <span className="text-[8px] text-brand-dark/35 font-light mt-1.5 leading-none">
                    {stat.benchmark}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right panel: Dynamic telemetries & heatmaps dashboard (7 cols) */}
          <div ref={visualRef} className="lg:col-span-7 relative w-full h-[480px] bg-brand-dark rounded-3xl border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_30px_90px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-between">
            
            {/* Cyber telemetry top strip */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 text-[9px] font-mono text-white/40 tracking-wider">
              <span>VISUALIZATION: METRIC_GRAPH_FEED</span>
              <span>CLIENT_ID: {activeData.id.toUpperCase()}</span>
            </div>

            {/* Inner graphics deck */}
            <div className="flex-1 grid md:grid-cols-2 gap-6 items-center">
              
              {/* Graphic 1: Taxi screen mockup or Aircraft Screen representation */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                <span className="text-[8px] font-mono text-brand-teal uppercase tracking-widest">Interactive Media Stream</span>
                
                {/* Simulated Screen display */}
                <div className="flex-1 rounded-xl border border-white/5 bg-[#0a1224] my-3 flex flex-col justify-between p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-full blur-xl" />
                  
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[7px] text-white/50 font-bold uppercase tracking-widest font-sans">Campaign Stream</span>
                  </div>
                  
                  {/* Glowing campaign metrics inside screen */}
                  <div className="text-center z-10">
                    <span className="block text-[8px] text-brand-teal font-mono uppercase">Avg. View Time</span>
                    <span className="block text-2xl font-extrabold text-white font-mono tracking-tight mt-0.5">14.8m</span>
                  </div>

                  <span className="text-[6px] text-white/25 text-right font-light leading-none">Smart Screen Verified</span>
                </div>

                <div className="flex justify-between items-center text-[8px] text-white/40">
                  <span>Device ID: TX-4498</span>
                  <span className="text-brand-yellow font-bold">100% Active</span>
                </div>
              </div>

              {/* Graphic 2: Hotspot Density heatmap readouts */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                <span className="text-[8px] font-mono text-brand-cyan uppercase tracking-widest">Geographic Hotspots</span>

                {/* Hotspots lists stacked */}
                <div className="flex flex-col gap-2.5 my-3 flex-1 justify-center">
                  {activeData.heatmapHotspots.map((hotspot, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex justify-between text-[10px] font-mono text-white/70">
                        <span>{hotspot.name}</span>
                        <span className="text-brand-cyan font-bold">{hotspot.level}</span>
                      </div>
                      {/* Bar filled representation */}
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-teal to-brand-cyan rounded-full transition-all duration-1000"
                          style={{ width: hotspot.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <span className="text-[7px] text-white/30 font-light leading-none">Based on GPS Telemetry coordinates</span>
              </div>

            </div>

            {/* Telemetry bottom bar */}
            <div className="flex justify-between items-center text-[8px] text-white/35 font-mono pt-4 border-t border-white/5 mt-4">
              <span>Dubai Nexus Coordinate system</span>
              <span className="text-green-400 font-bold animate-pulse">FEED SECURE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
