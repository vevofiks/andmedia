"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const divisions = [
  {
    id: "webdev",
    name: "Website Design & Development",
    subtitle: "Custom High-Performance Digital Platforms",
    color: "#12B5B0", // Teal
    services: [
      "Custom Web Development",
      "Next.js & React Architectures",
      "Headless CMS Integrations",
      "Interactive UI/UX Design"
    ],
    description: "We architect and develop fast, accessible, and stunning custom websites tailored to your brand. Combining Next.js, React, and advanced animations to establish your premier online presence.",
    iconPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
  },
  {
    id: "redesign",
    name: "Website Redesign & Optimization",
    subtitle: "Technical Overhauls & Conversion Tuning",
    color: "#1CA7C6", // Cyan
    services: [
      "Visual Brand Refreshes",
      "User Journey Engineering",
      "Conversion Rate Optimization",
      "Technical SEO Audits"
    ],
    description: "Modernize your legacy platforms with complete visual overhauls, seamless navigation flows, and speed enhancements that turn visitors into loyal corporate clients.",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
  },
  {
    id: "aiagents",
    name: "AI, Automation & Chatbots",
    subtitle: "Intelligent Workflows & Virtual Assistants",
    color: "#F2D400", // Yellow
    services: [
      "Custom LLM Chatbots",
      "Workflow Automation",
      "CRM & Calendar Sync",
      "Lead Qualification Agents"
    ],
    description: "Deploy advanced conversational AI engines and custom automation pipelines to streamline lead capture, customer support, and internal operations with zero latency.",
    iconPath: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M12 2.25c-5.385 0-9.75 3.582-9.75 8 0 2.2 1.087 4.19 2.85 5.58-.2 1.34-1.077 3.5-1.077 3.5s2.464-.26 4.7-1.78c1.012.44 2.112.7 3.277.7 5.385 0 9.75-3.582 9.75-8s-4.365-8-9.75-8z"
  },
  {
    id: "digitalmarketing",
    name: "Digital Marketing & Advertising",
    subtitle: "High-Impact Multi-Channel Campaigns",
    color: "#12B5B0", // Teal
    services: [
      "Google Search & Display Ads",
      "Social Media Campaigns",
      "Retargeting Frameworks",
      "Paid Media Optimization"
    ],
    description: "Maximize your digital media budgets. We plan, execute, and monitor high-conversion search, display, and social media ad campaigns that deliver trackable business outcomes.",
    iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
  },
  {
    id: "seo",
    name: "SEO & Content Creation",
    subtitle: "Organic Authority & Search Dominance",
    color: "#1CA7C6", // Cyan
    services: [
      "Organic Search Strategy",
      "Keyword Research & Trends",
      "On-Page & Technical SEO",
      "Editorial Content Writing"
    ],
    description: "Establish long-term organic authority. We optimize your search visibility through technical audits, structured data schemas, and editorial content designed for high ranking.",
    iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.958 11.958 0 0112 2.714z"
  }
];

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function TechServices() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Chat console states
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to our AI Console. Click an audit query chip below to run a real-time system check." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance scroll trigger
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
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

      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Trigger active tab change animation
  const handleTabChange = (idx: number) => {
    if (idx === activeTab) return;
    
    gsap.to(".tab-content-panel", {
      opacity: 0,
      y: 15,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setActiveTab(idx);
        gsap.fromTo(".tab-content-panel",
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    });
  };

  // Bot response simulator
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
    <section ref={sectionRef} id="digital-tech" className="relative w-full bg-[#0A0D14] text-white py-24 select-none overflow-hidden border-b border-white/[0.04]">
      
      {/* Dynamic tech net background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,181,176,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(18,181,176,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10 mb-20 opacity-0">
          <div>
            <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-[-0.03em] leading-[1.08] mt-2 font-sans">
              Digital Transformation.{" "}
              <span className="bg-gradient-to-r from-[#12B5B0] via-[#1CA7C6] to-[#12B5B0] bg-clip-text text-transparent">
                Accelerated.
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-[14px] sm:text-[15px] font-light max-w-sm font-body leading-relaxed">
            Custom website design, full-scale redesigns, workflow automation, and organic search marketing powered by AND Media Solutions.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-12 gap-10 items-stretch opacity-0">
          
          {/* LEFT SIDEBAR: Horizontal Tab Controls (5 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-extrabold text-white/30 uppercase tracking-[0.2em] mb-2 px-1">
              Select Capability
            </span>
            <div className="flex flex-col gap-3">
              {divisions.map((div, idx) => (
                <button
                  key={div.id}
                  onClick={() => handleTabChange(idx)}
                  className={`w-full flex items-center justify-between text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    activeTab === idx
                      ? "bg-white/5 border-white/10 shadow-lg translate-x-1"
                      : "bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Glowing division dot */}
                    <div 
                      className="w-2 h-2 rounded-full transition-transform duration-300"
                      style={{
                        backgroundColor: div.color,
                        boxShadow: activeTab === idx ? `0 0 10px ${div.color}` : "none",
                        transform: activeTab === idx ? "scale(1.2)" : "scale(1)"
                      }}
                    />
                    <div className="flex flex-col">
                      <span className="text-[16px] font-extrabold tracking-tight font-sans text-white">
                        {div.name}
                      </span>
                      <span className="text-[10.5px] text-white/40 font-light mt-0.5 leading-none">
                        {div.services.length} services active
                      </span>
                    </div>
                  </div>

                  {/* SVG Chevron indicator */}
                  <svg 
                    className={`w-4 h-4 text-white/30 group-hover:text-white transition-all duration-300 ${
                      activeTab === idx ? "translate-x-1 text-[#12B5B0]" : ""
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT VIEWPORT: Tab Presentation Console (8 columns) */}
          <div className="lg:col-span-8 bg-white/[0.03] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(28,167,198,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* TAB CONTENT PANEL */}
            <div className="tab-content-panel flex flex-col gap-8 h-full justify-between">
              
              {/* Header and Details */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span 
                      className="text-[10.5px] font-extrabold tracking-[0.2em] uppercase font-mono"
                      style={{ color: divisions[activeTab].color }}
                    >
                      {divisions[activeTab].subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 font-sans leading-none">
                      {divisions[activeTab].name}
                    </h3>
                  </div>

                  {/* SVG Division Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0"
                    style={{ 
                      borderColor: `${divisions[activeTab].color}25`,
                      backgroundColor: `${divisions[activeTab].color}08`,
                      color: divisions[activeTab].color
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={divisions[activeTab].iconPath} />
                    </svg>
                  </div>
                </div>

                <p className="text-white/60 text-[14.5px] sm:text-[15.5px] font-light leading-relaxed max-w-2xl font-body">
                  {divisions[activeTab].description}
                </p>

                {/* Interactive Services Bullets Container */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {divisions[activeTab].services.map((srv, i) => (
                    <span
                      key={srv}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-semibold bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/8 transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: divisions[activeTab].color }} />
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* DYNAMIC PRESENTATION CONSOLE AREA */}
              <div className="mt-8 border border-white/5 rounded-2xl bg-black/40 p-5 overflow-hidden min-h-[220px] flex flex-col justify-between relative shadow-inner">
                
                {/* 1. WEBSITE DESIGN & DEVELOPMENT DOCK */}
                {divisions[activeTab].id === "webdev" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full animate-fade-in">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>COMPILER: PRODUCTION DEPLOYMENT TERMINAL</span>
                      <span>SECURE DEPLOYMENT ENGINE</span>
                    </div>
                    <div className="font-mono text-[10px] text-brand-teal/90 py-2 flex flex-col gap-1 select-none">
                      <span>&gt; npm run build</span>
                      <span className="text-white/60">✓ Production build compiled successfully</span>
                      <span className="text-brand-yellow">&gt; Optimization pass: Static site exports ready</span>
                      <span>&gt; API server verification: Low latency threshold confirmed</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Edge network: Global CDN active</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 2. WEBSITE REDESIGN & OPTIMIZATION DOCK */}
                {divisions[activeTab].id === "redesign" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>DIAGNOSTICS: CONVERSION & SPEED AUDIT</span>
                      <span>SPEED METRIC MONITOR</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">LOADING SPEED</span>
                        <span className="text-lg font-black text-[#12B5B0] font-sans mt-1">EXCELLENT</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">FID ACCURACY</span>
                        <span className="text-lg font-black text-[#1CA7C6] font-sans mt-1">STABLE</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">MOBILE INDEX</span>
                        <span className="text-lg font-black text-brand-yellow font-sans mt-1">OPTIMIZED</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Status: All performance indicators positive</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 3. AI, AUTOMATION & CHATBOTS DOCK (FULLY FUNCTIONAL INTERACTIVE CHAT) */}
                {divisions[activeTab].id === "aiagents" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    
                    {/* Chat console header */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>AI CONSOLE: CONVERSATIONAL AGENT</span>
                      <span>MODEL STATUS: ONLINE</span>
                    </div>

                    {/* Dynamic Chat Logs Viewport */}
                    <div className="flex flex-col gap-2 max-h-[110px] overflow-y-auto pr-1 py-1 text-[10.5px] leading-relaxed font-light scrollbar-none">
                      {messages.map((msg, i) => (
                        <div 
                          key={i} 
                          className={`flex flex-col max-w-[85%] rounded-2xl px-3 py-2 ${
                            msg.sender === "user" 
                              ? "bg-brand-cyan/20 border border-brand-cyan/30 text-white rounded-br-none self-end ml-12"
                              : "bg-white/5 border border-white/5 text-white/95 rounded-bl-none self-start mr-12"
                          }`}
                        >
                          <span className="text-[7.5px] font-bold text-white/30 tracking-wider uppercase mb-0.5 font-mono">
                            {msg.sender === "user" ? "Client" : "AND Media AI Agent"}
                          </span>
                          <p>{msg.text}</p>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="bg-white/5 border border-white/5 text-white/95 rounded-2xl rounded-bl-none px-3.5 py-2.5 self-start mr-12 max-w-[85%]">
                          <span className="text-[7.5px] font-bold text-white/30 tracking-wider uppercase mb-1 font-mono">AND Media AI Agent</span>
                          <div className="flex items-center gap-1.5 py-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: "0s", animationDuration: "0.8s" }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "0.2s", animationDuration: "0.8s" }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-bounce" style={{ animationDelay: "0.4s", animationDuration: "0.8s" }} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Prompt Chips (User Interaction Actions) */}
                    <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
                      <span className="text-[7.5px] font-bold text-white/30 uppercase tracking-[0.15em] font-mono leading-none">
                        Click Chip to Interact with AI Chatbot
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleBotQuery(
                            "Optimize marketing budget split", 
                            "Analyzing GCC corridors. Recommending shifting print surplus into DOOH Airport assets to lift direct CTR and conversion rates."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-teal/20 bg-brand-teal/5 text-[9px] font-bold hover:bg-brand-teal hover:text-white transition-all duration-300 cursor-pointer text-[#12B5B0] leading-none"
                        >
                          💸 Budget Splitting
                        </button>
                        <button
                          type="button"
                          onClick={() => handleBotQuery(
                            "Check database synchronization", 
                            "Prisma service connector verification OK. Database queries successfully cached with low query latency."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 text-[9px] font-bold hover:bg-brand-cyan hover:text-white transition-all duration-300 cursor-pointer text-[#1CA7C6] leading-none"
                        >
                          ⚡ Database Sync
                        </button>
                        <button
                          type="button"
                          onClick={() => handleBotQuery(
                            "Verify system security", 
                            "Threat detection sweep complete. All firewall nodes running securely with zero vulnerability warnings."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-yellow/20 bg-brand-yellow/5 text-[9px] font-bold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 cursor-pointer text-[#F2D400] leading-none"
                        >
                          🛡️ Security Check
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* 4. DIGITAL MARKETING & ADVERTISING DOCK */}
                {divisions[activeTab].id === "digitalmarketing" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>SYSTEM: CAMPAIGN LIFECYCLE MONITOR</span>
                      <span>PLATFORM: MULTI-CHANNEL AD MANAGER</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">CTR RATIO</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-teal font-mono mt-1">INCREASED</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">CONVERSIONS</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-cyan font-mono mt-1">OPTIMIZED</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">ROAS MULTIPLIER</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-yellow font-mono mt-1">AMPLIFIED</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Campaign Status: Dynamic real-time bid updates active</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 5. SEO & CONTENT CREATION DOCK */}
                {divisions[activeTab].id === "seo" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>SEO ANALYTICS: KEYWORD SEARCH CORE</span>
                      <span>INDEXING: FULLY CAPTURED</span>
                    </div>
                    <div className="flex items-end justify-between gap-5 h-20 px-2 py-1">
                      {/* Pure visual ranking bars without numeric axes or values */}
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-[#12B5B0] rounded-t h-[45%] shadow-[0_0_10px_#12B5B0]" />
                        </div>
                        <span className="text-[8px] text-white/35 font-mono">Baseline</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-[#1CA7C6] rounded-t h-[70%] shadow-[0_0_10px_#1CA7C6]" />
                        </div>
                        <span className="text-[8px] text-white/35 font-mono">Optimized</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-brand-yellow rounded-t h-[95%] shadow-[0_0_10px_#F2D400]" />
                        </div>
                        <span className="text-[8px] text-white/35 font-mono">Projected</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Insight: Organic traffic visibility showing positive index growth</span>
                      <span className="font-mono font-bold text-brand-yellow">UPWARD TREND</span>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
