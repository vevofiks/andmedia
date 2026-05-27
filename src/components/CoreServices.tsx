"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
  {
    iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    title: "Global Brand\nExpansion Strategy",
    description: "Identify high-impact airports, cities, and travel corridors to expand your brand globally.",
    link: "Learn More",
  },
  {
    iconPath: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
    title: "Print Media\nStrategy",
    description: "Take your brand into the world's most trusted publications with prestige and authority.",
    link: "Learn More",
  },
  {
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    title: "Cross-Cultural\nBrand Marketing",
    description: "Run campaigns that work across diverse audiences and drive real business results.",
    link: "Learn More",
  },
];

export default function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: i * 0.15,
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="core-services" className="section-padding bg-brand-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-[12px] font-bold text-brand-teal tracking-[0.25em] uppercase mb-4">Our Core Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark tracking-[-0.03em] leading-[1.1] mb-5">
            Strategic Solutions.{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">Global Impact.</span>
          </h2>
          <p className="text-brand-dark/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            End-to-end brand marketing solutions across borders, formats, and cultures.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, index) => (
            <div key={index} ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(18,181,176,0.12)] transition-all duration-500 hover:-translate-y-1 cursor-pointer opacity-0 border border-gray-100/80">
              <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-400">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                </svg>
              </div>
              <div className="w-8 h-1 bg-brand-yellow rounded-full mb-5" />
              <h3 className="text-xl font-bold text-brand-dark leading-tight mb-3 whitespace-pre-line tracking-tight">{service.title}</h3>
              <p className="text-brand-dark/50 text-[15px] leading-relaxed mb-6 font-light">{service.description}</p>
              <a href="#cta" className="inline-flex items-center gap-2 text-brand-teal text-[14px] font-semibold group-hover:gap-3 transition-all duration-300">
                {service.link}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
