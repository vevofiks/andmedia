"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: "OOH & DOOH",
    title: "Make Your Brand\nUnmissable.",
    description:
      "Most brands strive to be noticed. We make it happen with high-impact outdoor and digital out-of-home campaigns worldwide.",
    image: "/images/ooh-billboard.png",
    cta: "See OOH Solutions",
    accent: "from-brand-teal/80 to-brand-dark/90",
  },
  {
    tag: "IN-FLIGHT ADVERTISING",
    title: "Attention,\nAt 30,000 Feet.",
    description:
      "Your brand deserves to be noticed where attention is real. Every placement connects, resonates, and stays top-of-mind.",
    image: "/images/inflight-ad.png",
    cta: "Explore In-Flight",
    accent: "from-brand-cyan/70 to-brand-dark/90",
  },
  {
    tag: "TAXI ADVERTISING",
    title: "Put Your Brand\nin Motion.",
    description:
      "Show up where your audience moves. High-traffic routes, high-frequency visibility, and a brand always top-of-mind.",
    image: "/images/taxi-ad.png",
    cta: "Discover Taxi Ads",
    accent: "from-brand-teal/70 to-brand-dark/80",
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top row: 2 cards side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={service.tag}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden min-h-[420px] cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.accent}`}
              />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-white/70 tracking-[0.2em] uppercase">
                  {service.tag}
                </span>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed max-w-sm font-light">
                    {service.description}
                  </p>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-dark text-[13px] font-semibold rounded-full hover:bg-brand-yellow transition-all duration-300 group/btn"
                  >
                    {service.cta}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: full width card */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[2] = el;
          }}
          className="group relative rounded-3xl overflow-hidden min-h-[380px] cursor-pointer"
        >
          <Image
            src={services[2].image}
            alt={services[2].title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
            <span className="text-[11px] font-bold text-white/60 tracking-[0.2em] uppercase mb-4">
              {services[2].tag}
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.05] tracking-tight whitespace-pre-line mb-4">
              {services[2].title}
            </h3>
            <p className="text-white/65 text-[16px] leading-relaxed max-w-md font-light mb-6">
              {services[2].description}
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-white text-[14px] font-semibold rounded-full hover:bg-brand-cyan transition-all duration-300 w-fit group/btn"
            >
              {services[2].cta}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
