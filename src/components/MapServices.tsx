"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MappingOffer {
  title: string;
  description: string;
}

interface MappingService {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  overview: string;
  url: string;
  buttonLabel: string;
  accentColor: string;
  accentGrad: string;
  offers: MappingOffer[];
  benefits: string[];
}

const mappingServicesData: MappingService[] = [
  {
    id: "custom-mapping",
    tag: "EASYMAP.AE",
    title: "Location Intelligence & Custom Mapping Solutions",
    subtitle: "Turn complex spaces into clear, intuitive visual journeys.",
    overview: "Location Intelligence & Custom Mapping Solutions help destinations, venues, and developments make their spaces easy to understand at a glance. We design tailored 2D and 3D maps that combine accurate layout, key landmarks, and clear wayfinding into one coherent visual system. From shopping centres and luxury resorts to tourist attractions, real estate projects, and stadiums, our custom maps are built to improve orientation, enhance visitor experience, and support clearer communication.",
    url: "https://easymap.ae",
    buttonLabel: "Visit EasyMap.ae",
    accentColor: "#12B5B0", // Teal
    accentGrad: "from-[#12B5B0] to-[#1CA7C6]",
    offers: [
      {
        title: "Custom 2D and 3D Maps",
        description: "Bespoke cartographic maps for malls, resorts, tourist spots, real estate developments, campuses, and event venues. Every map is designed around your actual layout, branding, and visitor needs."
      },
      {
        title: "Location Intelligence & Structure",
        description: "We analyse how people move through your space and translate that into maps that highlight entrances, exits, key routes, zones, and points of interest. The result is a visual tool that makes your environment understandable to first-time visitors and regular users alike."
      },
      {
        title: "Interactive Mapping Experiences",
        description: "Digital maps that work on websites, kiosks, and displays, featuring interactive markers, layered information, and pop-ups. Ideal for destinations that want to help users explore in depth, not just find a single point."
      },
      {
        title: "Wall Maps and Presentation Assets",
        description: "High-quality wall maps and large-format prints for offices, visitor centres, sales galleries, and homes. These pieces work as both functional tools and design elements, supporting presentations, tours, and day-to-day orientation."
      }
    ],
    benefits: [
      "Visitors and guests can find what they need more quickly and with less frustration",
      "Teams responsible for operations, sales, and guest services gain a shared visual reference of the space",
      "Stakeholders can discuss layout, extensions, and improvements using a common, accurate map",
      "Your destination or development gains a distinctive visual identity tied to its real-world geography"
    ]
  },
  {
    id: "real-estate-platform",
    tag: "EMRE.EASYMAP.AE",
    title: "Real Estate Media Intelligence & Mapping Platform",
    subtitle: "See developers, projects, infrastructure, and future communities through one connected map.",
    overview: "The Real Estate Media Intelligence & Mapping Platform is built for brokers, agencies, and developers who need a single, clear view of a fast-moving property market. It brings together developers, projects, transport links, and emerging communities into one interactive mapping environment. Instead of jumping between static brochures, PDFs, and separate data sources, you work within a single visual platform that shows what exists today and what is coming next.",
    url: "https://emre.easymap.ae",
    buttonLabel: "Explore EMRE Platform",
    accentColor: "#1CA7C6", // Cyan
    accentGrad: "from-[#1CA7C6] to-[#12B5B0]",
    offers: [
      {
        title: "Developer and Project Mapping",
        description: "A mapped view of key developers and their active projects, with the ability to explore locations, surrounding communities, and nearby landmarks. Brokers and agencies can quickly show clients where each project sits and how it relates to the wider city."
      },
      {
        title: "Infrastructure and Connectivity Insight",
        description: "Layers for metro lines, rail routes, major roads, and upcoming infrastructure that will influence accessibility and long-term value. This makes it easier to explain how a project is connected now and how that connectivity will evolve."
      },
      {
        title: "Emerging Communities and New Destinations",
        description: "Visibility of developing residential and mixed-use areas before they become fully established. This helps professionals identify opportunity zones earlier and understand how the urban fabric is expanding."
      },
      {
        title: "Configurable, Client-Ready Views",
        description: "The platform can be configured for different user types, from individual brokers to agencies and developers. Branded views and customised layers allow you to present information in a way that matches your own identity and priorities."
      },
      {
        title: "Presentation-Friendly Interface",
        description: "A clean, interactive map interface suitable for client meetings, investor presentations, and internal strategy sessions. Complex information becomes easier to explain when it is grounded in a clear visual context."
      }
    ],
    benefits: [
      "You can answer 'where is it?' and 'what's around it?' in seconds, not slides",
      "Teams work from a single, consistent representation of the market instead of fragmented sources",
      "Clients and investors understand projects, communities, and future plans more quickly",
      "Decisions about focus areas and priorities can be made with a better grasp of the city's real structure and direction"
    ]
  }
];

export default function MapServices() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance scroll triggers
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      gsap.fromTo(
        tabsContainerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTabChange = (idx: number) => {
    if (idx === activeTab) return;

    gsap.to(".map-tab-content", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setActiveTab(idx);
        gsap.fromTo(
          ".map-tab-content",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    });
  };

  const activeService = mappingServicesData[activeTab];

  return (
    <section
      ref={sectionRef}
      id="map-services"
      className="relative bg-[#0A0D14] py-24 select-none text-white overflow-hidden border-b border-white/[0.04]"
    >
      {/* Background visual styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(18,181,176,0.035)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10 w-full">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
            INTELLIGENT MAPPING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-[-0.03em] leading-[1.08] mb-6">
            Location Intelligence &{" "}
            <span className="bg-gradient-to-r from-[#12B5B0] via-[#1CA7C6] to-[#12B5B0] bg-clip-text text-transparent">
              Mapping Solutions.
            </span>
          </h2>
          <p className="text-white/55 text-[16px] sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Turn complex spaces and property landscapes into clear, navigable, and beautiful visual systems that drive strategic insights.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          ref={tabsContainerRef}
          className="flex justify-center mb-12 lg:mb-16 opacity-0"
        >
          <div className="flex bg-[#0d121c] border border-white/5 p-1.5 rounded-full max-w-full overflow-x-auto scrollbar-none">
            {mappingServicesData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(idx)}
                className={`px-6 sm:px-8 py-3 rounded-full text-[12.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#12B5B0] text-white shadow-[0_4px_20px_rgba(18,181,176,0.25)]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {tab.id === "custom-mapping" ? "Custom Mapping" : "Real Estate Platform"}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div ref={contentRef} className="map-tab-content opacity-0 grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Information (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              {/* Tag & Title */}
              <div>
                <span
                  className="inline-block text-[10px] font-extrabold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-md border border-white/10 bg-black/35 font-mono"
                  style={{ color: activeService.accentColor }}
                >
                  {activeService.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-white/45 text-[13.5px] sm:text-[14.5px] font-semibold tracking-wide uppercase mt-2" style={{ color: activeService.accentColor }}>
                  {activeService.subtitle}
                </p>
              </div>

              {/* Overview */}
              <p className="text-white/65 text-[15px] sm:text-[16px] font-light leading-relaxed font-body">
                {activeService.overview}
              </p>

              {/* What We Offer / Offers Grid */}
              <div>
                <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-[0.15em] mb-4">
                  {activeService.id === "custom-mapping" ? "What We Offer" : "What the Platform Includes"}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeService.offers.map((offer, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: activeService.accentColor }}
                        />
                        <h5 className="text-[15px] font-bold text-white group-hover:text-white transition-colors">
                          {offer.title}
                        </h5>
                      </div>
                      <p className="text-white/50 text-[12.5px] leading-relaxed font-light">
                        {offer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              <div>
                <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-[0.15em] mb-3">
                  Why It Matters
                </h4>
                <ul className="space-y-2.5">
                  {activeService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13.5px] text-white/70 font-light">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: activeService.accentColor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
              <a
                href={activeService.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-teal text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full hover:bg-brand-cyan transition-all duration-300 hover:shadow-[0_8px_25px_rgba(18,181,176,0.3)] hover:-translate-y-0.5 font-sans"
              >
                {activeService.buttonLabel} ↗
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-consult-modal"))}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 font-sans cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Image Display Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-stretch">
            <div className="bg-[#0b1019] border border-white/5 rounded-3xl p-4 flex flex-col justify-between h-full relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
              {/* Decorative radial overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${activeService.accentColor} 0%, transparent 70%)`
                }}
              />

              {/* Tab 1 Realistic Image Display */}
              {activeService.id === "custom-mapping" && (
                <div className="flex flex-col justify-between h-full w-full gap-5 z-10 relative">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      EASYMAP WAYFINDING PREVIEW
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-mono text-white/55">ACTIVE INSTANCE</span>
                    </div>
                  </div>

                  {/* Kiosk Display Frame */}
                  <div className="relative flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <Image
                      src="/images/easymap-wayfinding.png"
                      alt="EasyMap Interactive Wayfinding Kiosk"
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    {/* Glowing Tech Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#12B5B0]/5 via-transparent to-transparent h-1/2 w-full animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />
                    {/* Dark gradient vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Detail Panel */}
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-[#12B5B0] uppercase tracking-wider font-mono">
                      DEPLOYMENT MODEL: HIGH-FIDELITY 3D
                    </span>
                    <p className="text-white/60 text-[11.5px] leading-relaxed font-light font-body">
                      Designed around your actual floorplan layout, branding guidelines, and visitor wayfinding requirements for malls, resorts, and stadiums.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2 Realistic Image Display */}
              {activeService.id === "real-estate-platform" && (
                <div className="flex flex-col justify-between h-full w-full gap-5 z-10 relative">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      EMRE ANALYTICS PLATFORM
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-mono text-white/55">SYSTEM ONLINE</span>
                    </div>
                  </div>

                  {/* Platform Interface Display Frame */}
                  <div className="relative flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <Image
                      src="/images/real-estate-platform.png"
                      alt="EMRE Real Estate Media Intelligence Platform"
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    {/* Glowing Tech Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1CA7C6]/5 via-transparent to-transparent h-1/2 w-full animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />
                    {/* Dark gradient vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Platform Status Bar */}
                  <div className="bg-[#1CA7C6]/5 border border-[#1CA7C6]/15 rounded-2xl p-4 flex items-center justify-between text-[11px] font-mono text-[#1CA7C6] gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[7.5px] uppercase text-white/45 tracking-wider font-bold leading-none mb-1">
                        DATABASE CLOUD CONNECT
                      </span>
                      <span>Connected: GCC Real Estate Node v2.4</span>
                    </div>
                    <span className="bg-[#1CA7C6]/10 px-3 py-1 rounded border border-[#1CA7C6]/20 font-bold uppercase tracking-wider text-[9px] shrink-0">
                      SECURE HTTPS
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
