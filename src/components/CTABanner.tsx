"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(imageRef.current, { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      });

      // Parallax on the image
      gsap.to(imageRef.current, {
        y: -40,
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-brand-dark to-[#0d2137]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] py-20 lg:py-0">
          {/* Left: Content */}
          <div ref={contentRef} className="relative z-10 opacity-0">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              Ready to Scale{" "}
              <span className="bg-gradient-to-r from-brand-yellow to-[#FFE066] bg-clip-text text-transparent">Your Influence?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10 font-light">
              Stop guessing where your brand belongs. Let&apos;s build a presence that resonates across cultures and continents.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:communicate@andmedia.me"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-teal text-white text-[15px] font-semibold rounded-full hover:bg-brand-cyan transition-all duration-400 hover:shadow-[0_12px_40px_rgba(18,181,176,0.35)] hover:-translate-y-0.5">
                Schedule a Strategy Consultation
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:communicate@andmedia.me"
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/15 text-white text-[15px] font-semibold rounded-full hover:border-brand-yellow/40 hover:bg-white/5 transition-all duration-400">
                Request Our Portfolio
              </a>
            </div>
          </div>

          {/* Right: Dubai skyline image */}
          <div ref={imageRef} className="relative h-[350px] lg:h-[500px] opacity-0">
            <Image
              src="/images/cta-dubai.png"
              alt="Dubai skyline at sunset with aircraft"
              fill
              className="object-cover object-center rounded-3xl lg:rounded-l-3xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent rounded-3xl lg:rounded-l-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
