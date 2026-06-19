"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Home Box", src: "/clients/Home Box.png", vars: { "--h-desktop": "72px", "--h-mobile": "54px" } },
  { name: "Joy Alukkas", src: "/clients/Joy Alukkas.webp", vars: { "--h-desktop": "35px", "--h-mobile": "27px" } },
  { name: "Marmum", src: "/clients/Marmum-Logo.webp", vars: { "--h-desktop": "54px", "--h-mobile": "40px" } },
  { name: "Saudi Tourism", src: "/clients/sauditourism.png", vars: { "--h-desktop": "44px", "--h-mobile": "32px" } },
  { name: "Abu Dhabi Tourism", src: "/clients/Abu-Dhabi.png", vars: { "--h-desktop": "52px", "--h-mobile": "38px" } },
  { name: "Dubai Tourism", src: "/clients/dubai.png", vars: { "--h-desktop": "64px", "--h-mobile": "48px" } },
  { name: "Emirates", src: "/clients/pngegg.png", vars: { "--h-desktop": "64px", "--h-mobile": "48px" } },
  { name: "Neom", src: "/clients/neom.png", vars: { "--h-desktop": "80px", "--h-mobile": "60px" } },
  { name: "R&B", src: "/clients/rb.svg", vars: { "--h-desktop": "52px", "--h-mobile": "38px" } }
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
                className="flex-shrink-0 px-8 md:px-14 flex items-center justify-center h-20 md:h-28 group cursor-pointer"
              >
                {/* Clean, uniform floating image structure */}
                <div 
                  style={brand.vars as React.CSSProperties}
                  className="relative h-[var(--h-mobile)] md:h-[var(--h-desktop)] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out transform flex items-center justify-center"
                >
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
