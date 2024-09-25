import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const media = [
    { type: 'image', src: 'assets/1.png', alt: 'Description 1' },
    { type: 'image', src: 'assets/2.png', alt: 'Description 2' },
    { type: 'image', src: 'assets/3.png', alt: 'Description 3' },
    { type: 'image', src: 'assets/4.png', alt: 'Description 4' },
    { type: 'image', src: 'assets/5.png', alt: 'Description 5' },
    { type: 'image', src: 'assets/6.png', alt: 'Description 6' },
    { type: 'image', src: 'assets/7.png', alt: 'Description 7' },
    { type: 'image', src: 'assets/8.png', alt: 'Description 8' },
    { type: 'image', src: 'assets/9.png', alt: 'Description 9' },
    { type: 'image', src: 'assets/10.png', alt: 'Description 10' },
    { type: 'image', src: 'assets/11.png', alt: 'Description 11' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [media.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <section id="gallery" ref={ref} className="py-4 sm:py-8 bg-white dark:bg-gray-900">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Gallery</h2>
        <div className="relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            {media.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-60 md:h-auto object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-1 sm:p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-1 sm:p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {media.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Gallery;