
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { JobListSection } from "@/components/JobListSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <JobListSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
