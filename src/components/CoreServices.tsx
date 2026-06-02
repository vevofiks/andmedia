"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
  {
    image: "/images/ooh-billboard.png",
    title: "OOH & DOOH\nAdvertising",
    description: "Make your brand unmissable. We leverage high-impact outdoor and digital out-of-home placements to activate strategic brand amplification across the Middle East.",
    link: "Learn More",
    num: "01",
    accentGrad: "from-[#12B5B0] to-[#F2D400]",
    accentColor: "#12B5B0",
    tag: "OUTDOOR MEDIA",
  },
  {
    image: "/images/inflight-ad.png",
    title: "In-Flight\nAdvertising",
    description: "Attention, at 30,000 feet. Inflight advertising places your message in a focused, captive environment — every placement connects, resonates, and stays top-of-mind.",
    link: "Learn More",
    num: "02",
    accentGrad: "from-[#1CA7C6] to-[#12B5B0]",
    accentColor: "#1CA7C6",
    tag: "IN-FLIGHT MEDIA",
  },
  {
    image: "/images/taxi-ad.png",
    title: "Taxi\nAdvertising",
    description: "Put your brand in motion. Our taxi branding services place your message on high-traffic routes — ensuring consistent, high-frequency visibility on every ride.",
    link: "Learn More",
    num: "03",
    accentGrad: "from-[#F2D400] to-[#E5A900]",
    accentColor: "#F2D400",
    tag: "TRANSIT MEDIA",
  },
  {
    image: "/images/global-brand-expansion.png",
    title: "Global Brand\nExpansion Strategy",
    description: "Identify high-impact airports, cities, and travel corridors to expand your brand globally with high prestige.",
    link: "Learn More",
    num: "04",
    accentGrad: "from-[#12B5B0] to-[#1CA7C6]",
    accentColor: "#12B5B0",
    tag: "GLOBAL STRATEGY",
  },
  {
    image: "/images/print-media-strategy.png",
    title: "Print Media\nStrategy",
    description: "Take your brand into the world's most trusted, high-prestige publications with absolute authority.",
    link: "Learn More",
    num: "05",
    accentGrad: "from-[#1CA7C6] to-[#12B5B0]",
    accentColor: "#1CA7C6",
    tag: "PRINT & EDITORIAL",
  },
  {
    image: "/images/cross-cultural-marketing.png",
    title: "Cross-Cultural\nBrand Marketing",
    description: "Orchestrate bespoke campaigns that resonate deeply across diverse audiences and drive absolute ROI.",
    link: "Learn More",
    num: "06",
    accentGrad: "from-[#F2D400] to-[#E5A900]",
    accentColor: "#F2D400",
    tag: "CULTURAL REACH",
  },
];

export default function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.96 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
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
            End-to-end media and brand transformation across regional borders, high-impact formats, and global cultures.
          </p>
        </div>

        {/* Cards Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group relative overflow-hidden rounded-3xl min-h-[380px] cursor-pointer opacity-0"
            >
              {/* Full-bleed service image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark gradient overlay — stronger at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060810]/95 via-[#060810]/55 to-[#060810]/20 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Accent colour tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at bottom left, ${service.accentColor}, transparent 70%)` }}
              />

              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${service.accentGrad} group-hover:w-full transition-all duration-700 ease-out`} />

              {/* Card content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between">

                {/* Top row: index number + tag */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm"
                    style={{ color: service.accentColor }}
                  >
                    {service.tag}
                  </span>
                  <span className="text-4xl font-black text-white/[0.07] group-hover:text-white/[0.13] transition-all duration-300 font-sans leading-none">
                    {service.num}
                  </span>
                </div>

                {/* Bottom content block */}
                <div className="flex flex-col gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white leading-tight whitespace-pre-line tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/65 text-[13.5px] leading-relaxed font-light max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-out">
                    {service.description}
                  </p>
                  <a
                    href="#cta"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-2 text-[12.5px] font-bold transition-all duration-300 mt-1 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
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
          ))}
        </div>

      </div>
    </section>
  );
}
