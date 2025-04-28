import React from 'react';
import HomeNavbar from '@/components/shared/HomeNav';
import { Button } from '@/components/ui';

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  faqRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/xQl8i2sO_Ls"; // Replace with your own video

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  featuresRef,
  faqRef,
  contactRef,
  aboutRef,
}) => {
  return (
    <div className="relative min-h-[100vh] flex flex-col bg-[#0a165c]">
      {/* Navbar with solid background */}
      <div className="w-full bg-[#0a165c] z-20 shadow-md sticky top-0">
        <HomeNavbar
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          faqRef = {faqRef}
        />
      </div>
      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 md:py-24 w-full flex-1">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow">
            <span className="text-primary">AI Front Office</span> for Healthcare Providers
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-xl">
            Instantly launch a professional website, automate patient engagement, manage leads, and streamline your healthcare business with intelligent AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition"
              onClick={() => scrollToSection(contactRef)}
              aria-label="Get Started"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-blue-50 px-8 py-3 rounded-lg"
              onClick={() => scrollToSection(featuresRef)}
              aria-label="See Features"
            >
              See Features
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/></svg>
            No credit card required. Start your free trial today.
          </div>
          <div className="mt-4 text-xs text-blue-300">
            Trusted by clinics, hospitals, and independent practitioners worldwide.
          </div>
          {/* Metrics Bar */}
          <div className="mt-10 flex gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">5000+</span>
              <span className="text-blue-100 text-lg capitalize">Qualified Doctors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">1000+</span>
              <span className="text-blue-100 text-lg capitalize">Hospitals</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">800+</span>
              <span className="text-blue-100 text-lg capitalize">Treatment Plans</span>
            </div>
          </div>
        </div>
        {/* Right: Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="relative overflow-hidden pt-[56.25%] w-full max-w-md rounded-xl shadow-lg bg-black">
            <iframe
              src={YOUTUBE_VIDEO_URL}
              title="Product Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              aria-label="GoGetWell Product Demo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;