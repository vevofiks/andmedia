"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  "https://www.youtube.com/embed/aS3mH30i-K0",
  "https://www.youtube.com/embed/uKY8n5ISq48",
  "https://www.youtube.com/embed/uKY8n5ISq48"
];

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      videoCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.15,
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
    <section ref={sectionRef} id="video-showcase" className="py-24 bg-[#07090E] relative overflow-hidden select-none border-b border-white/[0.02]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#12B5B0]/20 to-transparent" />
      <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] bg-[#12B5B0]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 w-[600px] h-[600px] bg-[#1CA7C6]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10 opacity-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
              CAMPAIGN EXECUTION
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none font-sans">
              Performance In Motion
            </h2>
          </div>
          <p className="text-white/40 text-base font-light leading-relaxed max-w-md font-body">
            High-impact visual evidence of our strategic media deployments driving real-world brand engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((url, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) videoCardsRef.current[idx] = el; }}
              className="relative group opacity-0"
            >
              {/* Premium Card Frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[#12B5B0]/20 to-transparent rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              
              <div className="relative bg-[#0A0D14] border border-white/5 rounded-[24px] p-2 sm:p-3 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-[#12B5B0]/30 group-hover:bg-white/[0.02]">
                <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-black shadow-inner">
                  <div className="absolute inset-0 bg-[#12B5B0]/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <iframe
                    src={url}
                    title={`Campaign Showcase ${idx + 1}`}
                    className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
