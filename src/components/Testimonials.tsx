"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "AND Media Solutions delivered a 7% CTR through their DOOH taxi campaigns — far exceeding our benchmarks. Their strategic approach to audience targeting across Dubai was exceptional.",
    author: "Marketing Director",
    company: "JoyAlukkas",
    metric: "7% CTR",
    metricLabel: "Campaign Performance",
  },
  {
    quote: "The brand recall from our in-flight and OOH campaigns was outstanding. AND Media's strategic alignment with our brand values created a seamless cross-platform presence across the region.",
    author: "Head of Brand Strategy",
    company: "R&B Fashion",
    metric: "3.2x",
    metricLabel: "Brand Recall Lift",
  },
  {
    quote: "Working with AND Media transformed our regional presence into a truly global campaign. Their expertise in cross-cultural media planning is unmatched in the industry.",
    author: "VP of Marketing",
    company: "Emaar Properties",
    metric: "45+",
    metricLabel: "Markets Activated",
  },
];

export default function Testimonials() {
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
        gsap.fromTo(card, { y: 60, opacity: 0, x: i % 2 === 0 ? -30 : 30 }, {
          y: 0, opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: i * 0.15,
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-brand-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-[12px] font-bold text-brand-teal tracking-[0.25em] uppercase mb-4">Client Stories</span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark tracking-[-0.03em] leading-[1.1]">
            Proven Results,{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">Global Trust.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(18,181,176,0.1)] transition-all duration-500 border border-gray-100/80 flex flex-col opacity-0 group">
              {/* Metric highlight */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl font-extrabold text-brand-teal">{t.metric}</span>
                <span className="text-[12px] font-medium text-brand-dark/40 uppercase tracking-wider leading-tight">{t.metricLabel}</span>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-6">
                <svg className="w-8 h-8 text-brand-teal/15 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-brand-dark/65 text-[15px] leading-[1.8] font-light italic">&ldquo;{t.quote}&rdquo;</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-cyan flex items-center justify-center">
                  <span className="text-white text-[13px] font-bold">{t.company[0]}</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-brand-dark">{t.author}</p>
                  <p className="text-[12px] text-brand-dark/40 font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
