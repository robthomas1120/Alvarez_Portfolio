"use client";

import { GridBackground } from "@/components/grid-background";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { DataVizProjectsSection } from "@/components/dataviz-projects-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Fixed grid background with parallax */}
      <GridBackground />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <DataVizProjectsSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  );
}
