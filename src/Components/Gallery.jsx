 
import React, { useState, useEffect } from 'react';
import gallery from '../assets/gallery.png'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'
import bg from '../assets/arch1.png'
const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images for the carousel
  const slides = [
    {
      id: 1,
      image:gallery,
      alt: "Elegant venue interior",
      className: "w-full h-full object-contain"
    },
    {
      id: 2,
      image: gallery1 ,
      alt: "Beautiful event space",
       className: "w-full h-full object-contain"
    },
    {
      id: 3,
      image: gallery2,
      alt: "Luxurious venue setup",
       className: "w-full h-full object-contain"
    },
    {
      id: 4,
      image: gallery3,
      alt: "Modern event venue",
       className: "w-full h-full object-contain"
    },
    {
      id: 5,
      image:gallery4,
      alt: "Premium venue space",
       className: "w-full h-full object-contain"
    },
    {
        id: 6,
      image:gallery5,
      alt: "Premium venue space",
       className: "w-full h-full object-contain" 
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getSlideStyle = (index) => {
    const position = (index - currentSlide + slides.length) % slides.length;
    
    // Check if we're on mobile/tablet
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    if (isMobile) {
      // Mobile: Simple slide layout
      if (position === 0) {
        return {
          transform: 'translate(-50%, -50%) translateX(0px) scale(1)',
          zIndex: 5,
          opacity: 1
        };
      } else if (position === 1) {
        return {
          transform: 'translate(-50%, -50%) translateX(120px) scale(0.8)',
          zIndex: 4,
          opacity: 0.7
        };
      } else if (position === 4) {
        return {
          transform: 'translate(-50%, -50%) translateX(-120px) scale(0.8)',
          zIndex: 4,
          opacity: 0.7
        };
      } else {
        return {
          transform: 'translate(-50%, -50%) translateX(300px) scale(0.6)',
          zIndex: 0,
          opacity: 0
        };
      }
    } else if (isTablet) {
      // Tablet: Medium spacing
      if (position === 0) {
        return {
          transform: 'translate(-50%, -50%) translateX(0px) scale(1) rotateY(0deg)',
          zIndex: 5,
          opacity: 1
        };
      } else if (position === 1) {
        return {
          transform: 'translate(-50%, -50%) translateX(150px) scale(0.8) rotateY(10deg)',
          zIndex: 4,
          opacity: 0.8
        };
      } else if (position === 2) {
        return {
          transform: 'translate(-50%, -50%) translateX(250px) scale(0.65) rotateY(20deg)',
          zIndex: 3,
          opacity: 0.6
        };
      } else if (position === 3) {
        return {
          transform: 'translate(-50%, -50%) translateX(-250px) scale(0.65) rotateY(-20deg)',
          zIndex: 3,
          opacity: 0.6
        };
      } else if (position === 4) {
        return {
          transform: 'translate(-50%, -50%) translateX(-150px) scale(0.8) rotateY(-10deg)',
          zIndex: 4,
          opacity: 0.8
        };
      } else {
        return {
          transform: 'translate(-50%, -50%) translateX(400px) scale(0.5)',
          zIndex: 0,
          opacity: 0
        };
      }
    } else {
      // Desktop: Full 3D effect (original)
      if (position === 0) {
        return {
          transform: 'translate(-50%, -50%) translateX(0px) scale(1) rotateY(0deg)',
          zIndex: 5,
          opacity: 1
        };
      } else if (position === 1) {
        return {
          transform: 'translate(-50%, -50%) translateX(200px) scale(0.85) rotateY(15deg)',
          zIndex: 4,
          opacity: 0.8
        };
      } else if (position === 2) {
        return {
          transform: 'translate(-50%, -50%) translateX(350px) scale(0.7) rotateY(25deg)',
          zIndex: 3,
          opacity: 0.6
        };
      } else if (position === 3) {
        return {
          transform: 'translate(-50%, -50%) translateX(-350px) scale(0.7) rotateY(-25deg)',
          zIndex: 3,
          opacity: 0.6
        };
      } else if (position === 4) {
        return {
          transform: 'translate(-50%, -50%) translateX(-200px) scale(0.85) rotateY(-15deg)',
          zIndex: 4,
          opacity: 0.8
        };
      } else {
        return {
          transform: 'translate(-50%, -50%) translateX(500px) scale(0.5)',
          zIndex: 0,
          opacity: 0
        };
      }
    }
  };

  const getCardDimensions = () => {
    if (window.innerWidth < 640) {
      return { width: '250px', height: '180px' };
    } else if (window.innerWidth < 768) {
      return { width: '280px', height: '200px' };
    } else if (window.innerWidth < 1024) {
      return { width: '320px', height: '240px' };
    } else {
      return { width: '600px', height: '375px' };
    }
  };

  const getCarouselHeight = () => {
    if (window.innerWidth < 640) {
      return 'h-64';
    } else if (window.innerWidth < 768) {
      return 'h-72';
    } else if (window.innerWidth < 1024) {
      return 'h-80';
    } else {
      return 'h-96';
    }
  };

return (
    <div id="gallery" className="py-8 px-4 sm:py-12 sm:px-6 md:py-14 md:px-8 xl:py-16 xl:px-8 relative" style={{backgroundColor: '#F8F0F5'}}>
      {/* Background Image with Fade Effect */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-8 sm:mb-12 md:mb-14 xl:mb-16 text-center" style={{color: 'black'}}>
          Gallery
          </h2>
          
          {/* Carousel Container */}
          <div className={`relative w-full ${getCarouselHeight()} overflow-hidden flex items-center justify-center`} style={{perspective: '1200px'}}>
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    ...getSlideStyle(index),
                    transformOrigin: 'center center',
                    ...getCardDimensions()
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div 
                    className="w-full h-full overflow-hidden shadow-xl sm:shadow-2xl"
                    style={{
                      borderRadius: '20px',
                      background: '#fff'
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: '20px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Mobile Only */}
          <div className="flex justify-center mt-4 space-x-4 md:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{color: '#8B1538'}}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{color: '#8B1538'}}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;