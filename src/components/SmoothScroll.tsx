"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    // Register GSAP ScrollTrigger if not already done
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fast start, slow end easing curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2, // Smooth, natural touch scrolling
      infinite: false,
    });

    // Update ScrollTrigger on Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Tie Lenis rendering into GSAP ticker
    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000); // lenis.raf expects milliseconds
    };
    gsap.ticker.add(gsapTickerCallback);

    // Disable GSAP lag smoothing to keep scrolling perfectly sync'd with animations
    gsap.ticker.lagSmoothing(0);

    // Add lenis instances to window for global access/debugging if needed
    (window as any).lenis = lenis;

    // Handle scroll-to click anchors smoothly with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: 0,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(gsapTickerCallback);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
