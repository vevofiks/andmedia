"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const aircraftRef = useRef<SVGSVGElement>(null);
  
  // Vector network paths fading out
  const routeLinesRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax movement on the sunset backdrop image
      gsap.fromTo(bgImageRef.current,
        { y: "-10%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // 2. Slow flight of the aircraft silhouette across the sunset sky
      gsap.fromTo(aircraftRef.current,
        { x: "-20%", y: "40%", scale: 0.7, opacity: 0.3, rotation: -5 },
        {
          x: "120%",
          y: "20%",
          scale: 0.95,
          opacity: 0.8,
          rotation: 8,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );

      // 3. Global network lines slowly fading/flowing in the sunset distance
      routeLinesRef.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(line,
          { strokeDashoffset: 800, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 0.25,
            duration: 3,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      });

      // 4. Reveal text content
      gsap.fromTo(textContentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative overflow-hidden h-[75vh] min-h-[500px] flex items-center bg-[#070b12] text-white select-none"
    >
      {/* 1. Full-Bleed Parallax Sunset Dubai Skyline Backdrop */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-[120%] pointer-events-none z-0">
        <Image
          src="/images/cta-dubai.png"
          alt="AND Media Dubai Skyline Sunset Documentary Backdrop"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Luxury Vignette & Dark Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/90 via-[#070b12]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/60" />
      </div>

      {/* 2. Delicate Global Network Lines fading into sunset sky */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30" viewBox="0 0 1000 500" fill="none">
        <path
          ref={(el) => { if (el) routeLinesRef.current[0] = el; }}
          d="M 50 350 Q 300 250 550 220 T 950 180"
          stroke="#12B5B0"
          strokeWidth="1.5"
          strokeDasharray="800"
          strokeDashoffset="800"
        />
        <path
          ref={(el) => { if (el) routeLinesRef.current[1] = el; }}
          d="M 100 420 Q 400 320 620 280 T 900 120"
          stroke="#F2D400"
          strokeWidth="1"
          strokeDasharray="800"
          strokeDashoffset="800"
        />
      </svg>

      {/* 3. Slow flying Aircraft Silhouette glides in the clouds */}
      <svg
        ref={aircraftRef}
        className="absolute w-32 h-16 pointer-events-none z-10 opacity-50"
        viewBox="0 0 128 64"
        fill="none"
      >
        {/* Sleek airliner vector path */}
        <path
          d="M120 28C110 26 80 26 60 28L30 12H20L35 28H15L10 22H5L8 30L5 38H10L15 32H35L20 48H30L60 32C80 34 110 34 120 32C125 31 125 29 120 28Z"
          fill="#070b12"
          stroke="rgba(18,181,176,0.3)"
          strokeWidth="1"
        />
      </svg>

      {/* 4. Layered Content on top */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-20">
        <div className="max-w-2xl text-left">
          
          <div ref={textContentRef} className="flex flex-col gap-6 opacity-0">
            
            <span className="text-[11px] font-extrabold text-brand-teal tracking-[0.3em] uppercase">
              THE NEXT FRONTIER
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight font-sans">
              Ready to Scale<br />
              <span className="bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-yellow bg-clip-text text-transparent">
                Your Influence?
              </span>
            </h2>
            
            <p className="text-white/60 text-base sm:text-lg font-light font-body leading-relaxed max-w-lg">
              Stop guessing where your brand belongs. Let&apos;s build a commanding presence that resonates seamlessly across regional cultures and international borders.
            </p>
            
            {/* Glowing buttons row */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#cta"
                onClick={handleContactClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-teal text-white text-[15px] font-semibold rounded-full hover:bg-brand-cyan transition-all duration-400 shadow-[0_12px_40px_rgba(18,181,176,0.25)] hover:shadow-[0_12px_40px_rgba(18,181,176,0.45)] hover:-translate-y-0.5"
              >
                {/* Glow ring */}
                <span className="absolute inset-0 rounded-full border border-brand-teal/50 animate-ping group-hover:opacity-0" style={{ animationDuration: "2.5s" }} />
                
                Schedule a Strategy Consultation
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#cta"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/10 text-white text-[15px] font-semibold rounded-full hover:border-brand-yellow/30 hover:bg-white/5 transition-all duration-400 cursor-pointer"
              >
                Request Our Portfolio
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
