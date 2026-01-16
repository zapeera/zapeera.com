import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";
import HeroSection from "@/app/components/home/HeroSection";
import ClientLogos from "@/app/components/home/ClientLogos";
import FeaturesOverview from "@/app/components/home/FeaturesOverview";
import HowItWorks from "@/app/components/home/HowItWorks";
import Testimonials from "@/app/components/home/Testimonials";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import PricingSection from "@/app/components/home/PricingSection";
import FAQSection from "@/app/components/home/FAQSection";
import CTASection from "@/app/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCTA />
      <main>
        <HeroSection />
        <ClientLogos />
       <div className="bg-muted/30 flex flex-col md:gap-40 gap-15">
       <FeaturesOverview />
        <HowItWorks />
        <Testimonials />
        <WhyChooseUs />
        <PricingSection />
        <FAQSection />
        <CTASection />
       </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
