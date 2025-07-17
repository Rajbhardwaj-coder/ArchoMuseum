/* eslint-disable no-unused-vars */
import video from "../assets/Archo.png" 
import logo1 from "../assets/logo1.png"

import { AnimatePresence, motion, useInView  } from 'framer-motion'
import React, { useRef } from 'react'

const Hero = ({ text = ' Welcome To ARCHO Museum' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden ">
            <video
            src={video}  className="h-full w-full object-cover" muted
            autoPlay loop playsInline poster={video}></video></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b 
            from-transparent from-70% to to-black"></div>
            

            {/* Logo content*/}
            <div className="relative z-20 flex h-fit flex-col justify-end pb-20 px-4 sm:px-6 md:px-8 max-w-full sm:max-w-md mx-auto mt-20">
              <img src={logo1} alt="Archo" className="w-full  " />




                {/*Welcome content*/}
                <div className="flex space-x-1 justify-center">

               <AnimatePresence>
        {text.split('').map((char, i) => (
             <motion.h1
                ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-3xl sm:text-center md:text-4xl text-orange-900 mt-2 max-w-md mx-auto"
                      >
                      {char === ' ' ? <span>&nbsp;</span> : char}
               </motion.h1>
                 ))}
      </AnimatePresence>
      </div>
      <div> 
      <motion.p 
     initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.7,
    ease: [0.22, 1, 0.36, 1], // cubic-bezier (easeOutExpo style)
    delay: 0.3,
  }}
      className="text- text-black text-base sm:text-lg md:text-xl mt-auto max-w-lg mx-auto">
  Discover the wonders of ancient civilizations, rare artifacts, and hidden histories through a virtual journey into time. At ARCHO, we blend archaeology with technology to preserve, educate, and inspire future generations.
</motion.p>
</div>
              <button
                onClick={() => {
                  const exploreSection = document.getElementById('explore');
                  if (exploreSection) {
                    exploreSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#D8C39F] hover:bg-[#c0a97a] text-orange-900 font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 mt-4 mx-auto block"
              >
                Explore Now
              </button>
            </div>
            
        
    </section>
  )
}

export default Hero
