"use client";

import Image from "next/image";

interface FooterLinkItem {
  label: string;
  href: string;
  isModal?: boolean;
}

interface FooterLinkCategory {
  title: string;
  links: FooterLinkItem[];
}

const footerLinkCategories: FooterLinkCategory[] = [
  {
    title: "Services",
    links: [
      { label: "Media Planning", href: "#core-services" },
      { label: "OOH & DOOH", href: "#core-services" },
      { label: "In-Flight Ads", href: "#core-services" },
      { label: "Transit Advertising", href: "#core-services" },
      { label: "Global Expansion", href: "#core-services" },
      { label: "Airport Ads", href: "#core-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#global-reach" },
      { label: "Our Approach", href: "#process" },
      { label: "Case Studies", href: "#video-showcase" },
      { label: "Careers", href: "#cta" },
      { label: "Contact", href: "#cta", isModal: true },
    ],
  },
];

const socialLinks = [
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/profile.php?id=61574450564715",
    path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" 
  },
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/and.media_solutions/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" 
  },
  { 
    label: "Twitter", 
    href: "https://x.com/AndMediaSolx",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
  },
];

export default function Footer() {
  
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <footer className="bg-[#070b12] text-white border-t border-white/[0.04] select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="AND Media Solutions" 
                width={120} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm mb-8 font-light font-body">
              AND Media Solutions delivers global media strategy and advertising solutions. We connect brands with audiences across corridors, formats, and cultures.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#12B5B0]/20 transition-all duration-300 group">
                  <svg className="w-4 h-4 text-white/40 group-hover:text-[#12B5B0] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinkCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-[13px] font-bold text-white/70 uppercase tracking-[0.15em] mb-6">{category.title}</h4>
              <ul className="space-y-3.5">
                {category.links.map((link) => (
                  <li key={link.label}>
                    {link.isModal ? (
                      <a 
                        href={link.href} 
                        onClick={handleContactClick}
                        className="text-[14px] text-white/35 hover:text-[#12B5B0] transition-colors duration-300 font-light font-body"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-[14px] text-white/35 hover:text-[#12B5B0] transition-colors duration-300 font-light font-body"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row (Redirects to Custom Form modal) */}
        <div className="flex flex-wrap items-center gap-6 py-8 border-t border-white/8 mb-8">
          <a 
            href="mailto:andmedia057@gmail.com" 
            onClick={handleContactClick}
            className="flex items-center gap-2 text-white/40 hover:text-[#12B5B0] transition-colors text-[14px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            andmedia057@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-white/15" />
          <span className="flex items-center gap-2 text-white/40 text-[14px]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Dubai, United Arab Emirates
          </span>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          <p className="text-[13px] text-white/25 font-light">
            © {new Date().getFullYear()} AND Media Solutions. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15">
            Crafted with precision for global impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
