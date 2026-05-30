"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Section headers
  const headerRef = useRef<HTMLDivElement>(null);

  // Rows
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const visualRefs = useRef<HTMLDivElement[]>([]);

  // Telemetry indicators
  const biBarsRef = useRef<HTMLDivElement[]>([]);

  // Chat console states
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Enterprise AI Agent standing by. Select a routine query chip below to simulate a live automated campaign audit." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

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

      // 3. Pulse Forecast bars in Tech Insight
      biBarsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.fromTo(bar,
          { scaleY: 0.35 },
          {
            scaleY: 1.05,
            duration: 1.2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // AI response simulator
  const handleBotQuery = (queryText: string, botResponse: string) => {
    if (isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 1200);
  };

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
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-brand-dark/10 hover:border-[#12B5B0]/30 transition-all duration-500 group opacity-0 p-8 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-brand-dark/10 pb-4">
              <span className="text-[10px] font-mono text-[#12B5B0] uppercase tracking-widest font-extrabold">MediaScape Diagnostic Monitor</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-mono text-brand-dark/40">LIVE SYSTEM</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto py-6">
              <div className="bg-brand-soft border border-brand-dark/5 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[9px] text-brand-dark/45 uppercase font-mono">AD Impressions</span>
                <span className="text-2xl font-black text-[#12B5B0] tracking-tighter">8.4M+</span>
              </div>
              <div className="bg-brand-soft border border-brand-dark/5 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[9px] text-brand-dark/45 uppercase font-mono">CONVERSION LIFT</span>
                <span className="text-2xl font-black text-[#1CA7C6] tracking-tighter">+28.6%</span>
              </div>
              <div className="bg-brand-soft border border-brand-dark/5 rounded-2xl p-4 col-span-2 sm:col-span-1 flex flex-col justify-between">
                <span className="text-[9px] text-brand-dark/45 uppercase font-mono">Ad optimization</span>
                <span className="text-xl font-bold text-brand-dark tracking-tight">ACTIVE</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-brand-dark/40 border-t border-brand-dark/10 pt-4">
              <span>Dynamic data-driven targeting synchronization</span>
              <span className="font-mono text-[#12B5B0] font-bold">ACCURACY: 99.8%</span>
            </div>
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
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-brand-dark/10 hover:border-[#1CA7C6]/30 transition-all duration-500 group order-2 lg:order-1 opacity-0 p-8 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-brand-dark/10 pb-4">
              <span className="text-[10px] font-mono text-[#1CA7C6] uppercase tracking-widest font-extrabold">CODECRAFT ARCHITECTURE CONSOLE</span>
              <span className="text-[8.5px] text-brand-dark/40 font-mono">ENV: PROD DEPLOYMENT</span>
            </div>

            {/* IDE remains dark for premium developer code contrast */}
            <div className="my-auto py-4 font-mono text-[10px] sm:text-[11px] text-[#1CA7C6]/90 flex flex-col gap-2 select-none bg-[#0A0D14] rounded-2xl p-5 border border-brand-dark/5 shadow-inner">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[8px] text-white/30 ml-auto">SoftwareArchitect.tsx</span>
              </div>
              <span className="text-white/40">&gt; npm run deploy --prod</span>
              <span>✓ Compiled successfully | build time: 1.4s</span>
              <span className="text-brand-yellow">&gt; Core API: 12ms latency threshold verified</span>
              <span>✓ Cloudflare Edge routing: 100% active</span>
            </div>

            <div className="flex justify-between items-center text-[10px] text-brand-dark/40 border-t border-brand-dark/10 pt-4">
              <span>Enterprise Grade custom applications built to scale</span>
              <span className="font-extrabold text-[#1CA7C6]">STATUS: 200 OK</span>
            </div>
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
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-brand-dark/10 hover:border-[#12B5B0]/30 transition-all duration-500 group opacity-0 p-6 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-brand-dark/10 pb-3">
              <span className="text-[10px] font-mono text-[#12B5B0] uppercase tracking-widest font-extrabold">AUTOMATED AGENT SIMULATOR</span>
              <span className="text-[8px] font-mono text-brand-dark/40">LLM CORE: V2.1 ACTIVE</span>
            </div>

            {/* Chat bubbles container */}
            <div className="flex-1 flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1 py-4 scrollbar-none">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col max-w-[85%] rounded-2xl px-3.5 py-2 ${
                    msg.sender === "user" 
                      ? "bg-[#1CA7C6]/15 border border-[#1CA7C6]/20 text-brand-dark rounded-br-none self-end ml-12"
                      : "bg-brand-soft border border-brand-dark/5 text-brand-dark rounded-bl-none self-start mr-12"
                  }`}
                >
                  <span className={`text-[7.5px] font-bold tracking-wider uppercase mb-0.5 font-mono ${
                    msg.sender === "user" ? "text-[#1CA7C6]" : "text-brand-dark/40"
                  }`}>
                    {msg.sender === "user" ? "Client Query" : "System Agent"}
                  </span>
                  <p className="text-[10px] leading-tight font-light">{msg.text}</p>
                </div>
              ))}
              
              {isTyping && (
                <div className="bg-brand-soft border border-brand-dark/5 text-brand-dark rounded-2xl rounded-bl-none px-3.5 py-2.5 self-start mr-12 max-w-[85%]">
                  <span className="text-[7.5px] font-bold text-brand-dark/40 tracking-wider uppercase mb-1 font-mono">System Agent</span>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#12B5B0] animate-bounce" style={{ animationDelay: "0s", animationDuration: "0.8s" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1CA7C6] animate-bounce" style={{ animationDelay: "0.2s", animationDuration: "0.8s" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F2D400] animate-bounce" style={{ animationDelay: "0.4s", animationDuration: "0.8s" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Chat triggers */}
            <div className="flex flex-col gap-2 border-t border-brand-dark/10 pt-3">
              <span className="text-[7.5px] font-bold text-brand-dark/40 uppercase tracking-[0.15em] font-mono leading-none">
                Select audit routine chip to test Chatbot:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleBotQuery(
                    "Optimize campaign budget", 
                    "Analyzing marketing vectors. Recommending shifting 14% print surplus into DOOH channels to lift CTR by +4.8%."
                  )}
                  className="px-2.5 py-1.5 rounded-lg border border-[#12B5B0]/20 bg-[#12B5B0]/5 text-[9px] font-bold hover:bg-[#12B5B0] hover:text-white transition-all duration-300 cursor-pointer text-[#12B5B0] leading-none"
                >
                  💸 Budget Audit
                </button>
                <button
                  onClick={() => handleBotQuery(
                    "Check system latency", 
                    "CodeCraft core deployment scanned successfully. Primary API checked: 12ms server latency, SSL/TLS route secure."
                  )}
                  className="px-2.5 py-1.5 rounded-lg border border-[#1CA7C6]/20 bg-[#1CA7C6]/5 text-[9px] font-bold hover:bg-[#1CA7C6] hover:text-white transition-all duration-300 cursor-pointer text-[#1CA7C6] leading-none"
                >
                  ⚡ Latency Scan
                </button>
                <button
                  onClick={() => handleBotQuery(
                    "Verify active threat status", 
                    "Data Vision firewall analyzed: Zero threat vectors active. All GCC telemetry sensory nodes reported secure."
                  )}
                  className="px-2.5 py-1.5 rounded-lg border border-[#F2D400]/20 bg-[#F2D400]/5 text-[9px] font-bold hover:bg-[#F2D400] hover:text-brand-dark transition-all duration-300 cursor-pointer text-[#E5A900] leading-none"
                >
                  🛡️ Security Check
                </button>
              </div>
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
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-brand-dark/10 hover:border-[#F2D400]/55 transition-all duration-500 group order-2 lg:order-1 opacity-0 p-8 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-brand-dark/10 pb-4">
              <span className="text-[10px] font-mono text-[#E5A900] uppercase tracking-widest font-extrabold">PREDICTIVE BUSINESS INTELLIGENCE</span>
              <span className="text-[8.5px] text-brand-dark/40 font-mono">SYS: MACHINE DATA DECK</span>
            </div>

            {/* Forecast graph remain dark/high-contrast for clear neon projection display */}
            <div className="flex items-end justify-between gap-6 h-28 px-4 my-auto bg-[#0A0D14] rounded-2xl p-5 border border-brand-dark/5">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                  <div ref={(el) => { if (el) biBarsRef.current[0] = el; }} className="w-full bg-[#12B5B0] rounded-t h-[65%] shadow-[0_0_10px_#12B5B0]" />
                </div>
                <span className="text-[8px] text-white/35 font-mono">Q1 DEPLOY</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                  <div ref={(el) => { if (el) biBarsRef.current[1] = el; }} className="w-full bg-[#1CA7C6] rounded-t h-[80%] shadow-[0_0_10px_#1CA7C6]" />
                </div>
                <span className="text-[8px] text-white/35 font-mono">Q2 TARGET</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                  <div ref={(el) => { if (el) biBarsRef.current[2] = el; }} className="w-full bg-[#F2D400] rounded-t h-[95%] shadow-[0_0_10px_#F2D400]" />
                </div>
                <span className="text-[8px] text-white/35 font-mono">Q3 PROJ</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-brand-dark/40 border-t border-brand-dark/10 pt-4">
              <span>Predictive analytics forecasting regional corporate growth</span>
              <span className="font-mono text-[#E5A900] font-extrabold">TRENDING +24%</span>
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
            className="lg:col-span-7 relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-brand-dark/10 hover:border-[#12B5B0]/30 transition-all duration-500 group opacity-0 p-8 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-brand-dark/10 pb-4">
              <span className="text-[10px] font-mono text-[#12B5B0] uppercase tracking-widest font-extrabold">Data Vision Security Gateway</span>
              <span className="text-[9px] text-green-600 font-mono font-bold">FIREWALL ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-auto py-6">
              <div className="bg-brand-soft border border-brand-dark/5 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[8.5px] text-brand-dark/45 font-mono uppercase">Threat Vectors Detected</span>
                <span className="text-xl font-black text-green-600 font-mono">0 ACTIVE</span>
              </div>
              <div className="bg-brand-soft border border-brand-dark/5 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[8.5px] text-brand-dark/45 font-mono uppercase">Sovereignty SSL</span>
                <span className="text-xl font-black text-[#12B5B0] font-mono">SECURE</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-brand-dark/40 border-t border-brand-dark/10 pt-4">
              <span>Interactive visual data mapping with secure encryption</span>
              <span className="font-mono text-brand-dark/50">SHIELD STATUS: 100% OK</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
