import React from 'react';
import NavBar from '@/components/landing/NavBar';
import HeroSection from '@/components/landing/HeroSection';
import QuienesSomos from '@/components/landing/QuienesSomos';
import ServicesSection from '@/components/landing/ServicesSection';
import AlianzasSection from '@/components/landing/AlianzasSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <QuienesSomos />
      <ServicesSection />
      <AlianzasSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}