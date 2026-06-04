"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function ConsultModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "International Media Planning",
    message: "",
  });

  const modalBgRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "International Media Planning",
        message: "",
      });
      // Fade in animations
      setTimeout(() => {
        if (modalBgRef.current && modalCardRef.current) {
          gsap.fromTo(
            modalBgRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" }
          );
          gsap.fromTo(
            modalCardRef.current,
            { scale: 0.9, y: 30, opacity: 0 },
            { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
          );
        }
      }, 50);
    };

    window.addEventListener("open-consult-modal", handleOpen);
    return () => window.removeEventListener("open-consult-modal", handleOpen);
  }, []);

  const handleClose = () => {
    if (modalCardRef.current && modalBgRef.current) {
      gsap.to(modalCardRef.current, {
        scale: 0.9,
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(modalBgRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium dispatch loading state, then show success state
    gsap.to(".consult-form-inner", {
      opacity: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        setSubmitted(true);
        gsap.fromTo(
          ".consult-success-inner",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalBgRef}
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 opacity-0 select-none"
    >
      {/* Dark backdrop blur */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Presentation Card container */}
      <div
        ref={modalCardRef}
        className="relative w-full max-w-[480px] bg-[#0A0D15] border border-white/10 rounded-3xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-xl opacity-0 z-10 flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle glowing color mesh */}
        <div className="absolute -top-1/4 -right-1/4 w-40 h-40 bg-[#12B5B0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-40 h-40 bg-[#1CA7C6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-300 w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center cursor-pointer font-sans"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="text-[10px] font-mono text-[#12B5B0] font-bold tracking-[0.25em] uppercase">
            [ INQUIRY ROUTER ]
          </span>
          <h3 className="text-2xl font-black text-white mt-3 leading-tight font-sans tracking-tight">
            Connect With Our Team
          </h3>
          <p className="text-white/50 text-[12.5px] font-light leading-relaxed mt-2 font-body">
            Initiate a strategic media planning audit with AND Media Solutions LLC.
          </p>
        </div>

        {/* Interactive Content Block */}
        {!submitted ? (
          <form onSubmit={handleFormSubmit} className="consult-form-inner flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-left">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-sans">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-[13.5px] outline-none focus:border-[#12B5B0] focus:bg-white/[0.04] transition-all font-sans"
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-sans">
                Corporate Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-[13.5px] outline-none focus:border-[#12B5B0] focus:bg-white/[0.04] transition-all font-sans"
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-sans">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your organization"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-[13.5px] outline-none focus:border-[#12B5B0] focus:bg-white/[0.04] transition-all font-sans"
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-sans">
                Target Capability
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#0E111A] border border-white/10 rounded-xl px-4 py-2.5 text-white text-[13.5px] outline-none focus:border-[#12B5B0] transition-all font-sans cursor-pointer"
              >
                <option value="International Media Planning">International Media Planning</option>
                <option value="OOH & DOOH Advertising">OOH & DOOH Advertising</option>
                <option value="In-Flight Advertising">In-Flight Advertising</option>
                <option value="Taxi Advertising">Taxi Advertising</option>
                <option value="Transit Media">Transit Media</option>
                <option value="Airport Advertising">Airport Advertising</option>
                <option value="Media Buying & Planning">Media Buying & Planning</option>
                <option value="Brand Visibility Solutions">Brand Visibility Solutions</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-sans">
                Brief Message
              </label>
              <textarea
                rows={2}
                placeholder="Describe your global campaign goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-[13.5px] outline-none focus:border-[#12B5B0] focus:bg-white/[0.04] transition-all font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#12B5B0] hover:bg-[#1CA7C6] text-white font-extrabold tracking-wider uppercase py-3 rounded-xl mt-2 transition-all duration-300 font-sans shadow-md"
            >
              Submit Request ↗
            </button>
          </form>
        ) : (
          <div className="consult-success-inner flex flex-col items-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#12B5B0]/10 border border-[#12B5B0]/20 flex items-center justify-center text-3xl text-[#12B5B0] mb-5 animate-bounce">
              ✓
            </div>
            <h4 className="text-xl font-bold text-white font-sans tracking-tight">Request Dispatched</h4>
            <p className="text-white/50 text-[13px] font-light leading-relaxed max-w-sm mt-3 font-body">
              Thank you! Your strategic brief has been securely routed. A senior media planner will contact you at your corporate email shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2 border border-white/10 hover:border-white/20 rounded-full text-white/60 hover:text-white transition-colors text-[12.5px] font-bold font-sans"
            >
              Close Window
            </button>
          </div>
        )}

        {/* Modal Footer / Direct Email Link */}
        <div className="mt-8 border-t border-white/5 pt-4 text-center">
          <p className="text-[11.5px] text-white/40 font-body">
            Or email us directly at:{" "}
            <a
              href="mailto:andmedia057@gmail.com?subject=Strategy%20Consultation%20Request"
              className="text-[#12B5B0] hover:underline font-semibold"
            >
              andmedia057@gmail.com
            </a>
          </p>
          <p className="text-[9.5px] text-white/20 font-mono tracking-wider mt-4">
            AND MEDIA SOLUTIONS LLC • DUBAI HQ
          </p>
        </div>
      </div>
    </div>
  );
}
