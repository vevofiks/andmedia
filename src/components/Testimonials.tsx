"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoTestimonials = [
  {
    id: "nair-rb",
    name: "Anuraj Nair",
    title: "Marketing Lead",
    brand: "R&B (Apparel Group)",
    videoUrl: "https://www.youtube.com/embed/Abj2xmQQ38w",
    description: "Collaborating on premium digital out-of-home (DOOH) corridors and high-visibility media placements across regional networks to elevate the R&B brand presence.",
    accentColor: "#12B5B0",
  },
  {
    id: "hassan-filli",
    name: "Ashraf Hassan",
    title: "Brand Director",
    brand: "FiLLi Cafe",
    videoUrl: "https://www.youtube.com/embed/BGPCxD3zVlg",
    description: "Activating interactive smart-screen taxi advertising and high-impact urban transit formats to drive brand recall and local consumer engagement.",
    accentColor: "#F2D400",
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section entrance reveal
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Slide and fade cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
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
    <section ref={sectionRef} id="testimonials" className="py-24 bg-[#0A0D14] overflow-hidden select-none text-white border-b border-white/[0.04]">
      
      {/* Subtle background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#12B5B0]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10 opacity-0">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
            VERIFIED CASE STORIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none font-sans">
            High-Authority Proof
          </h2>
          <p className="text-white/45 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mt-4 font-body">
            Hear directly from regional brand leaders about their strategic media partnerships with AND Media Solutions LLC.
          </p>
        </div>

        {/* Video Testimonials Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {videoTestimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between overflow-hidden opacity-0"
            >
              {/* Dynamic glow mesh inside card */}
              <div 
                className="absolute -top-1/4 -right-1/4 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: testimonial.accentColor }}
              />

              {/* Responsive Video Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg bg-black">
                <iframe
                  src={testimonial.videoUrl}
                  title={`${testimonial.name} - ${testimonial.brand} Testimonial`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Quote Description */}
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md font-bold text-white text-[14px]"
                    style={{ backgroundColor: `${testimonial.accentColor}25`, border: `1px solid ${testimonial.accentColor}50` }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight font-sans">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12.5px] font-bold mt-0.5 tracking-wider uppercase" style={{ color: testimonial.accentColor }}>
                      {testimonial.brand}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 text-[14px] font-light leading-relaxed font-body mt-2">
                  {testimonial.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
