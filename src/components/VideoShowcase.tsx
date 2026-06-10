"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  label: string;
  value: string;
}

interface Campaign {
  id: string;
  brand: string;
  sector: string;
  title: string;
  description: string;
  youtubeId: string;
  stats: Metric[];
  accentColor: string;
}

const campaigns: Campaign[] = [
  {
    id: "joyalukkas",
    brand: "Joyalukkas",
    sector: "Luxury Retail",
    title: "Teal & Gold Luxury DOOH",
    description: "High-impact digital screen rollout targeting affluent shoppers during peak festive seasons across high-traffic Dubai corridors.",
    youtubeId: "8S_Uf3DCSxc",
    stats: [
      { label: "CTR", value: "7.2%" },
      { label: "Impressions", value: "2.4M+" },
      { label: "Recall", value: "High" }
    ],
    accentColor: "#F2D400", // Gold/Yellow
  },
  {
    id: "fillicafe",
    brand: "FiLLi Cafe",
    sector: "Food & Beverage",
    title: "Brand Recall & Growth",
    description: "Dynamic full-motion campaign on Dubai transit screens targeting daily commuters, driving high engagement and franchise visits.",
    youtubeId: "uKY8n5ISq48", // Using the provided URL
    stats: [
      { label: "MROI", value: "4.5x" },
      { label: "Dwell Time", value: "15 Min" },
      { label: "Sentiment", value: "+42%" }
    ],
    accentColor: "#12B5B0", // Teal
  },
  {
    id: "rb-fashion",
    brand: "R&B Fashion",
    sector: "Apparel & Retail",
    title: "Seasonal Launch Screen Strategy",
    description: "Geographically targeted digital out-of-home media campaign driving seasonal promotions and high-intent app acquisitions.",
    youtubeId: "aS3mH30i-K0",
    stats: [
      { label: "App Installs", value: "+38%" },
      { label: "Dwell Time", value: "18 Min" },
      { label: "Reach", value: "1.8M+" }
    ],
    accentColor: "#1CA7C6", // Cyan
  }
];

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoCardsRef = useRef<HTMLDivElement[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the container
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Stagger animate cards
      if (gridRef.current) {
        const cards = videoCardsRef.current.filter(Boolean);
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation for active modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <section ref={sectionRef} id="video-showcase" className="py-24 lg:py-32 bg-[#07090E] relative overflow-hidden select-none border-b border-white/[0.02]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#12B5B0]/20 to-transparent" />
      <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] bg-[#12B5B0]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 w-[600px] h-[600px] bg-[#1CA7C6]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10 opacity-0">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="inline-block text-[11px] font-extrabold text-[#12B5B0] tracking-[0.3em] uppercase mb-4 bg-[#12B5B0]/10 px-4 py-1.5 rounded-full border border-[#12B5B0]/20">
              CAMPAIGN EXECUTION
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none font-sans">
              Performance In Motion
            </h2>
          </div>
          <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md font-body">
            High-impact visual evidence of our strategic media deployments driving real-world brand engagement.
          </p>
        </div>

        {/* Video Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {campaigns.map((campaign, idx) => (
            <div
              key={campaign.id}
              ref={(el) => { if (el) videoCardsRef.current[idx] = el; }}
              className="relative group opacity-0 flex flex-col h-full"
            >
              {/* Premium Glow effect behind card */}
              <div 
                className="absolute -inset-0.5 rounded-[26px] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[8px] pointer-events-none" 
                style={{ 
                  background: `linear-gradient(to bottom, ${campaign.accentColor}33, transparent)` 
                }}
              />
              
              {/* Outer Card structure */}
              <div className="relative flex flex-col h-full bg-[#0A0D14] border border-white/5 rounded-[24px] p-4 sm:p-5 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.02]">
                
                {/* Media Container with Thumbnail & Custom Play Button */}
                <div 
                  onClick={() => setActiveVideo(campaign.youtubeId)}
                  className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-black shadow-inner cursor-pointer group/media"
                >
                  {/* Overlay for premium vignette and color treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 transition-opacity duration-500 group-hover/media:opacity-40" />
                  <div className="absolute inset-0 bg-[#12B5B0]/5 pointer-events-none group-hover/media:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  
                  {/* YouTube high quality thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${campaign.youtubeId}/hqdefault.jpg`}
                    alt={`${campaign.brand} Campaign Showcase`}
                    className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover/media:scale-105 transition-transform duration-700 ease-out grayscale-[15%] group-hover/media:grayscale-0"
                    loading="lazy"
                  />
                  
                  {/* Large Premium Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center">
                      {/* Ripple Rings */}
                      <div 
                        className="absolute w-16 h-16 rounded-full opacity-20 scale-100 group-hover/media:scale-150 group-hover/media:opacity-0 transition-all duration-1000 ease-out" 
                        style={{ border: `2px solid ${campaign.accentColor}` }}
                      />
                      <div 
                        className="absolute w-16 h-16 rounded-full opacity-40 scale-100 group-hover/media:scale-125 transition-transform duration-700 ease-out" 
                        style={{ border: `1px solid ${campaign.accentColor}` }}
                      />
                      
                      {/* Inner Play Button Circle */}
                      <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover/media:scale-110 group-hover/media:bg-white text-black">
                        <svg className="w-5 h-5 ml-0.5 fill-current text-[#0A0D14]" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Index Counter bottom-right */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="font-mono text-xs text-white/50 tracking-widest font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow mt-6">
                  {/* Brand & Heading */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-black text-white leading-tight font-sans tracking-tight mb-1">
                      {campaign.brand}
                    </h3>
                    <p className="text-[13px] font-medium text-white/40 tracking-wide">
                      {campaign.title}
                    </p>
                  </div>

                  {/* Campaign Description */}
                  <p className="text-white/60 text-sm font-light leading-relaxed font-body">
                    {campaign.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Cinematic Fullscreen Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-opacity duration-300 animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Area */}
          <div className="absolute inset-0" />

          {/* Close Button Top Right */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video player"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container Wrapper */}
          <div 
            className="relative w-full max-w-[1000px] aspect-video px-4 md:px-8 z-[105] transform scale-95 transition-transform duration-500 animate-scaleUp"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking player itself
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/10 bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Cinematic Campaign Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
