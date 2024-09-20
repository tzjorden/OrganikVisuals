import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Intro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="intro" ref={ref} className="min-h-screen flex items-center justify-center py-16 sm:py-24"> 
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-8">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-4 text-center md:text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {Array.from("Organik Visuals").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-lg sm:text-xl text-center md:text-center">
              I am a professional photographer based in the Bay Area with a passion for capturing the beauty of homes. 
              My goal is to present each listing in the best light possible, ensuring it stands out in a competitive market—all at a fair price. 
              Let me help you showcase your property in a way that highlights its unique charm and appeal.           
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 lg:aspect-h-11">
              <video 
                src="assets/video.mp4"
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;