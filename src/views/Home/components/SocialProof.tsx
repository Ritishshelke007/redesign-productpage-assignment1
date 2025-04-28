import React from 'react';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg', alt: 'HubSpot' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg', alt: 'Airtable' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', alt: 'Shopify' },
];

const testimonials = [
  {
    text: "This platform streamlined our onboarding and improved patient engagement. The AI assistant is a game changer!",
    name: "Priya Sharma",
    role: "Healthcare Facilitator",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "The website builder is so intuitive. We launched a professional site in hours, not weeks.",
    name: "John Lee",
    role: "Clinic Owner",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Our team loves the real-time patient chat. Support and conversion rates have soared.",
    name: "Fatima Alvi",
    role: "Patient Coordinator",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const SocialProof: React.FC = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-[#e0e7ff] via-white to-[#f0f6ff] overflow-hidden">
    {/* Decorative wave/gradient accent */}
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-blue-400/10 blur-2xl opacity-60 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-4">
        Trusted by Healthcare Teams Worldwide
      </h2>
      <p className="text-center text-blue-600 mb-12 text-lg max-w-2xl mx-auto">
        See why leading clinics and professionals choose us to power their digital transformation.
      </p>
      {/* Logo Row */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-16 animate-fade-in">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300 drop-shadow-lg opacity-80 hover:opacity-100"
            style={{ maxWidth: 120 }}
          />
        ))}
      </div>
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {testimonials.map((t, idx) => (
    <div
      key={idx}
      className="relative bg-white/70 backdrop-blur-lg border-2 border-transparent group hover:border-primary rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-blue-200/60"
      tabIndex={0}
      aria-label={`Testimonial from ${t.name}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      }}
    >
      {/* Glowing gradient border accent */}
      <div className="absolute -inset-1 rounded-3xl z-[-1] bg-gradient-to-br from-primary/30 via-blue-200/20 to-blue-400/10 blur-md opacity-80 group-hover:opacity-100 transition-all duration-300"></div>
      {/* Avatar with blob */}
      <div className="relative mb-4">
        <span className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-primary/30 to-blue-200/30 rounded-full blur-2xl z-[-1]"></span>
        <img
          src={t.avatar}
          alt={t.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Quote icon */}
      <svg className="w-8 h-8 text-primary mb-2 opacity-70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.17 7.93c-1.13.53-1.92 1.71-1.92 3.07 0 1.36 1.09 2.45 2.45 2.45.68 0 1.23-.55 1.23-1.23 0-.68-.55-1.23-1.23-1.23-.15 0-.29.03-.42.08.07-.61.44-1.13 1.04-1.39.62-.26.92-.99.66-1.61-.25-.62-.98-.92-1.61-.66zm9.66 0c-1.13.53-1.92 1.71-1.92 3.07 0 1.36 1.09 2.45 2.45 2.45.68 0 1.23-.55 1.23-1.23 0-.68-.55-1.23-1.23-1.23-.15 0-.29.03-.42.08.07-.61.44-1.13 1.04-1.39.62-.26.92-.99.66-1.61-.25-.62-.98-.92-1.61-.66z"/>
      </svg>
      <p className="text-blue-900 font-medium italic mb-4 leading-relaxed">"{t.text}"</p>
      <div className="font-bold text-primary text-lg">{t.name}</div>
      <div className="text-sm text-blue-600">{t.role}</div>
      {/* Subtle accent blob */}
      <div className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full bg-primary/10 blur-xl opacity-60 z-[-1]" />
    </div>
  ))}
</div>
    </div>
    {/* Decorative bottom wave */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-blue-400/10 to-primary/20 blur-2xl opacity-70 pointer-events-none" />
  </section>
);

export default SocialProof;