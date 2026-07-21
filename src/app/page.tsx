import { AlaCarteSection } from '@/app/home/_components/AlaCarteSection';
import { CombosSection } from '@/app/home/_components/CombosSection';
import { DifferentiatorsSection } from '@/app/home/_components/DifferentiatorsSection';
import { FaqCtaSection } from '@/app/home/_components/FaqCtaSection';
import { HeroSection } from '@/app/home/_components/HeroSection';
import { ProblemsSection } from '@/app/home/_components/ProblemsSection';
import { ProcessSection } from '@/app/home/_components/ProcessSection';
import { ServicesSection } from '@/app/home/_components/ServicesSection';
import { ShowcaseSection } from '@/app/home/_components/ShowcaseSection';
import { FloatingContact } from '@/components/layout/FloatingContact';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <CombosSection />
        <AlaCarteSection />
        <ProcessSection />
        <ShowcaseSection />
        <FaqCtaSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
