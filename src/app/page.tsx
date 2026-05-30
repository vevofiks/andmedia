import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import TechServices from "@/components/TechServices";
import TrustStrip from "@/components/TrustStrip";
import ProcessSection from "@/components/ProcessSection";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <TechServices />
        <TrustStrip />
        <ProcessSection />
        <GlobalReach />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <ConsultModal />
    </>
  );
}
