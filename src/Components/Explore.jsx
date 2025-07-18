/* eslint-disable no-unused-vars */
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DecayCard from './DecayCard'; // 🧠 Add this line

// Assets
import arch1 from '../assets/arch1.png';
import arch2 from '../assets/arch2.jpg';
import fossil from '../assets/fossil.jpeg';
import fossil1 from '../assets/Fossil1.jpeg';
import excavation from '../assets/excavation.jpeg';
import skul from '../assets/skul.jpeg';

const exhibits = [
  {
    title: 'Ancient Architecture 🏛️',
    description: 'Explore magnificent ancient architectural marvels and ruins.',
    image: arch1,
    mediaType: 'image',
  },
  {
    title: 'Fossil Discoveries 🦴',
    description: 'Explore ancient bones, tools, and life preserved in time.',
    image: fossil,
    mediaType: 'image',
  },
  {
    title: 'Skeletal Artifacts 💀',
    description: 'Examine skeletal remains and artifacts from ancient times.',
    image: skul,
    mediaType: 'image',
  },
  {
    title: 'Excavation Sites ⛏️',
    description: 'Visualize ongoing excavation sites revealing history.',
    image: excavation,
    mediaType: 'image',
  },
  {
    title: 'Fossil Discoveries 🦴',
    description: 'Explore ancient bones, tools, and life preserved in time.',
    image: fossil1,
    mediaType: 'image',
  },
  {
    title: 'Archaeological Sites 🏺',
    description: 'Discover significant archaeological sites and their stories.',
    image: arch2,
    mediaType: 'image',
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ExploreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="explore" ref={ref} className="bg-marble py-20 px-4">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-amber-800 mb-6"
      >
        Explore ARCHO 🔍
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-amber-700 max-w-2xl mx-auto mb-16 text-lg"
      >
        Dive into ancient wonders, explore 3D artifacts, and discover stories etched in time — all curated digitally for curious minds.
      </motion.p>

      {/* Replaced grid with DecayCard motion */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl ml-auto">
        {exhibits.map((item, i) => (
          <DecayCard key={i} image={item.image} width={240} height={320}>
            <div className="text-black font-bold text-xl">{item.title}</div>
            <div className="text-sm text-softtext ">{item.description}</div>
          </DecayCard>
        ))}
      </div>

    </section>
  );
}
