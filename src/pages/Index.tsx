import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsIndoorSection from "@/components/WhatIsIndoorSection";
import LocationsSection from "@/components/LocationsSection";
import PlansSection from "@/components/PlansSection";
import FormatsSection from "@/components/FormatsSection";
import CreationSection from "@/components/CreationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatIsIndoorSection />
      <LocationsSection />
      <PlansSection />
      <FormatsSection />
      <CreationSection />
      <HowItWorksSection />
      <ServicesSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
