"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Application Penetration Testing",
    description: "Deep, manual exploitation of complex web applications to identify business logic bypasses, injection issues, and authorization flaws."
  },
  {
    title: "API Penetration Testing",
    description: "Rigorous testing of REST, GraphQL, and SOAP API endpoints focusing on authentication, rate limiting, and mass assignment vulnerabilities."
  },
  {
    title: "Authentication & Authorization Testing",
    description: "Verification of token logic (JWT, OAuth), session handling, and credential policies to prevent session hijacking and account takeovers."
  },
  {
    title: "Business Logic Testing",
    description: "Analyzing application workflows to find flaws in financial transactions, data flow constraints, and custom logic rules."
  },
  {
    title: "Access Control & Privilege Escalation",
    description: "Validating horizontal and vertical access rules to ensure tenant isolation and prevent unauthorized administrative access."
  },
  {
    title: "Injection and Data Exposure Testing",
    description: "Testing database layers, templating engines, and memory stacks for SQLi, XSS, SSRF, and sensitive data leakage."
  },
  {
    title: "Secure Configuration Review",
    description: "Evaluating HTTP headers, CORS configurations, security policies, and third-party dependencies to eliminate attack surfaces."
  }
];

const targetSectors = [
  { title: "SaaS platforms", desc: "Protect client data and multi-tenant isolation layers." },
  { title: "Fintech & payment systems", desc: "Ensure secure transaction logic and compliance readiness." },
  { title: "E-commerce businesses", desc: "Secure checkout workflows, APIs, and client records." },
  { title: "Enterprise web applications", desc: "Thorough access control validation for internal platforms." },
  { title: "Agencies handling client data", desc: "Validate security posture before hosting sensitive payloads." },
  { title: "Startups & API Providers", desc: "Prepare for audits, funding rounds, or third-party integrations." }
];

const businessRisks = [
  { title: "Financial Loss", desc: "Direct losses from theft, remediation costs, and operational disruption." },
  { title: "Regulatory Penalties", desc: "Heavy fines under data protection laws (GDPR, PCI-DSS, local mandates)." },
  { title: "Operational Downtime", desc: "System locks, service restoration lags, and resource diversion." },
  { title: "Reputational Damage", desc: "Loss of investor, customer, and partner trust that takes years to rebuild." }
];

export default function CybersecurityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const researchersRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  // Terminal log simulation state
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const logSteps = [
    { text: "$ npx offensive-audit --target andmedia.me/api", color: "text-[#E5A900]" },
    { text: "[*] Port scanning and service discovery initiated...", color: "text-white/40" },
    { text: "[+] Found open port: 443 (HTTPS) - Cloudflare Edge Proxy", color: "text-[#12B5B0]" },
    { text: "[*] Inspecting API authentication flow (OAuth2/JWT)...", color: "text-white/40" },
    { text: "[!] WARNING: API allows anonymous GraphQL introspections", color: "text-red-400" },
    { text: "[*] Injecting payloads into JSON parser parameters...", color: "text-white/40" },
    { text: "[+] Access validation: Tenant isolation level SECURE", color: "text-[#12B5B0]" },
    { text: "[*] Auditing business logic rate-limiting mechanisms...", color: "text-white/40" },
    { text: "[+] Found rate limiting threshold active on authentication endpoints", color: "text-[#12B5B0]" },
    { text: "[+] Threat report compiled. Vulnerabilities cataloged.", color: "text-green-400" }
  ];

  useEffect(() => {
    // Stagger terminal print simulation
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => {
        if (prev < logSteps.length - 1) return prev + 1;
        return 0; // Loop logs
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero entrance
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".hero-fade") || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, ease: "power3.out" }
      );

      // 2. Terminal bounce in
      gsap.fromTo(
        terminalRef.current,
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      // 3. Services Grid stagger
      gsap.fromTo(
        servicesRef.current?.querySelectorAll(".service-card") || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 85%"
          }
        }
      );

      // 4. Researchers highlight
      gsap.fromTo(
        researchersRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: researchersRef.current,
            start: "top 85%"
          }
        }
      );

      // 5. Report Mockup slide in
      gsap.fromTo(
        reportRef.current?.querySelectorAll(".report-fade") || [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reportRef.current,
            start: "top 85%"
          }
        }
      );

      // 6. Target Sectors
      gsap.fromTo(
        targetRef.current?.querySelectorAll(".target-card") || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 85%"
          }
        }
      );

      // 7. Why it matters
      gsap.fromTo(
        whyRef.current?.querySelectorAll(".risk-card") || [],
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 85%"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <div ref={containerRef} className="bg-[#070b12] text-white min-h-screen overflow-hidden select-none">
      <Navbar />

      {/* Cyber Grid Lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,169,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(229,169,0,0.01)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5A900]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div ref={heroRef} className="lg:col-span-7 flex flex-col gap-6 text-left max-w-2xl">
            <div className="hero-fade opacity-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5A900]/10 border border-[#E5A900]/25 text-[#E5A900] text-[10px] font-bold tracking-[0.2em] uppercase font-sans">
                🛡️ Cybersecurity Services
              </span>
            </div>

            <h1 className="hero-fade opacity-0 text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-black leading-[1.08] tracking-[-0.03em] font-sans">
              Security Tested <br />
              <span className="bg-gradient-to-r from-[#E5A900] via-yellow-400 to-[#E5A900] bg-clip-text text-transparent">
                Before It’s Exploited.
              </span>
            </h1>

            <p className="hero-fade opacity-0 text-base sm:text-lg text-white/50 leading-relaxed font-body font-light">
              Cybersecurity is not optional. It is infrastructure. Modern businesses rely on web applications and APIs to serve customers, manage operations, and process sensitive data. Waiting for a breach to discover weaknesses is a risk most organisations cannot afford.
              <span className="block mt-3 text-white/70 font-medium">
                We provide professional Web Application and API Penetration Testing designed to identify vulnerabilities before they become incidents.
              </span>
            </p>

            <div className="hero-fade opacity-0 flex flex-wrap gap-4 mt-2">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5A900] text-black text-[13px] font-extrabold tracking-wider uppercase rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-md font-sans"
              >
                Request an Assessment
              </button>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white text-[13px] font-bold tracking-wider uppercase rounded-full hover:border-[#E5A900]/30 hover:bg-white/[0.02] transition-all duration-300 font-sans"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Dynamic HUD Simulator */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div
              ref={terminalRef}
              className="w-full max-w-[500px] bg-black/50 border border-white/5 rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-md opacity-0 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[9px] text-white/30 font-mono ml-2">SECURITY MODULE V2.1</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E5A900]/10 border border-[#E5A900]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A900] animate-pulse" />
                  <span className="text-[8px] font-mono font-bold text-[#E5A900]">OFFENSIVE AUDIT</span>
                </div>
              </div>

              {/* Console log box */}
              <div className="bg-[#05080f] rounded-2xl p-4 min-h-[220px] font-mono text-[10.5px] leading-relaxed flex flex-col gap-2.5 overflow-hidden border border-white/5">
                {logSteps.slice(0, activeLogIndex + 1).map((step, idx) => (
                  <div key={idx} className={step.color}>
                    {step.text}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[8.5px] text-white/30 border-t border-white/5 pt-4 mt-5">
                <span>Threat intelligence testing logs</span>
                <span className="font-mono text-[#E5A900]/60">SHIELD ENCRYPT V3</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="bg-[#090d16] py-24 border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-extrabold text-[#E5A900] tracking-[0.3em] uppercase mb-4 bg-[#E5A900]/10 px-4 py-1.5 rounded-full border border-[#E5A900]/25">
              OFFENSIVE CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-white tracking-[-0.03em] leading-tight mb-5">
              What We Do
            </h2>
            <p className="text-white/50 text-[15px] sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              We conduct manual, offensive security testing focused on real-world attack scenarios. This is not automated scanning.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="service-card opacity-0 bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-7 hover:bg-white/[0.04] hover:border-[#E5A900]/20 transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg sm:text-[19px] font-extrabold text-white tracking-tight leading-snug group-hover:text-[#E5A900] transition-colors">
                    {svc.title}
                  </h3>
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-[#E5A900]/40 transition-colors">0{i+1}</span>
                </div>
                <p className="text-white/40 text-[13.5px] leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-white/50 text-[13px] font-mono">
            [*] Each engagement involves structured manual testing by experienced security researchers.
          </div>
        </div>
      </section>

      {/* RESEARCHERS SECTION */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={researchersRef} className="opacity-0 bg-gradient-to-br from-[#0c1220]/80 to-[#070b12] border border-[#E5A900]/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(229,169,0,0.04)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="flex-1 flex flex-col gap-5 max-w-2xl">
            <span className="text-[10.5px] font-bold text-[#E5A900] tracking-[0.2em] uppercase">
              CREDENTIALS & BACKGROUND
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-white leading-tight tracking-tight">
              Experienced Offensive Security Researchers
            </h2>
            <p className="text-white/50 text-[14.5px] leading-relaxed font-light font-body">
              Our penetration testing is performed by security researchers recognised through responsible disclosure and vulnerability research programs by global technology companies including <span className="text-white font-semibold">Microsoft, Apple, OpenAI, Sony, and others.</span>
            </p>
            <p className="text-white/70 text-[14.5px] leading-relaxed font-body font-normal">
              With over 2.5 years of real-world offensive security experience, we focus on practical exploitability and business impact, not theoretical findings.
            </p>
          </div>

          <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-auto min-w-[280px]">
            {["Microsoft", "Apple", "OpenAI", "Sony"].map((partner) => (
              <div key={partner} className="bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-center font-bold tracking-wider text-white/50 hover:text-[#E5A900] hover:border-[#E5A900]/25 transition-all duration-300">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE SECTION */}
      <section className="bg-[#090d16] py-24 border-y border-white/[0.04]">
        <div ref={reportRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
            <span className="report-fade opacity-0 text-[11px] font-extrabold text-[#E5A900] tracking-[0.3em] uppercase mb-1">
              ACTIONABLE REPORTING
            </span>
            <h2 className="report-fade opacity-0 text-3xl sm:text-4xl lg:text-[44px] font-black leading-tight tracking-tight">
              What You Receive
            </h2>
            <p className="report-fade opacity-0 text-white/50 text-[14.5px] leading-relaxed font-light">
              Every engagement delivers a complete, structured penetration testing report suitable for both technical and executive review. Our reporting is designed to be actionable, not abstract.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              {[
                "Vulnerability title & description",
                "Risk severity classification",
                "Clear business impact mapping",
                "Affected endpoints & parameters",
                "Proof of concept (PoC)",
                "Screenshots & tech evidence",
                "Step-by-step remediation guidance",
                "Executive leadership summary"
              ].map((item, idx) => (
                <li key={idx} className="report-fade opacity-0 flex items-center gap-2.5 text-[14px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A900]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            {/* Visual report details */}
            <div className="report-fade opacity-0 w-full max-w-[420px] bg-white/[0.02] border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#E5A900]/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#E5A900]/15 flex items-center justify-center text-[#E5A900]">
                  📄
                </div>
                <div>
                  <span className="block text-[13.5px] font-extrabold text-white">PENETRATION TEST REPORT</span>
                  <span className="block text-[8px] font-mono text-white/35">CONFIDENTIAL // SECURITY AUDIT</span>
                </div>
              </div>
              <div className="space-y-3.5 py-1">
                <div className="h-2 bg-white/10 rounded w-[45%]" />
                <div className="h-2 bg-white/5 rounded w-[75%]" />
                <div className="h-12 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[8.5px] font-mono text-white/35">
                    <span>SEVERITY ANALYSIS</span>
                    <span className="text-red-400 font-bold">CRITICAL RISK</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[85%]" />
                  </div>
                </div>
                <div className="space-y-1.5 mt-4">
                  <div className="h-1.5 bg-white/5 rounded w-full" />
                  <div className="h-1.5 bg-white/5 rounded w-[90%]" />
                  <div className="h-1.5 bg-white/5 rounded w-[60%]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TARGET AND RISKS SECTION */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Who This Service Is For */}
        <div ref={targetRef}>
          <span className="inline-block text-[10.5px] font-bold text-[#E5A900] tracking-[0.2em] uppercase mb-4">
            TARGETED SOLUTIONS
          </span>
          <h2 className="text-3xl font-black text-white leading-tight mb-8">
            Who This Service Is For
          </h2>
          <div className="space-y-4">
            {targetSectors.map((sector, i) => (
              <div key={i} className="target-card opacity-0 bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.03] transition-all duration-300">
                <h3 className="text-[15.5px] font-bold text-white mb-1 tracking-tight">{sector.title}</h3>
                <p className="text-[13.5px] text-white/40 leading-relaxed font-light">{sector.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-[13.5px] text-white/50 leading-relaxed italic">
            * If your organisation stores, processes, or transmits sensitive information, structured security testing is essential.
          </div>
        </div>

        {/* Why It Matters */}
        <div ref={whyRef}>
          <span className="inline-block text-[10.5px] font-bold text-[#E5A900] tracking-[0.2em] uppercase mb-4">
            VULNERABILITY IMPACT
          </span>
          <h2 className="text-3xl font-black text-white leading-tight mb-8">
            Why It Matters
          </h2>
          <div className="space-y-4">
            {businessRisks.map((risk, i) => (
              <div key={i} className="risk-card opacity-0 bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.03] transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <h3 className="text-[15.5px] font-bold text-white tracking-tight">{risk.title}</h3>
                </div>
                <p className="text-[13.5px] text-white/40 leading-relaxed font-light">{risk.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-[#E5A900]/5 border border-[#E5A900]/15 rounded-2xl text-[14.5px] text-white/70 leading-relaxed">
            Proactive penetration testing reduces risk exposure and strengthens investor, partner, and customer confidence.
          </div>
        </div>

      </section>

      {/* FINAL ASSESSMENT CTA BANNER */}
      <section className="bg-gradient-to-b from-[#090d16] to-[#070b12] py-24 border-t border-white/[0.04] text-center px-6">
        <div className="max-w-[1400px] mx-auto">
          <span className="inline-block text-[11px] font-extrabold text-[#E5A900] tracking-[0.3em] uppercase mb-6 bg-[#E5A900]/10 px-4 py-1.5 rounded-full border border-[#E5A900]/25">
            REQUEST A SECURITY ASSESSMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
            Enterprise-grade security. <br />
            <span className="text-white/60">Reasonable pricing. Zero compromises.</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed mb-8">
            If you are unsure whether your web application or API is truly secure, the time to test is before an attacker does. Schedule a confidential consultation to discuss your security posture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E5A900] text-black text-[13px] font-extrabold tracking-wider uppercase rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-md font-sans"
            >
              Request a Security Assessment
            </button>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white text-[13px] font-bold tracking-wider uppercase rounded-full hover:border-[#E5A900]/30 hover:bg-white/[0.02] transition-all duration-300 font-sans"
            >
              Book a Confidential Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
