// src/app/page.tsx
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MethodSection from '@/components/home/MethodSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ArticlesSection from '@/components/home/ArticlesSection';
import PricingSection from '@/components/home/PricingSection';
import FaqSection from '@/components/home/FaqSection';
import BookingSection from '@/components/home/BookingSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MethodSection />
        <TestimonialsSection />
        <ArticlesSection />
        <PricingSection />
        <FaqSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}