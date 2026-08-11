import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GarbaCarousel from './components/GarbaCarousel';
import AboutSection from './components/AboutSection';
import WhyRaasJalsa from './components/WhyRaasJalsa';
import CourseSection from './components/CourseSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import VenueSection from './components/VenueSection';
import InstagramGallery from './components/InstagramGallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ReserveModal from './components/ReserveModal';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleOpenReserve = (planName = '') => {
    setSelectedPlan(planName);
    setIsReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveModalOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Navigation Header */}
      <Navbar onOpenReserve={handleOpenReserve} />

      {/* 1. Hero Section */}
      <Hero onOpenReserve={() => handleOpenReserve()} />

      {/* 2. 3-Photo Garba Carousel */}
      <GarbaCarousel />

      {/* 3. About Raas Jalsa */}
      <AboutSection />

      {/* 4. Why Raas Jalsa */}
      <WhyRaasJalsa />

      {/* 5. Foundation Course Breakdown */}
      <CourseSection onOpenReserve={() => handleOpenReserve()} />

      {/* 6. Pricing Section */}
      <PricingSection onOpenReserve={handleOpenReserve} />

      {/* 7. Video Testimonial Section with Real Client Videos */}
      <TestimonialsSection />

      {/* 8. Venue & Location Section */}
      <VenueSection />

      {/* 9. Instagram Feed @raas_jalsa */}
      <InstagramGallery />

      {/* 10. Final CTA */}
      <FinalCTA onOpenReserve={() => handleOpenReserve()} />

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={handleCloseReserve}
        selectedPlan={selectedPlan}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenReserve={() => handleOpenReserve()} />

      {/* Bottom Center Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
