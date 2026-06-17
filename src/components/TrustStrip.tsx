"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Home Box", src: "/clients/Home Box.png" },
  { name: "Joy Alukkas", src: "/clients/Joy Alukkas.webp" },
  { name: "Marmum", src: "/clients/Marmum-Logo.webp" },
  { name: "Saudi Tourism", src: "/clients/sauditourism.png" },
  { name: "Abu Dhabi Tourism", src: "/clients/Abu-Dhabi.png" },
  { name: "Dubai Tourism", src: "/clients/dubai.png" },
  { name: "Emirates", src: "/clients/pngegg.png" },
  { name: "Neom", src: "/clients/neom.png" },
  { name: "R&B", src: "/clients/rb.svg" }
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 92%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white border-y border-brand-dark/5 opacity-0 relative select-none overflow-hidden">
      
      {/* Decorative subtle hairline line tracks */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-brand-dark/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-brand-dark/5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial tracked title */}
        <p className="text-center text-[10.5px] font-extrabold text-[#12B5B0] tracking-[0.35em] uppercase mb-10">
          [ TRUSTED BY GLOBAL CORRIDORS ]
        </p>

        {/* Marquee Loop */}
        <div className="relative overflow-hidden py-2">
          {/* Blurred overlays for elegant fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee items-center flex-nowrap w-max">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 px-8 md:px-14 flex items-center justify-center h-20 group cursor-pointer"
              >
                {/* Clean, uniform floating image structure */}
                <div className="relative h-[32px] md:h-[42px] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out transform flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={300}
                    height={150}
                    className="object-contain filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out w-auto h-full max-w-[160px] md:max-w-[220px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
