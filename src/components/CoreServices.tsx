"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
  {
    image: "/images/ooh-billboard.png",
    title: "OOH and DOOH",
    subtitle: "Make Your Brand Unmissable",
    description: "Most brands strive to be noticed. We make it happen!\n\nHow? We leverage the brands where attention matters most. As a global brand marketing agency, we activate strategic planning and brand amplification across the Middle East.",
    link: "Request Consultation",
    num: "01",
    accentGrad: "from-[#12B5B0] to-[#1CA7C6]",
    accentColor: "#12B5B0",
    tag: "OOH & DOOH MEDIA",
  },
  {
    image: "/images/inflight-ad.png",
    title: "In-flight Advertising",
    subtitle: "Attention, At 30,000 Feet",
    description: "Your brand deserves to be noticed where attention is real. Inflight advertising places your message in a focused, receptive environment. Every placement is designed to connect, resonate, and stay top-of-mind.",
    link: "Request Consultation",
    num: "02",
    accentGrad: "from-[#1CA7C6] to-[#F2D400]",
    accentColor: "#1CA7C6",
    tag: "IN-FLIGHT MEDIA",
  },
  {
    image: "/images/transit-ad.png",
    title: "Transit Advertising",
    subtitle: "Put Your Brand in Motion",
    description: "Show up where your audience moves. Our transit branding advertising services place your message on high-traffic routes, ensuring consistent, high-frequency visibility. Every ride enables you to keep the brand at the top of mind, ready to be chosen.",
    link: "Request Consultation",
    num: "03",
    accentGrad: "from-[#F2D400] to-[#12B5B0]",
    accentColor: "#F2D400",
    tag: "TRANSIT MEDIA",
  },
  {
    image: "/images/global-brand-expansion.png",
    title: "Global Brand\nExpansion Strategy",
    subtitle: "Airports & Corridors",
    description: "Identify high-impact airports, cities, and travel corridors.",
    link: "Request Consultation",
    num: "04",
    accentGrad: "from-[#12B5B0] to-[#F2D400]",
    accentColor: "#12B5B0",
    tag: "EXPANSION STRATEGY",
  },
  {
    image: "/images/print-media-strategy.png",
    title: "Print Media\nStrategy",
    subtitle: "Trusted Publications",
    description: "Take your brand into the world’s most trusted publications.",
    link: "Request Consultation",
    num: "05",
    accentGrad: "from-[#1CA7C6] to-[#12B5B0]",
    accentColor: "#1CA7C6",
    tag: "PRINT STRATEGY",
  },
  {
    image: "/images/cross-cultural-marketing.png",
    title: "Cross-Cultural\nBrand Marketing",
    subtitle: "Diverse Audiences",
    description: "Run campaigns that work across diverse audiences.",
    link: "Request Consultation",
    num: "06",
    accentGrad: "from-[#F2D400] to-[#E5A900]",
    accentColor: "#F2D400",
    tag: "CROSS-CULTURAL",
  }
];

export default function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.96 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: i * 0.08,
          scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.stopPropagation();
      setActiveCard(activeCard === index ? null : index);
    } else {
      window.dispatchEvent(new CustomEvent("open-consult-modal"));
    }
  };

  return (
    <section ref={sectionRef} id="core-services" className="relative bg-[#0A0D14] py-24 overflow-hidden select-none text-white border-b border-white/[0.04]">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">

        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
            OUR CORE CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-[-0.03em] leading-[1.08] mb-6">
            Strategic Solutions.{" "}
            <span className="bg-gradient-to-r from-[#12B5B0] via-[#1CA7C6] to-[#12B5B0] bg-clip-text text-transparent">
              Global Impact.
            </span>
          </h2>
          <p className="text-white/55 text-[16px] sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            AND Media Solutions delivers media planning and brand activation across international travel corridors, high-impact digital platforms, and premium out-of-home media.
          </p>
        </div>

        {/* Cards Grid — 3 cols on desktop/large, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const isExpanded = activeCard === index;
            return (
              <div
                key={index}
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                className="group relative overflow-hidden rounded-3xl min-h-[380px] cursor-pointer opacity-0"
                onClick={(e) => handleCardClick(index, e)}
              >
                {/* Full-bleed service image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark gradient overlay — extremely dark at bottom for perfect readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#03050c]/98 via-[#03050c]/75 to-[#03050c]/30 transition-opacity duration-500 ${isExpanded ? "opacity-95" : "group-hover:opacity-95"}`} />

                {/* Accent colour tint on hover */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isExpanded ? "opacity-10" : "group-hover:opacity-10"}`}
                  style={{ background: `radial-gradient(circle at bottom left, ${service.accentColor}, transparent 70%)` }}
                />

                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${service.accentGrad} transition-all duration-700 ease-out ${isExpanded ? "w-full" : "w-0 group-hover:w-full"}`} />

                {/* Card content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between">

                  {/* Top row: index number + tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[9.5px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/10 bg-black/35 backdrop-blur-sm"
                      style={{ color: service.accentColor }}
                    >
                      {service.tag}
                    </span>
                    <span className="text-4xl font-black text-white/[0.07] group-hover:text-white/[0.13] transition-all duration-300 font-sans leading-none">
                      {service.num}
                    </span>
                  </div>

                  {/* Bottom content block */}
                  <div className="flex flex-col gap-3 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500">
                    {service.subtitle && (
                      <span className="text-[11px] font-extrabold tracking-wider uppercase opacity-80 lg:opacity-45 lg:group-hover:opacity-80 transition-opacity duration-300" style={{ color: service.accentColor }}>
                        {service.subtitle}
                      </span>
                    )}
                    <h3 className="text-2xl font-black text-white leading-tight whitespace-pre-line tracking-tight text-shadow-md">
                      {service.title}
                    </h3>
                    <p className={`text-white/85 text-[13.5px] leading-relaxed font-light overflow-hidden transition-all duration-500 ease-out ${isExpanded ? "max-h-32 opacity-100 mt-1" : "max-h-0 lg:max-h-0 opacity-0 lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100"}`}>
                      {service.description}
                    </p>
                    <a
                      href="#cta"
                      onClick={handleContactClick}
                      className={`inline-flex items-center gap-2 text-[12.5px] font-bold transition-all duration-300 mt-1 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:-translate-y-2 lg:group-hover:translate-y-0"}`}
                      style={{ color: service.accentColor }}
                    >
                      {service.link}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

              </div>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
}
