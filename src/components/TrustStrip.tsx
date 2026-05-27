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
  { name: "Saudi Tourism", src: "/clients/Saudi-tourism.png" },
  { name: "Abu Dhabi Tourism", src: "/clients/abu-dhabi-tourism-culture-black.png" },
  { name: "Dubai Tourism", src: "/clients/dubai-tourism-s-300x191.png" },
  { name: "Emirates", src: "/clients/emirats-logo-black-e1751979752318-300x133.png" },
  { name: "Neom", src: "/clients/neom-logo-e1751979720156-300x123.png" }
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white border-y border-gray-100 opacity-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-center text-[12px] font-bold text-brand-dark/30 tracking-[0.25em] uppercase mb-10">
          Trusted by Global Brands
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div ref={stripRef} className="flex animate-marquee items-center">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 px-10 md:px-14 flex items-center justify-center h-24 group cursor-pointer">
                <div className="relative h-12 w-32 md:w-40 opacity-40 group-hover:opacity-100 transition-all duration-500 hover:scale-105 transform">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
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
