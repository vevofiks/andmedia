"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const navLinks = [
  { label: "Services", href: "#core-services" },
  { label: "Mapping", href: "#map-services" },
  { label: "Our Approach", href: "#process" },
  { label: "Global Reach", href: "#global-reach" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Option A: subtle background appears only after scrolling 150-200px
      setScrolled(window.scrollY > 150);
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

  useEffect(() => {
    if (!menuRef.current) return;

    const links = menuRef.current.querySelectorAll("a");

    if (mobileOpen) {
      // 1. Kill any active animations to prevent overlap conflicts
      gsap.killTweensOf(menuRef.current);
      gsap.killTweensOf(links);

      // 2. Set visible state before running animation
      gsap.set(menuRef.current, { visibility: "visible" });

      // 3. Smooth height and border color transition
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        borderTopColor: "rgba(255, 255, 255, 0.05)",
        duration: 0.5,
        ease: "power3.out",
      });

      // 4. Staggered fade and slide-in for links
      gsap.fromTo(
        links,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.05,
        }
      );
    } else {
      // 1. Kill active animations
      gsap.killTweensOf(menuRef.current);
      gsap.killTweensOf(links);

      // 2. Animate close transition
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        borderBottomColor: "rgba(255, 255, 255, 0)",
        borderTopColor: "rgba(255, 255, 255, 0)",
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, { visibility: "hidden" });
        },
      });
    }
  }, [mobileOpen]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[9999] w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#07111F]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : mobileOpen
          ? "bg-[#090C15] border-b border-white/10 py-5"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <nav
        ref={navRef}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image 
            src="/AND-mediawithoutllc.png" 
            alt="AND Media Solutions" 
            width={1200} 
            height={184} 
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-9" : "h-12"
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
              className="relative text-[13.5px] font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors duration-300 group font-sans"
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
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-teal text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full hover:bg-brand-cyan transition-all duration-300 hover:shadow-[0_8px_25px_rgba(18,181,176,0.3)] hover:-translate-y-0.5 font-sans"
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
          <span className={`w-6 h-[2px] transition-all duration-300 bg-white ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-6 h-[2px] transition-all duration-300 bg-white ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] transition-all duration-300 bg-white ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>

        {/* Mobile Dropdown */}
        <div
          ref={menuRef}
          className="absolute left-0 right-0 top-full bg-[#090C15]/95 backdrop-blur-lg overflow-hidden lg:hidden border-b border-t border-transparent"
          style={{ height: 0, opacity: 0, visibility: "hidden" }}
        >
          <div className="flex flex-col gap-4 pb-6 pt-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[13.5px] font-bold tracking-wider uppercase text-white/80 hover:text-brand-teal transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => {
                setMobileOpen(false);
                handleContactClick(e);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal text-white text-[13px] font-extrabold tracking-wider uppercase rounded-full mt-2 font-sans"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
