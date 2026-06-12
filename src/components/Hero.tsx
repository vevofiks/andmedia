"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Text elements
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Visual Dashboard elements
  const dashboardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cinematic Professional Intro Timeline
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      introTl
        .fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
        )
        .fromTo(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, stagger: 0.1 },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          dashboardRef.current,
          { y: 40, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=1.0"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );

      // Subtle 3D tilt scroll
      gsap.to(dashboardRef.current, {
        y: -40,
        rotationY: 4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col justify-center bg-[#090C15] text-white overflow-hidden pt-36 pb-24 select-none"
    >
      
      {/* Sleek, minimal background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-80" />

      {/* Curated Soft Background Ambiance (Minimal & Refined) */}
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#12B5B0]/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Clean Corporate Copy Deck */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left max-w-2xl">
            
            {/* Minimalist eyebrow */}
            <div ref={eyebrowRef} className="opacity-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase font-sans">
                AND Media Solutions • GLOBAL MEDIA PLANNING
              </span>
            </div>

            {/* Premium geometric headline */}
            <div className="overflow-hidden">
              <h1 className="text-[38px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-black text-white leading-[1.05] tracking-[-0.04em] font-sans">
                <span ref={line1Ref} className="inline-block opacity-0">Global Scale,</span>
                <br />
                <span ref={line2Ref} className="inline-block opacity-0 text-white/80">Without the</span>
                <br />
                <span ref={line3Ref} className="inline-block opacity-0 text-[#12B5B0]">
                  Guesswork.
                </span>
              </h1>
            </div>

            {/* Executive Description */}
            <div ref={descRef} className="opacity-0">
              <p className="text-base sm:text-lg text-white/50 leading-relaxed font-body font-light max-w-lg">
                AND Media Solutions delivers OOH, DOOH, transit, airport and in-flight advertising across key markets.
                <span className="block mt-2">Corporate campaigns, scaled perfectly and executed with absolute precision.</span>
              </p>
            </div>

            {/* Refined clean actions */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <a
                href="#core-services"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#12B5B0] text-white text-[13px] font-bold tracking-widest uppercase rounded-full hover:bg-[#1CA7C6] transition-all duration-300 shadow-sm"
              >
                Our Services
              </a>
              <a
                href="#cta"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white text-[13px] font-bold tracking-widest uppercase rounded-full hover:border-[#12B5B0]/30 hover:bg-white/[0.02] transition-all duration-400"
              >
                Request Details
              </a>
            </div>

            {/* Pristine metric counters (Removed raw numbers/percentages for verified compliance) */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-4 opacity-0 max-w-sm">
              <div className="flex flex-col sm:block">
                <span className="block text-xl font-bold text-white leading-none tracking-tight">GLOBAL</span>
                <span className="block text-[8.5px] text-white/40 font-bold uppercase tracking-wider mt-1.5 leading-none">Media Reach</span>
              </div>
              <div className="flex flex-col sm:block">
                <span className="block text-xl font-bold text-[#1CA7C6] leading-none tracking-tight">VERIFIED</span>
                <span className="block text-[8.5px] text-white/40 font-bold uppercase tracking-wider mt-1.5 leading-none">Target Precision</span>
              </div>
              <div className="flex flex-col sm:block">
                <span className="block text-xl font-bold text-[#F2D400] leading-none tracking-tight">REAL-TIME</span>
                <span className="block text-[8.5px] text-white/40 font-bold uppercase tracking-wider mt-1.5 leading-none">Campaign Sync</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Prestige Asymmetrical Demographic Dashboard (No stats/percentages) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center select-none">
            
            <div
              ref={dashboardRef}
              className="w-full max-w-[580px] bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-sm opacity-0 flex flex-col justify-between"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#12B5B0] uppercase tracking-widest font-bold">GLOBAL DISPATCH MONITOR</span>
                  <span className="text-[8px] text-white/30 font-mono mt-0.5">METRIC LOG ENGINE V1.0</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-mono font-bold text-green-400">SECURE DISPATCH</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="flex flex-col gap-4 mb-6">
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Active Dispatch Pipelines</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col">
                    <span className="text-[8px] text-white/40 font-mono uppercase">OOH Coverage</span>
                    <span className="text-lg font-black text-white mt-1 leading-none">EXTENSIVE</span>
                    <span className="text-[7.5px] text-[#12B5B0] font-mono mt-1">Multi-Market</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col">
                    <span className="text-[8px] text-white/40 font-mono uppercase">ROI Model</span>
                    <span className="text-lg font-black text-[#1CA7C6] mt-1 leading-none">IMPACT</span>
                    <span className="text-[7.5px] text-white/30 font-mono mt-1">Verified</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col">
                    <span className="text-[8px] text-white/40 font-mono uppercase">Campaign Sync</span>
                    <span className="text-lg font-black text-white mt-1 leading-none">ACTIVE</span>
                    <span className="text-[7.5px] text-green-400 font-mono mt-1">Optimal</span>
                  </div>
                </div>
              </div>

              {/* Global Reach Visual — Dubai OOH Campaign in action */}
              <div className="rounded-2xl overflow-hidden mb-6 relative">
                <div className="flex justify-between items-center text-[8.5px] font-mono text-white/30 border-b border-white/5 px-4 py-2.5 bg-[#0D111A]">
                  <span>LIVE CAMPAIGN FEED — DUBAI, UAE</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B5B0] animate-ping" />
                    <span className="text-[#12B5B0]">ACTIVE</span>
                  </div>
                </div>
                {/* Realistic Dubai OOH cityscape photo */}
                <div className="relative w-full h-44 overflow-hidden group">
                  <Image
                    src="/images/dubai-ooh-cityscape.png"
                    alt="Dubai Sheikh Zayed Road at night with OOH digital billboards"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                  {/* Bottom fade to merge with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090C15]/70 via-transparent to-transparent" />
                  {/* HUD labels */}
                  <span className="absolute left-3 bottom-3 text-[8px] font-mono text-[#F2D400] font-bold drop-shadow-lg">OOH SCREENS: GLOBAL COVERAGE</span>
                  <span className="absolute right-3 bottom-3 text-[8px] font-mono text-[#12B5B0] font-bold drop-shadow-lg">DXB NEXUS</span>
                </div>
              </div>

              {/* Console Footer */}
              <div className="flex justify-between items-center text-[8.5px] text-white/30 border-t border-white/5 pt-4">
                <span>Predictive media modeling framework v1.2</span>
                <span className="font-mono text-white/40">SHIELD ENCRYPT V3</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
