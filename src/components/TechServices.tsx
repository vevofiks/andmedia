"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const divisions = [
  {
    id: "mediascape",
    name: "MediaScape",
    subtitle: "Strategic Amplification & Digital Expansion",
    color: "#12B5B0", // Teal
    services: [
      "Digital Marketing",
      "Website Development",
      "Data-Driven Advertising",
      "Creative Visuals"
    ],
    description: "Navigate global media environments with surgical precision. We build end-to-end digital amplification engines, blending high-prestige creative visuals with mathematical media planning to capture uncompromised consumer attention.",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
  },
  {
    id: "codecraft",
    name: "CodeCraft Solutions",
    subtitle: "Enterprise Software Design & Development",
    color: "#1CA7C6", // Cyan
    services: [
      "Custom Software Solutions",
      "Software Design and Development"
    ],
    description: "Architecting high-frequency, fail-safe software systems. From proprietary microservices to custom multi-tenant applications, we craft pristine, performance-optimized codebases built to scale infinitely.",
    iconPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
  },
  {
    id: "techinsight",
    name: "Tech Insight Suite",
    subtitle: "Business Intelligence & Machine Analytics",
    color: "#F2D400", // Yellow
    services: [
      "Business Intelligence Solutions",
      "Predictive Analytics",
      "Data Strategy Consulting"
    ],
    description: "Transforming fragmented metrics into authoritative corporate leverage. Deploy advanced predictive modeling algorithms and rich business intelligence dashboards that identify market shifts before they occur.",
    iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
  },
  {
    id: "datavision",
    name: "Data Vision Wing",
    subtitle: "Analytics, Visualization & Cyber Defense",
    color: "#12B5B0", // Teal
    services: [
      "Data Analytics",
      "Data Visualization Services",
      "Cybersecurity Solutions"
    ],
    description: "Establish absolute data sovereignty and dynamic visual oversight. We combine real-time sensory data dashboards with hardened cybersecurity protocols to protect and illuminate your enterprise assets.",
    iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.958 11.958 0 0112 2.714z"
  },
  {
    id: "aichatbots",
    name: "AI Chatbots & Agents",
    subtitle: "Conversational Intelligence & Workflows",
    color: "#1CA7C6", // Cyan
    services: [
      "Intelligent Virtual Assistants",
      "Conversational Workflow Automations",
      "LLM Model Training & Tuning",
      "Linguistic Persona Design"
    ],
    description: "Supercharge your brand engagement with hyper-personalized conversational models. We build production-grade LLM-powered AI Chatbots capable of executing complex transactional APIs with zero latency.",
    iconPath: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M12 2.25c-5.385 0-9.75 3.582-9.75 8 0 2.2 1.087 4.19 2.85 5.58-.2 1.34-1.077 3.5-1.077 3.5s2.464-.26 4.7-1.78c1.012.44 2.112.7 3.277.7 5.385 0 9.75-3.582 9.75-8s-4.365-8-9.75-8z"
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
    { sender: "bot", text: "Welcome to AND Media Solutions AI Console. Click any audit chip below to run a real-time system check." }
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
    <section ref={sectionRef} id="digital-tech" className="relative w-full bg-brand-dark text-white py-24 select-none overflow-hidden">
      
      {/* Dynamic tech net background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,181,176,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(18,181,176,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10 mb-20 opacity-0">
          <div>
            <span className="text-[11px] font-extrabold text-brand-teal tracking-[0.3em] uppercase">NEXT-GEN DIGITAL SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-white tracking-tight leading-none mt-2 font-sans">
              Dynamic Solutions.
            </h2>
          </div>
          <p className="text-white/40 text-[14px] sm:text-[15px] font-light max-w-sm font-body leading-relaxed">
            Enterprise software systems, data engineering, digital campaign engines, and smart AI models built for uncompromised market leadership.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-12 gap-10 items-stretch opacity-0">
          
          {/* LEFT SIDEBAR: Horizontal Tab Controls (5 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-extrabold text-white/30 uppercase tracking-[0.2em] mb-2 px-1">
              Select Division
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
                      activeTab === idx ? "translate-x-1 text-brand-teal" : ""
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
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: divisions[activeTab].color }} />
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* DYNAMIC PRESENTATION CONSOLE AREA */}
              <div className="mt-8 border border-white/5 rounded-2xl bg-brand-dark/80 p-5 overflow-hidden min-h-[220px] flex flex-col justify-between relative shadow-inner">
                
                {/* 1. MEDIASCAPE DOCK */}
                {divisions[activeTab].id === "mediascape" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full animate-fade-in">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>SYSTEM: CAMPAIGN AMPLIFICATION MONITOR</span>
                      <span>REGION: DUBAI / REGIONAL GCC</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">CTR LIFT</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-teal font-mono mt-1">+14.2%</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">ENGAGEMENT RATE</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-cyan font-mono mt-1">87.4%</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase font-mono">CONVERSION LIFT</span>
                        <span className="text-xl sm:text-2xl font-black text-brand-yellow font-mono mt-1">+28.6%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Status: MediaScape optimization active.</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 2. CODECRAFT SOLUTIONS DOCK */}
                {divisions[activeTab].id === "codecraft" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>COMPILER: ENTERPRISE BUILD TERMINAL</span>
                      <span>SECURE DEPLOYMENT PROTOCOL</span>
                    </div>
                    <div className="font-mono text-[9.5px] text-brand-cyan/90 py-2 flex flex-col gap-1 select-none">
                      <span>&gt; npm run deploy --prod</span>
                      <span className="text-white/60">✓ Compiled successfully | build time: 1.4s</span>
                      <span className="text-brand-yellow">&gt; Software Architecting system checklist ok.</span>
                      <span>&gt; Core API: 12ms Latency threshold verified.</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Uptime: 99.999% | Cloudflare Secure Edge SSL</span>
                      <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 3. TECH INSIGHT DOCK */}
                {divisions[activeTab].id === "techinsight" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>PREDICTIVE ENGINE: MULTI-REGION SALES INTEL</span>
                      <span>MODEL ACCURACY: 99.4%</span>
                    </div>
                    <div className="flex items-end justify-between gap-5 h-20 px-2 py-1">
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-brand-teal rounded-t h-[50%] shadow-[0_0_10px_#12B5B0]" />
                        </div>
                        <span className="text-[7.5px] text-white/35 font-mono">Q1</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-brand-cyan rounded-t h-[75%] shadow-[0_0_10px_#1CA7C6]" />
                        </div>
                        <span className="text-[7.5px] text-white/35 font-mono">Q2</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-white/5 rounded-t h-full flex items-end">
                          <div className="w-full bg-brand-yellow rounded-t h-[95%] shadow-[0_0_10px_#F2D400]" />
                        </div>
                        <span className="text-[7.5px] text-white/35 font-mono">Q3 (Proj)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Consulting Insight: Market demand expected +24% GCC.</span>
                      <span className="font-mono font-bold text-brand-yellow">TRENDING UP</span>
                    </div>
                  </div>
                )}

                {/* 4. DATA VISION WING DOCK */}
                {divisions[activeTab].id === "datavision" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>SECURITY LAYER: FIREWALL MONITOR</span>
                      <span>ACTIVE SCANNING</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                        <span className="text-[9.5px] text-white/50 font-mono">Threat Detections</span>
                        <span className="text-[12px] font-black text-green-400 font-mono">0 ACTIVE</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                        <span className="text-[9.5px] text-white/50 font-mono">Data Sovereignty</span>
                        <span className="text-[12px] font-black text-brand-teal font-mono">SECURE</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/50 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                      <span>Threat status: Clean. Advanced visualizations active.</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 5. CONVERSATIONAL AI & CHATBOT DOCK (FULLY FUNCTIONAL INTERACTIVE CHAT) */}
                {divisions[activeTab].id === "aichatbots" && (
                  <div className="flex flex-col justify-between h-full gap-4 w-full">
                    
                    {/* Chat console header */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/5 pb-2">
                      <span>AI CONSOLE: INTERACTIVE WORKFLOW</span>
                      <span>LLM: CHATBOT AGENT CORE</span>
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
                          onClick={() => handleBotQuery(
                            "Optimize my ad budget", 
                            "Analyzing GCC marketing corridors. Recommending shifting 14% print media surplus into DOOH Airport assets to lift direct CTR by +4.8%."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-teal/20 bg-brand-teal/5 text-[9px] font-bold hover:bg-brand-teal hover:text-white transition-all duration-300 cursor-pointer text-brand-teal leading-none"
                        >
                          💸 Budget Audit
                        </button>
                        <button
                          onClick={() => handleBotQuery(
                            "Audit system latency", 
                            "CodeCraft compiler returns excellent build status. Core API server checked: 12ms latency, secure routing protocols 100% stable."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 text-[9px] font-bold hover:bg-brand-cyan hover:text-white transition-all duration-300 cursor-pointer text-brand-cyan leading-none"
                        >
                          ⚡ Performance Check
                        </button>
                        <button
                          onClick={() => handleBotQuery(
                            "Verify security firewall status", 
                            "Data Vision Wing threat detector indicates: Zero active breach vectors. Advanced visualization monitoring in GCC nodes: Secure."
                          )}
                          className="px-2.5 py-1.5 rounded-lg border border-brand-yellow/20 bg-brand-yellow/5 text-[9px] font-bold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 cursor-pointer text-brand-yellow leading-none"
                        >
                          🛡️ Cyber Security Audit
                        </button>
                      </div>
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
