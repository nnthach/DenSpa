import { DifferentiatorsSection } from '@/app/home/_components/DifferentiatorsSection';
import { FaqCtaSection } from '@/app/home/_components/FaqCtaSection';
import { HeroSection } from '@/app/home/_components/HeroSection';
import { ProblemsSection } from '@/app/home/_components/ProblemsSection';
import { ProcessSection } from '@/app/home/_components/ProcessSection';
import { ServicesSection } from '@/app/home/_components/ServicesSection';
import { ShowcaseSection } from '@/app/home/_components/ShowcaseSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <DifferentiatorsSection />
      <ServicesSection />
      <ProcessSection />
      <ShowcaseSection />
      <FaqCtaSection />
    </main>
  );
}
