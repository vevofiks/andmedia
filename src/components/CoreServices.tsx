"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
  {
    iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    title: "Global Brand\nExpansion Strategy",
    description: "Identify high-impact airports, cities, and travel corridors to expand your brand globally with high prestige.",
    link: "Learn More",
    num: "01",
    accentGrad: "from-[#12B5B0] to-[#1CA7C6]",
    accentHoverText: "group-hover:text-[#12B5B0]",
    iconBg: "bg-[#12B5B0]/10 text-[#12B5B0] group-hover:bg-[#12B5B0] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(18,181,176,0.4)]",
  },
  {
    iconPath: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
    title: "Print Media\nStrategy",
    description: "Take your brand into the world's most trusted, high-prestige publications with absolute authority.",
    link: "Learn More",
    num: "02",
    accentGrad: "from-[#1CA7C6] to-[#12B5B0]",
    accentHoverText: "group-hover:text-[#1CA7C6]",
    iconBg: "bg-[#1CA7C6]/10 text-[#1CA7C6] group-hover:bg-[#1CA7C6] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(28,167,198,0.4)]",
  },
  {
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    title: "Cross-Cultural\nBrand Marketing",
    description: "Orchestrate bespoke campaigns that resonate deeply across diverse audiences and drive absolute ROI.",
    link: "Learn More",
    num: "03",
    accentGrad: "from-[#F2D400] to-[#E5A900]",
    accentHoverText: "group-hover:text-[#F2D400]",
    iconBg: "bg-[#F2D400]/10 text-[#F2D400] group-hover:bg-[#F2D400] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(242,212,0,0.4)]",
  },
];

export default function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade-in reveal
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });
      // Staggered cards reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: i * 0.12,
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
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
    <section ref={sectionRef} id="core-services" className="relative section-padding bg-[#0A0D14] py-24 overflow-hidden select-none text-white border-b border-white/[0.04]">
      
      {/* HUD Accent Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Header Block */}
        <div ref={titleRef} className="text-center mb-20 opacity-0">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
            OUR CORE SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-[-0.03em] leading-[1.08] mb-6">
            Strategic Solutions.{" "}
            <span className="bg-gradient-to-r from-[#12B5B0] via-[#1CA7C6] to-[#12B5B0] bg-clip-text text-transparent bg-[size:200%_auto] animate-pulse">
              Global Impact.
            </span>
          </h2>
          <p className="text-white/60 text-[16px] sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Architecting end-to-end media and brand transformation assets across regional borders, high-impact media formats, and global cultures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group relative overflow-hidden bg-white/[0.02] rounded-3xl p-8 lg:p-10 border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(18,181,176,0.12)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 cursor-pointer opacity-0"
            >
              {/* Premium Top Neon Border line that fills on hover */}
              <div className={`absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r ${service.accentGrad} group-hover:w-full transition-all duration-500`} />

              {/* Large Stylized Editorial Index Number */}
              <span className="absolute top-6 right-8 text-5xl font-black text-white/[0.02] group-hover:text-white/[0.06] transition-all duration-300 font-sans select-none">
                {service.num}
              </span>

              {/* Glowing SVG Icon Wrapper */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-115 ${service.iconBg} transition-all duration-500`}>
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                </svg>
              </div>

              {/* Expanding Accent bar */}
              <div className={`w-8 h-1 bg-gradient-to-r ${service.accentGrad} rounded-full mb-6 group-hover:w-16 transition-all duration-500`} />

              {/* Card Title */}
              <h3 className={`text-2xl font-black text-white leading-tight mb-4 whitespace-pre-line tracking-tight ${service.accentHoverText} transition-colors duration-300`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-[14px] leading-relaxed mb-8 font-light font-body">
                {service.description}
              </p>

              {/* Interaction Link */}
              <a 
                href="#cta" 
                onClick={handleContactClick}
                className={`inline-flex items-center gap-2 text-[13px] font-bold ${service.accentHoverText} transition-all duration-300`}
              >
                {service.link}
                <svg className="w-4 h-4 translate-y-[0.5px] group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
