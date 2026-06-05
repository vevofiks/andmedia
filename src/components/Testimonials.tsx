"use client";

import { useEffect, useRef, useState } from "react";
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

const videos = [
  "https://www.youtube.com/embed/aS3mH30i-K0",
  "https://www.youtube.com/embed/uKY8n5ISq48",
  "https://www.youtube.com/embed/uKY8n5ISq48"
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const maxItems = Math.max(testimonials.length, videos.length);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-changing carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % maxItems);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [maxItems]);

  // Animate content changes
  useEffect(() => {
    if (leftCardRef.current && rightCardRef.current) {
      gsap.fromTo(leftCardRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" });
      gsap.fromTo(rightCardRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" });
    }
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex % testimonials.length];
  const activeVideo = videos[activeIndex % videos.length];

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

        {/* Two-Column Carousel Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          
          {/* Left Side: Testimonial Text */}
          <div 
            ref={leftCardRef} 
            className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl flex flex-col justify-between overflow-hidden min-h-[400px]"
          >
            {/* Dynamic glow mesh inside card */}
            <div 
              className="absolute -top-1/4 -right-1/4 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20 transition-colors duration-700"
              style={{ backgroundColor: activeTestimonial.accentColor }}
            />

            <div className="flex flex-col gap-6 text-left h-full justify-center">
              {/* Quote Icon */}
              <div className="text-6xl text-white/20 font-serif leading-none mt-2">
                &ldquo;
              </div>

              <p className="text-white/70 text-[16px] sm:text-[17px] font-light leading-relaxed font-body">
                {activeTestimonial.description}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-md font-bold text-white text-[18px] transition-colors duration-700"
                  style={{ backgroundColor: `${activeTestimonial.accentColor}25`, border: `1px solid ${activeTestimonial.accentColor}50` }}
                >
                  {activeTestimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-[19px] font-bold text-white leading-tight font-sans">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-[13px] font-bold mt-1 tracking-wider uppercase transition-colors duration-700" style={{ color: activeTestimonial.accentColor }}>
                    {activeTestimonial.title}, {activeTestimonial.brand}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Video */}
          <div 
            ref={rightCardRef} 
            className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-3 sm:p-4 backdrop-blur-md shadow-2xl flex flex-col justify-center overflow-hidden"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black border border-white/5">
              <iframe
                src={activeVideo}
                title="Video Testimonial"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: maxItems }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeIndex === idx 
                  ? "w-8 bg-[#12B5B0]" 
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
