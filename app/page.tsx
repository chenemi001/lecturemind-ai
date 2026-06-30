import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeInSection>
  <Stats />
</FadeInSection>

<FadeInSection>
  <TrustedBy />
</FadeInSection>

<FadeInSection>
  <Features />
</FadeInSection>

<FadeInSection>
  <HowItWorks />
</FadeInSection>

<FadeInSection>
  <Pricing />
</FadeInSection>

<FadeInSection>
  <Testimonials />
</FadeInSection>

<FadeInSection>
  <FAQ />
</FadeInSection>

<FadeInSection>
  <CTA />
</FadeInSection>

<Footer />

    </main>
  );
}