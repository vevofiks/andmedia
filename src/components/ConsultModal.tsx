"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function ConsultModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      // Fade in animations
      setTimeout(() => {
        gsap.fromTo(
          ".consult-modal-bg",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
        gsap.fromTo(
          ".consult-modal-card",
          { scale: 0.9, y: 30, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
        );
      }, 50);
    };

    window.addEventListener("open-consult-modal", handleOpen);
    return () => window.removeEventListener("open-consult-modal", handleOpen);
  }, []);

  const handleClose = () => {
    gsap.to(".consult-modal-card", {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
    });
    gsap.to(".consult-modal-bg", {
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => setIsOpen(false),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 consult-modal-bg opacity-0 select-none">
      
      {/* Dark backdrop blur */}
      <div 
        onClick={handleClose} 
        className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
      />

      {/* Presentation Card container */}
      <div className="relative w-full max-w-[420px] bg-[#0A0D15] border border-white/10 rounded-3xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-xl consult-modal-card opacity-0 z-10 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle glowing color mesh mesh */}
        <div className="absolute -top-1/4 -right-1/4 w-40 h-40 bg-[#12B5B0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-40 h-40 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close */}
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-300 w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono text-[#12B5B0] font-bold tracking-[0.25em] uppercase">
            [ INQUIRY ROUTER ]
          </span>
          <h3 className="text-2xl font-black text-white mt-3 leading-tight font-sans tracking-tight">
            Connect With Our Team
          </h3>
          <p className="text-white/50 text-[13px] font-light leading-relaxed mt-2.5 font-body">
            Choose your preferred international media planning channel below to initiate a strategy audit.
          </p>
        </div>

        {/* Custom Actions */}
        <div className="flex flex-col gap-4">
          
          {/* WhatsApp Direct Option */}
          <a
            href="https://wa.me/971504990924?text=Hello%20AND%20Media%20Solutions,%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] text-2xl group-hover:scale-105 transition-transform duration-300">
              💬
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold text-white group-hover:text-[#25D366] transition-colors font-sans">
                Chat on WhatsApp
              </span>
              <span className="text-[11px] text-white/40 font-light mt-0.5 leading-none">
                Instant reply | Live planner sync
              </span>
            </div>
          </a>

          {/* Email Option */}
          <a
            href="mailto:communicate@andmedia.me?subject=Strategy%20Consultation%20Request"
            onClick={handleClose}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#12B5B0]/40 hover:bg-[#12B5B0]/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#12B5B0]/10 flex items-center justify-center text-[#12B5B0] text-xl group-hover:scale-105 transition-transform duration-300">
              ✉
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold text-white group-hover:text-[#12B5B0] transition-colors font-sans">
                Send Corporate Email
              </span>
              <span className="text-[11px] text-white/40 font-light mt-0.5 leading-none">
                Detailed briefs | RFP submissions
              </span>
            </div>
          </a>

        </div>

        {/* Modal Footer */}
        <p className="text-center text-[9.5px] text-white/20 font-mono tracking-wider mt-8 border-t border-white/5 pt-4">
          AND MEDIA SOLUTIONS • DUBAI HQ
        </p>

      </div>
    </div>
  );
}
