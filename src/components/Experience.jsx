import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../constants/index';

export const Experience = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            className='border-b border-neutral-900 pb-4'
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.h1 
                className='my-20 text-center text-4xl'
                variants={itemVariants}
            >
                Experience
            </motion.h1>
            <motion.div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index} 
                        className='mb-8 flex flex-wrap lg:justify-center'
                        variants={itemVariants}
                    >
                        <div className='w-full lg:w-1/4'>
                            <motion.p 
                                className='mb-2 text-sm text-neutral-400'
                                whileHover={{ scale: 1.05 }}
                            >
                                {experience.year}
                            </motion.p>
                        </div>
                        <motion.div 
                            className='w-full max-w-xl lg:w-3/4'
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h6 className='mb-2 font-semibold'>
                                {experience.role} - {" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, techIndex) => (
                                <motion.span 
                                    key={techIndex} 
                                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800 inline-block'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};