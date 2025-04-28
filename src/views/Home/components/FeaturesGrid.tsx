import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <FaUserSecret />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <BiMessageSquare />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: <FiFileText />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: <BiTrendingUp />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: <BsDatabase />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: <LuLanguages />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-400 to-red-600"
  },
  {
    icon: <BiCreditCard />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-400 to-teal-600"
  },
  {
    icon: <BiSearch />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-400 to-cyan-600"
  },
];

const FeaturesGrid = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-[#f0f6ff] via-white to-[#e0e7ff] overflow-hidden">
    {/* Decorative background blobs */}
    <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-40 z-0"></div>
    <div className="absolute bottom-[-60px] right-[-60px] w-[240px] h-[240px] bg-purple-100 rounded-full blur-2xl opacity-30 z-0"></div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-4">
        Powerful Features for Modern Healthcare
      </h2>
      <p className="text-center text-blue-600 mb-12 text-lg max-w-2xl mx-auto">
        Everything you need to launch, grow, and automate your healthcare business—powered by AI and designed for results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((feature, idx) => (
          <div
            key={idx}
            className={`
              group relative rounded-2xl p-8 shadow-xl bg-white/60 backdrop-blur-md border border-blue-100
              hover:scale-[1.03] hover:shadow-2xl transition-all duration-300
              flex flex-col items-start
              overflow-hidden
            `}
            tabIndex={0}
            aria-label={feature.title}
          >
            <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${feature.color} text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
            <p className="text-blue-700 mb-0">{feature.description}</p>
            {/* Subtle animated background accent */}
            <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-all duration-300`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;