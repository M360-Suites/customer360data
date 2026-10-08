import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import PlatformFlow from "@/components/PlatformFlow";
import FeatureGrid from "@/components/FeatureGrid";
import UseCasesGrid from "@/components/UseCasesGrid";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import PricingFAQ from "@/components/PricingFAQ";
import FoundingPartners from "@/components/FoundingPartners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <PlatformFlow />
        <FeatureGrid />
        <UseCasesGrid />
        <UseCases />
        <HowItWorks />
        <Integrations />
        <PricingFAQ />
        <FoundingPartners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
