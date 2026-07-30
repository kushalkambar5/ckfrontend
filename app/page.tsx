import React from "react";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { StatsSection } from "@/components/StatsSection";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";
import { InteractiveFeatureShowcase } from "@/components/InteractiveFeatureShowcase";
import { DiagnosticSuiteDark } from "@/components/DiagnosticSuiteDark";
import { DoctorPortalPreview } from "@/components/DoctorPortalPreview";
import { MedicalTeamSection } from "@/components/MedicalTeamSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#1C1B18] selection:bg-[#F4E071] selection:text-[#1C1B18]">
      {/* Navigation Header */}
      <HeaderNav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section with Soft Butter Yellow Container Card */}
        <HeroSection />

        {/* Marquee Feature Highlights Ticker */}
        <MarqueeTicker />

        {/* 4-Column Key Metrics Section */}
        <StatsSection />

        {/* 4 Pastel Core Medical Services Cards */}
        <CoreServicesGrid />

        {/* Live Interactive Tabbed Feature Showcase */}
        <InteractiveFeatureShowcase />

        {/* Dark Graphite Diagnostic AI Suite Section */}
        <DiagnosticSuiteDark />

        {/* Clinical Doctor Portal & Patient Management Showcase */}
        <DoctorPortalPreview />

        {/* "Discover Our Team of Health Experts" Section */}
        <MedicalTeamSection />

        {/* "1800+ Reviews" Testimonial Section */}
        <ReviewsSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
