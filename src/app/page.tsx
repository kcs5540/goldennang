'use client';

import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import BrandStory from '@/components/BrandStory';
import ProductShowcase from '@/components/ProductShowcase';
import SafetyPackaging from '@/components/SafetyPackaging';
import CustomerReviews from '@/components/CustomerReviews';
import GrowingGuide from '@/components/GrowingGuide';
import FAQSection from '@/components/FAQSection';
import NoticeSection from '@/components/NoticeSection';
import FarmMap from '@/components/FarmMap';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <BrandStory />
        <ProductShowcase />
        <SafetyPackaging />
        <CustomerReviews />
        <GrowingGuide />
        <NoticeSection />
        <FAQSection />
        <FarmMap />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
