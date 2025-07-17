'use client';

import React from 'react';
import Reveal from './Reveal';
import About from '../assets/About2.png';

const features = [
  { icon: '🏛️', title: 'Virtual Exhibits of Ancient Civilizations' },
  { icon: '📜', title: 'Interactive Artifact Exploration' },
  { icon: '🎓', title: 'Educational Tools & Historical Resources' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white"
      style={{ backgroundImage: `url(${About})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-none z-0" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-amber-700">
            <span className="text-amber-700">A</span>
            <span className="text-amber-800">R</span>
            <span className="text-amber-700">C</span>
            <span className="text-amber-800">H</span>
            <span className="text-amber-800">O</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-amber-200 text-lg sm:text-xl max-w-3xl leading-relaxed px-2">
            ARCHO is a digital museum dedicated to exploring and preserving the rich tapestry of human history. From ancient civilizations to hidden relics,
             we showcase 
            archaeological wonders through immersive visuals and storytelling — blending the past with modern technology.
          </p>
        </Reveal>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 max-w-5xl">
          {features.map((feature, index) => (
            <Reveal key={index} delay={0.3 + index * 0.2}>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={1.2}>
          <div className="mt-12">
            <a
              href="#explore"
              className="inline-block bg-[#D8C39F] hover:bg-[#c0a97a] text-orange-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
            >
              Join The Adventure →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
