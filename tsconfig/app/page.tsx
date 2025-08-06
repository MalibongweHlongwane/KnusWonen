import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import EnergySection from '@/components/sections/EnergySection';
import NewsSection from '@/components/sections/NewsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';
import Spacer from '@/components/ui/Spacer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <HeroSection />
        {/* Spacer to position Energy section at correct position */}
        <Spacer height={0} />
        <EnergySection />
        {/* Spacer to position News section at top: 1139px */}
        <Spacer height={120} />
        <NewsSection />
        {/* Spacer to position Newsletter section at top: 1711px */}
        <Spacer height={0} />
        <NewsletterSection />
        {/* Spacer to position Footer at top: 2211px */}
        <Spacer height={0} />
      </main>
      <Footer />
    </div>
  );
}
