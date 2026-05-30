"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Understand",
    desc: "Deep market research and audience analysis across regions.",
    stat: "100+ Data Sources",
    statLabel: "Analyzed Per Campaign",
    color: "from-brand-teal to-brand-cyan"
  },
  {
    number: "02",
    title: "Strategize",
    desc: "Craft data-driven media plans with precision targeting.",
    stat: "98.4% Accuracy",
    statLabel: "Targeting Precision",
    color: "from-brand-cyan to-brand-teal"
  },
  {
    number: "03",
    title: "Activate",
    desc: "Deploy campaigns across OOH, in-flight, and digital channels.",
    stat: "50+ Channels",
    statLabel: "Simultaneous Reach",
    color: "from-brand-teal to-brand-yellow"
  },
  {
    number: "04",
    title: "Optimize",
    desc: "Real-time performance tracking and media mix optimization.",
    stat: "24/7 Real-Time",
    statLabel: "Live Dashboard Feeds",
    color: "from-brand-cyan to-brand-yellow"
  },
  {
    number: "05",
    title: "Amplify",
    desc: "Scale winning strategies to new markets and formats.",
    stat: "3.2x Avg. ROI",
    statLabel: "Return on Ad Spend",
    color: "from-brand-yellow to-brand-teal"
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const lineGlowRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1. Desktop Animation Layout (screens >= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 1,
          },
        });

        // Timeline Progress Line & Laser Glow Width Expansion in sync
        tl.fromTo([lineProgressRef.current, lineGlowRef.current],
          { scaleX: 0 },
          { scaleX: 1, ease: "none", duration: 8 }
        );

        // Sequential activation of each step as the timeline line crosses it
        steps.forEach((_, i) => {
          const startPoint = (i * 1.6);

          tl.to(circlesRef.current[i], {
            borderColor: i === 4 ? "#F2D400" : "#12B5B0",
            backgroundColor: "#ffffff",
            boxShadow: i === 4 
              ? "0 0 30px rgba(242, 212, 0, 0.4)" 
              : "0 0 30px rgba(18, 181, 176, 0.4)",
            scale: 1.2,
            duration: 1,
            ease: "power2.out"
          }, startPoint)
          
          .to(circlesRef.current[i].querySelector(".step-num"), {
            color: i === 4 ? "#F2D400" : "#12B5B0",
            scale: 1.05,
            duration: 1
          }, startPoint)

          .to(stepsRef.current[i], {
            opacity: 1,
            y: 0,
            duration: 1.2
          }, startPoint)

          .fromTo(statsRef.current[i],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.5)" },
            startPoint + 0.3
          );
        });

        tl.to(bgGlowRef.current, {
          scale: 1.3,
          x: "15%",
          backgroundColor: "rgba(242, 212, 0, 0.05)",
          duration: 8,
          ease: "sine.inOut"
        }, 0);
      });

      // 2. Mobile/Tablet Responsive Animation Layout (screens < 1024px)
      mm.add("(max-width: 1023px)", () => {
        steps.forEach((_, i) => {
          // Circle activation triggered individually when the step enters viewport
          gsap.fromTo(circlesRef.current[i],
            { scale: 0.95, borderColor: "rgba(7, 17, 31, 0.1)", boxShadow: "none" },
            {
              scale: 1.15,
              borderColor: i === 4 ? "#F2D400" : "#12B5B0",
              backgroundColor: "#ffffff",
              boxShadow: i === 4 
                ? "0 0 25px rgba(242, 212, 0, 0.3)" 
                : "0 0 25px rgba(18, 181, 176, 0.3)",
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: circlesRef.current[i],
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );

          // Number color pulse
          gsap.fromTo(circlesRef.current[i].querySelector(".step-num"),
            { color: "rgba(7, 17, 31, 0.25)" },
            {
              color: i === 4 ? "#F2D400" : "#12B5B0",
              duration: 0.6,
              scrollTrigger: {
                trigger: circlesRef.current[i],
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );

          // Card slide-up & opacity entry
          gsap.fromTo(stepsRef.current[i],
            { opacity: 0.3, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stepsRef.current[i],
                start: "top 82%",
                toggleActions: "play none none reverse",
              }
            }
          );

          // Statistic block bounce entry
          gsap.fromTo(statsRef.current[i],
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: statsRef.current[i],
                start: "top 84%",
                toggleActions: "play none none reverse",
              }
            }
          );
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-white overflow-hidden relative py-16 lg:py-24 select-none">
      
      {/* Dynamic Evolving Background Graphic */}
      <div ref={bgGlowRef} className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 select-none">
          <span className="inline-block text-[12px] font-extrabold text-brand-teal tracking-[0.25em] uppercase mb-4">
            OUR STRATEGIC BLUEPRINT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark tracking-[-0.03em] leading-[1.1] font-sans">
            Where Strategy Meets{" "}
            <span className="bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-teal bg-clip-text text-transparent">Storytelling</span>
          </h2>
          <p className="text-brand-dark/45 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mt-4 font-body">
            A linear progression of strategic milestones built to guarantee authority, trust, and uncompromised market reach.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative mt-12 lg:mt-20 px-4">
          
          {/* Main Background Connecting Line (Desktop Only - z-0 to sit behind grid) */}
          <div className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-[2.5px] bg-brand-dark/5 pointer-events-none z-0" />
          
          {/* Active growing line (Desktop Only - z-10 to sit behind grid) */}
          <div
            ref={lineProgressRef}
            className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-yellow origin-left scale-x-0 pointer-events-none z-10"
          />

          {/* Active line glowing laser blur track (Desktop Only - z-10 to sit behind grid) */}
          <div
            ref={lineGlowRef}
            className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-[6px] bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-yellow origin-left scale-x-0 pointer-events-none z-10 blur-[5px] opacity-70"
          />

          {/* Steps Grid - stacked at z-20 to cleanly sit ON TOP of connecting lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-20">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { if (el) stepsRef.current[i] = el; }}
                className="flex flex-col items-center text-center group transition-all duration-500 opacity-60 lg:translate-y-4"
              >
                {/* Circle step number indicator wrapper */}
                <div className="relative mb-6">
                  {/* Outer circle - bg-white & z-30 ensures progress lines run cleanly behind */}
                  <div
                    ref={(el) => { if (el) circlesRef.current[i] = el; }}
                    className="w-[84px] h-[84px] rounded-full border border-brand-dark/10 flex items-center justify-center bg-white shadow-sm transition-all duration-500 relative z-30 group-hover:shadow-[0_10px_35px_rgba(18,181,176,0.15)] group-hover:border-brand-teal/40"
                  >
                    <span className="step-num text-2xl font-extrabold text-brand-dark/30 tracking-tight transition-colors duration-500 font-sans">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text Panel */}
                <h3 className="text-xl font-bold text-brand-dark mb-2 tracking-tight font-sans">
                  {step.title}
                </h3>
                <p className="text-brand-dark/50 text-[14px] leading-relaxed font-light font-body max-w-[220px]">
                  {step.desc}
                </p>

                {/* Dynamic Statistic Block */}
                <div
                  ref={(el) => { if (el) statsRef.current[i] = el; }}
                  className="mt-5 p-3.5 bg-brand-soft rounded-2xl border border-brand-dark/5 w-full max-w-[190px]"
                >
                  <span className="block text-base font-extrabold text-brand-dark font-sans leading-none tracking-tight">
                    {step.stat}
                  </span>
                  <span className="block text-[9px] text-brand-dark/40 font-bold uppercase tracking-wider mt-1 leading-none">
                    {step.statLabel}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
