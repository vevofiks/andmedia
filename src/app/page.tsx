import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CoreServices from "@/components/CoreServices";
import TrustStrip from "@/components/TrustStrip";
import ProcessSection from "@/components/ProcessSection";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <CoreServices />
        <TrustStrip />
        <ProcessSection />
        <GlobalReach />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
