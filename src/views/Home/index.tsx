import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProof from './components/SocialProof';
import InfoSection from './components/InfoSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';

const Home: React.FC = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const featuresRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector('.hcf-profile');
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop) {
        if (hcf) {
          hcf.classList.add('hcf-profile-fixed');
        }
      } else if (scrollTop < lastScrollTop) {
        if (hcf) {
          hcf.classList.remove('hcf-profile-fixed');
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {/* Hero Section */}
        <HeroSection
          scrollToSection={scrollToSection}
          faqRef={faqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          featuresRef={featuresRef}
        />

        {/* Features Section */}
        <div className="!bg-[#eff6ff] relative" ref={featuresRef}>
          <FeaturesGrid />
        </div>

        {/* Social Proof Section */}
        <SocialProof />

        {/* Info/About Section */}
        <div ref={aboutRef}>
          <InfoSection />
        </div>

        {/* FAQ Section */}
        <div ref={faqRef}>
          <HomeFAQs />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactForm />
        </div>

        {/* Footer */}
        {/* <MainFooter /> */}
      </div>
    </>
  );
};

export default Home;