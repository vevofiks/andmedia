"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
      )
        .fromTo(
          headingRef.current?.querySelectorAll(".word") || [],
          { y: 80, opacity: 0, rotateX: 15 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { scale: 0.85, opacity: 0, x: 60 },
          { scale: 1, opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
          "-=1.2"
        );

      // Floating animation for the globe
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-soft pt-20"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/[0.04] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8 max-w-xl z-10">
            <div ref={eyebrowRef} className="opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-[12px] font-bold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                International Media Planning
              </span>
            </div>

            <div ref={headingRef} className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-brand-dark leading-[1.05] tracking-[-0.03em]">
                <span className="word inline-block opacity-0">Global</span>{" "}
                <span className="word inline-block opacity-0">Scale,</span>
                <br />
                <span className="word inline-block opacity-0">Without</span>{" "}
                <span className="word inline-block opacity-0">the</span>{" "}
                <span className="word inline-block opacity-0 bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
                  Guesswork.
                </span>
              </h1>
            </div>

            <div ref={descRef} className="opacity-0">
              <p className="text-lg md:text-xl text-brand-dark/60 leading-relaxed max-w-lg font-light">
                We unite international media strategy and planning across regions
                and platforms. Every placement delivers measurable impact at
                scale.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <a
                href="#process"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-teal text-white text-[15px] font-semibold rounded-full hover:bg-brand-cyan transition-all duration-400 hover:shadow-[0_12px_40px_rgba(18,181,176,0.35)] hover:-translate-y-0.5"
              >
                Explore Our Approach
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              <a
                href="#cta"
                className="group inline-flex items-center gap-2.5 px-8 py-4 border-2 border-brand-dark/10 text-brand-dark text-[15px] font-semibold rounded-full hover:border-brand-teal/30 hover:bg-brand-teal/5 transition-all duration-400"
              >
                Request Portfolio
              </a>
            </div>

            {/* Stats mini row */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-brand-dark tracking-tight">
                  50+
                </span>
                <span className="text-[12px] text-brand-dark/40 font-medium uppercase tracking-wider">
                  Countries
                </span>
              </div>
              <div className="w-px h-10 bg-brand-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-brand-dark tracking-tight">
                  500+
                </span>
                <span className="text-[12px] text-brand-dark/40 font-medium uppercase tracking-wider">
                  Campaigns
                </span>
              </div>
              <div className="w-px h-10 bg-brand-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-brand-dark tracking-tight">
                  2B+
                </span>
                <span className="text-[12px] text-brand-dark/40 font-medium uppercase tracking-wider">
                  Impressions
                </span>
              </div>
            </div>
          </div>

          {/* Right: Globe Visual */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end opacity-0">
            <div className="relative w-full max-w-[580px] aspect-square">
              <Image
                src="/images/hero-globe.png"
                alt="Global media network visualization with Dubai skyline"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 580px"
              />
              {/* Floating accent dots */}
              <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-brand-yellow animate-pulse-dot" />
              <div className="absolute top-[30%] right-[8%] w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse-dot [animation-delay:0.5s]" />
              <div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-brand-cyan animate-pulse-dot [animation-delay:1s]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
