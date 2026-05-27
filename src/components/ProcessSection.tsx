"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Understand", desc: "Deep market research and audience analysis across regions." },
  { number: "02", title: "Strategize", desc: "Craft data-driven media plans with precision targeting." },
  { number: "03", title: "Activate", desc: "Deploy campaigns across OOH, in-flight, and digital channels." },
  { number: "04", title: "Optimize", desc: "Real-time performance tracking and media mix optimization." },
  { number: "05", title: "Amplify", desc: "Scale winning strategies to new markets and formats." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, {
          scaleX: 1, duration: 1.5, ease: "power2.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(step, { y: 40, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: i * 0.12,
          scrollTrigger: { trigger: step, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-20 opacity-0">
          <span className="inline-block text-[12px] font-bold text-brand-teal tracking-[0.25em] uppercase mb-4">Our Approach</span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark tracking-[-0.03em] leading-[1.1] mb-5">
            Where Strategy Meets{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">Storytelling</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div ref={lineRef} className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-teal/20 via-brand-teal to-brand-cyan/20 origin-left" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} ref={(el) => { if (el) stepsRef.current[i] = el; }}
                className="flex flex-col items-center text-center group opacity-0">
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-[84px] h-[84px] rounded-full border-2 border-brand-teal/20 flex items-center justify-center bg-white group-hover:border-brand-teal group-hover:shadow-[0_0_30px_rgba(18,181,176,0.15)] transition-all duration-500 relative z-10">
                    <span className="text-2xl font-extrabold text-brand-teal tracking-tight">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 tracking-tight">{step.title}</h3>
                <p className="text-brand-dark/45 text-[14px] leading-relaxed font-light max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
