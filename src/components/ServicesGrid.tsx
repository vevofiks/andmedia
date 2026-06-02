"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Section headers
  const headerRef = useRef<HTMLDivElement>(null);

  // Rows
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const visualRefs = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal headers
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );

      // 2. Row entrance animations (5 rows)
      rowRefs.current.forEach((row, i) => {
        if (!row) return;

        const text = textRefs.current[i];
        const visual = visualRefs.current[i];

        const rowTl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        });

        const slideDirection = i % 2 === 0 ? 60 : -60;

        rowTl.fromTo(text,
          { x: -slideDirection, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(visual,
          { x: slideDirection, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=1.0"
        );
      });


    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} id="services" className="relative w-full bg-brand-soft text-brand-dark py-24 select-none overflow-hidden border-t border-brand-dark/5">
      
      {/* Background Grid Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10">
        
        {/* Main Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-dark/10 pb-10 mb-24 opacity-0">
          <div>
            <span className="text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase">SYSTEM SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-brand-dark tracking-tight leading-none mt-2 font-sans">
              Corporate Divisions
            </h2>
          </div>
          <p className="text-brand-dark/50 text-[14px] sm:text-[15px] font-light max-w-sm font-body leading-relaxed">
            Enterprise software design, digital growth engines, automated AI models, and predictive business intelligence tools.
          </p>
        </div>

        {/* ====================================================
            ROW 1: MEDIASCAPE (Teal theme)
            ==================================================== */}
        <div
          ref={(el) => { if (el) rowRefs.current[0] = el; }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-36"
        >
          {/* Left copy */}
          <div
            ref={(el) => { if (el) textRefs.current[0] = el; }}
            className="lg:col-span-5 flex flex-col gap-6 max-w-lg opacity-0"
          >
            <span className="text-[12px] font-bold text-[#12B5B0] tracking-[0.2em] uppercase">
              MediaScape Division
            </span>
            <h3 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sans text-brand-dark">
              Strategic Digital<br />
              <span className="bg-gradient-to-r from-[#12B5B0] to-[#1CA7C6] bg-clip-text text-transparent">Amplification.</span>
            </h3>
            <p className="text-brand-dark/65 text-base sm:text-lg font-light leading-relaxed font-body">
              Navigate international markets with dynamic media planning. We deploy end-to-end digital amplification engines, integrating custom website development, creative visuals, and data-driven advertising designed for absolute audience reach.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Digital Marketing", "Website Development", "Data-Driven Advertising", "Creative Visuals"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-brand-dark/10 text-[11px] font-semibold text-brand-dark/70">
                  {s}
                </span>
              ))}
            </div>
            <div>
              <a href="#cta" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#12B5B0] text-white text-[14px] font-semibold rounded-full hover:bg-[#1CA7C6] transition-all duration-300">
                Deploy MediaScape Campaign
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right cockpit visual */}
          <div
            ref={(el) => { if (el) visualRefs.current[0] = el; }}
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-brand-dark/10 hover:border-[#12B5B0]/40 transition-all duration-500 group opacity-0"
          >
            <Image
              src="/images/mediascape-dashboard.png"
              alt="MediaScape digital marketing analytics dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">Live Campaign Data</span>
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#12B5B0]/90 text-white text-[9px] font-bold font-mono">ACCURACY: 99.8%</div>
          </div>
        </div>

        {/* ====================================================
            ROW 2: CODECRAFT SOLUTIONS (Cyan theme - Alternated)
            ==================================================== */}
        <div
          ref={(el) => { if (el) rowRefs.current[1] = el; }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-36"
        >
          {/* Right visual (placed first on left column on desktop) */}
          <div
            ref={(el) => { if (el) visualRefs.current[1] = el; }}
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-brand-dark/10 hover:border-[#1CA7C6]/40 transition-all duration-500 group order-2 lg:order-1 opacity-0"
          >
            <Image
              src="/images/ooh-billboard.png"
              alt="OOH billboard advertising and outdoor media"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1CA7C6] animate-pulse" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">Enterprise Deployment Active</span>
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#1CA7C6]/90 text-white text-[9px] font-bold font-mono">STATUS: 200 OK</div>
          </div>

          {/* Left copy */}
          <div
            ref={(el) => { if (el) textRefs.current[1] = el; }}
            className="lg:col-span-5 flex flex-col gap-6 max-w-lg order-1 lg:order-2 lg:pl-8 opacity-0"
          >
            <span className="text-[12px] font-bold text-[#1CA7C6] tracking-[0.2em] uppercase">
              CodeCraft Solutions
            </span>
            <h3 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sans text-brand-dark">
              Enterprise Software<br />
              <span className="bg-gradient-to-r from-[#1CA7C6] to-[#12B5B0] bg-clip-text text-transparent">Architectures.</span>
            </h3>
            <p className="text-brand-dark/65 text-base sm:text-lg font-light leading-relaxed font-body">
              Architecting secure, performance-optimized microservices and proprietary applications. We transform complex corporate processes into fail-safe custom software solutions designed for global deployment and seamless operations.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Custom Software", "Software Design", "Scalable Architectures", "Secure Codebases"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-brand-dark/10 text-[11px] font-semibold text-brand-dark/70">
                  {s}
                </span>
              ))}
            </div>
            <div>
              <a href="#cta" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1CA7C6] text-white text-[14px] font-semibold rounded-full hover:bg-[#12B5B0] transition-all duration-300">
                Design Custom Software
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ====================================================
            ROW 3: AI CHATBOTS & CONVERSATIONAL AGENTS (Teal theme - Fully Functional Chat)
            ==================================================== */}
        <div
          ref={(el) => { if (el) rowRefs.current[2] = el; }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-36"
        >
          {/* Left copy */}
          <div
            ref={(el) => { if (el) textRefs.current[2] = el; }}
            className="lg:col-span-5 flex flex-col gap-6 max-w-lg opacity-0"
          >
            <span className="text-[12px] font-bold text-[#12B5B0] tracking-[0.2em] uppercase">
              AI Chatbots & Agents
            </span>
            <h3 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sans text-brand-dark">
              Intelligent, Autonomous<br />
              <span className="bg-gradient-to-r from-[#12B5B0] to-[#1CA7C6] bg-clip-text text-transparent">Conversations.</span>
            </h3>
            <p className="text-brand-dark/65 text-base sm:text-lg font-light leading-relaxed font-body">
              Supercharge brand engagement around the clock. We build custom conversational AI models and custom chatbot agents that execute complex database parameters and automate customer pathways with zero latency.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Conversational AI", "Workflow Automation", "LLM Tuning", "Linguistic Personas"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-brand-dark/10 text-[11px] font-semibold text-brand-dark/70">
                  {s}
                </span>
              ))}
            </div>
            <div>
              <a href="#cta" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#12B5B0] text-white text-[14px] font-semibold rounded-full hover:bg-[#1CA7C6] transition-all duration-300">
                Deploy Intelligent AI
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right interactive chat visual */}
          <div
            ref={(el) => { if (el) visualRefs.current[2] = el; }}
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-brand-dark/10 hover:border-[#12B5B0]/40 transition-all duration-500 group opacity-0"
          >
            <Image
              src="/images/ai-chatbot.png"
              alt="Enterprise AI conversational agent interface"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#12B5B0] animate-pulse" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">LLM Core: V2.1 Active</span>
            </div>
          </div>
        </div>

        {/* ====================================================
            ROW 4: TECH INSIGHT SUITE (Yellow theme - Alternated)
            ==================================================== */}
        <div
          ref={(el) => { if (el) rowRefs.current[3] = el; }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-36"
        >
          {/* Right visual (placed first on desktop) */}
          <div
            ref={(el) => { if (el) visualRefs.current[3] = el; }}
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-brand-dark/10 hover:border-[#F2D400]/40 transition-all duration-500 group order-2 lg:order-1 opacity-0"
          >
            <Image
              src="/images/global-brand-expansion.png"
              alt="Global brand expansion and business intelligence"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F2D400] animate-pulse" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">Trending +24% Regional Growth</span>
            </div>
          </div>

          {/* Left copy */}
          <div
            ref={(el) => { if (el) textRefs.current[3] = el; }}
            className="lg:col-span-5 flex flex-col gap-6 max-w-lg order-1 lg:order-2 lg:pl-8 opacity-0"
          >
            <span className="text-[12px] font-bold text-[#E5A900] tracking-[0.2em] uppercase">
              Tech Insight Suite
            </span>
            <h3 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sans text-brand-dark">
              Decision Modeling &<br />
              <span className="bg-gradient-to-r from-[#F2D400] to-[#E5A900] bg-clip-text text-transparent">Machine Intelligence.</span>
            </h3>
            <p className="text-brand-dark/65 text-base sm:text-lg font-light leading-relaxed font-body">
              Transform unstructured metrics into corporate leverage. We engineer custom business intelligence dashboards, predictive trend forecasting tools, and advanced data consulting models designed to reveal critical operational insights.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Business Intelligence", "Predictive Analytics", "Data Consulting", "Trend Modeling"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-brand-dark/10 text-[11px] font-semibold text-brand-dark/70">
                  {s}
                </span>
              ))}
            </div>
            <div>
              <a href="#cta" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#F2D400] text-brand-dark text-[14px] font-semibold rounded-full hover:bg-[#12B5B0] hover:text-white transition-all duration-300">
                Audit Enterprise Analytics
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ====================================================
            ROW 5: DATA VISION WING (Teal theme)
            ==================================================== */}
        <div
          ref={(el) => { if (el) rowRefs.current[4] = el; }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left copy */}
          <div
            ref={(el) => { if (el) textRefs.current[4] = el; }}
            className="lg:col-span-5 flex flex-col gap-6 max-w-lg opacity-0"
          >
            <span className="text-[12px] font-bold text-[#12B5B0] tracking-[0.2em] uppercase">
              Data Vision Wing
            </span>
            <h3 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sans text-brand-dark">
              Sensory Data Analytics &<br />
              <span className="bg-gradient-to-r from-[#12B5B0] to-[#1CA7C6] bg-clip-text text-transparent">Cyber Sovereignty.</span>
            </h3>
            <p className="text-brand-dark/65 text-base sm:text-lg font-light leading-relaxed font-body">
              Secure, observe, and visualize raw data channels. We deploy interactive visualization maps backed by robust, low-latency cybersecurity firewalls and encryption protocols to safeguard your business intelligence nodes 24/7.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Data Analytics", "Data Visualization", "Cybersecurity", "Hardened SSL/TLS"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-brand-dark/10 text-[11px] font-semibold text-brand-dark/70">
                  {s}
                </span>
              ))}
            </div>
            <div>
              <a href="#cta" className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#12B5B0] text-white text-[14px] font-semibold rounded-full hover:bg-[#1CA7C6] transition-all duration-300">
                Design Cyber Defense Shield
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right sensory dashboard visual */}
          <div
            ref={(el) => { if (el) visualRefs.current[4] = el; }}
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-brand-dark/10 hover:border-[#12B5B0]/40 transition-all duration-500 group opacity-0"
          >
            <Image
              src="/images/cross-cultural-marketing.png"
              alt="Data analytics and cybersecurity visualization"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">Shield Status: 100% OK</span>
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-green-500/90 text-white text-[9px] font-bold font-mono">FIREWALL ACTIVE</div>
          </div>
        </div>

      </div>
    </div>
  );
}
