"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const navLinks = [
  { label: "Services", href: "#digital-tech" },
  { label: "Our Approach", href: "#process" },
  { label: "Work", href: "#global-reach" },
  { label: "About Us", href: "#core-services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.1 }
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-[9999] flex justify-center pointer-events-none transition-all duration-500 ease-in-out top-0 ${
        scrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
      }`}
    >
      <nav
        ref={navRef}
        className={`w-full pointer-events-auto transition-all duration-500 ease-in-out ${
          // Scrolled vs Top Capsular Structure
          !scrolled
            ? mobileOpen
              ? "bg-[#090C15] border-b border-white/10 shadow-2xl px-6 py-5"
              : "bg-transparent border-transparent px-6 sm:px-12 py-6 shadow-none"
            : "max-w-[1100px] bg-white/95 backdrop-blur-md border border-brand-dark/5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] rounded-full px-6 py-2"
        }`}
      >
        <div className={`flex w-full items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 lg:h-14" : "h-20"
        }`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image 
              src="/images/logo.png" 
              alt="AND Media Solutions" 
              width={100} 
              height={50} 
              className={`w-auto object-contain transition-all duration-500 h-10 ${
                scrolled ? "h-8 lg:h-8 filter invert-0" : "h-10 filter brightness-0 invert"
              }`}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-[13.5px] font-semibold tracking-wider uppercase transition-colors duration-300 group font-sans ${
                  scrolled 
                    ? "text-brand-dark/75 hover:text-brand-dark" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-teal transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a
              href="#cta"
              className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-teal text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full hover:bg-brand-cyan transition-all duration-300 hover:shadow-[0_8px_25px_rgba(18,181,176,0.3)] hover:-translate-y-0.5 font-sans`}
            >
              Let&apos;s Talk ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 select-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-dark" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[5px] !bg-white" : ""}`} />
            <span className={`w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-dark" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-dark" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[5px] !bg-white" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-96 pb-6 pt-4 mt-4 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[13.5px] font-bold tracking-wider uppercase transition-colors font-sans ${
                  scrolled || mobileOpen ? "text-white/80 hover:text-brand-teal" : "text-brand-dark/80 hover:text-brand-teal"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full mt-2 font-sans"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
