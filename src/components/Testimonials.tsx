"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "nair-rb",
    name: "Anuraj Nair",
    title: "Head – Brand Marketing",
    brand: "R&B",
    description: "We partnered with AND Media to integrate the in-taxi screens into our seasonal launch strategy. The ability to deploy full-motion video within a captive and immersive environment, significantly boosted the engagement. The synergy of geographic precision and long dwell time allowed us to connect with customers at the right place and time. With a hassle-free setup and transparent data, the campaign delivered on our primary goals of brand reach and app acquisitions.",
    accentColor: "#12B5B0",
  },
  {
    id: "hassan-filli",
    name: "Ashraf Hassan",
    title: "Head of Brand & Growth",
    brand: "FiLLi Cafe",
    description: "Working with AND Media Solutions on our Dubai Taxi digital screen campaign through Binary Media was a very positive experience for FiLLi Cafe. The campaign delivered a strong response and helped create meaningful emotional recall for our brand. From the creative execution to setting up the right CTA, their team was professional, proactive, and highly supportive throughout the process. More than just media buying and distribution, they helped us understand the MROI, test different approaches, and refine the campaign to achieve the best possible results. We truly value their expertise and would be happy to work with them again in the future.",
    accentColor: "#F2D400",
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 60, rotationX: 10 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 lg:py-32 bg-[#0A0D14] relative overflow-hidden select-none border-b border-white/[0.04] perspective-[1000px]">
      {/* Atmospheric Background Effects */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#12B5B0]/5 to-transparent pointer-events-none" />
      <div className="absolute left-1/4 top-0 w-[800px] h-[800px] bg-[#1CA7C6]/[0.015] rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Minimalist Premium Header */}
        <div className="mb-20">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
            STRATEGIC PARTNERSHIPS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white tracking-tighter leading-[1.05] font-sans max-w-3xl">
            Trusted by Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12B5B0] to-white/60">Brand Leaders</span>
          </h2>
        </div>

        {/* Editorial Layout for Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="relative opacity-0 group flex flex-col h-full transform-gpu"
            >
              {/* Massive Decorative Quote */}
              <div 
                className="absolute -top-[70px] -left-[30px] text-[200px] font-serif leading-none opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none select-none"
                style={{ color: testimonial.accentColor }}
              >
                &ldquo;
              </div>

              <div className="relative z-10 flex flex-col h-full border-l-[3px] border-white/[0.03] pl-8 sm:pl-12 group-hover:border-[#12B5B0]/40 transition-colors duration-700">
                <p className="text-white/80 text-[18px] sm:text-[20px] lg:text-[22px] font-light leading-[1.7] font-serif mb-12">
                  {testimonial.description}
                </p>

                <div className="mt-auto flex items-center gap-5">
                  <div 
                    className="w-[68px] h-[68px] rounded-full flex items-center justify-center font-bold text-white text-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                  >
                    <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundColor: testimonial.accentColor }} />
                    <div className="absolute inset-0 border-[1px] opacity-40 rounded-full" style={{ borderColor: testimonial.accentColor }} />
                    <span className="relative z-10 text-shadow-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-[22px] font-black text-white leading-tight font-sans tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[13px] font-bold tracking-widest uppercase mt-1.5" style={{ color: testimonial.accentColor }}>
                      {testimonial.title}
                    </p>
                    <p className="text-[13px] text-white/40 mt-1 tracking-wider uppercase font-medium">
                      {testimonial.brand}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
