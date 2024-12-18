"use client";

import { CTASection } from "@/components/dashboard/cta-section";
import { FeaturesSection } from "@/components/dashboard/features-section";
import { HeroSection } from "@/components/dashboard/hero-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}