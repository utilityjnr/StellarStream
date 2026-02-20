import { FeatureBentoSection } from "@/components/landing/feature-bento-section";
import { HeroSection } from "@/components/landing/hero-section";
import { MoneyInMotionSection } from "@/components/landing/money-in-motion-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MoneyInMotionSection />
      <FeatureBentoSection />
    </>
  );
}
