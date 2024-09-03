import React, { useEffect } from 'react';
import profilePic from '../assets/ashishProfile.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export const HERO_CONTENT = `I am a passionate Mobile Developer with a knack for crafting robust and scalable applications. With 1 years of hands-on experience, I have honed my skills in mobile technologies like React, Android and iOS, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false // Changed to false to allow multiple triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className='border-b border-neutral-900 pb-4 lg:mb-8'
    >
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={item}
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >
              Ashish Basnet
            </motion.h1>
            <motion.span
              variants={item}
              className="bg-gradient-to-r from-green-500 via-slate-500 to-gray-300 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={item}
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div 
          className='w-full lg:w-1/2 lg:p-8'
          variants={item}
        >
          <div className='flex justify-center'>
            <motion.img 
              src={profilePic} 
              alt='Ashish Basnet'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;