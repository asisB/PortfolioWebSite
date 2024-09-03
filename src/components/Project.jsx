import React from 'react'
import { PROJECTS } from '../constants'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Project = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // Changed to false to allow multiple triggers
        threshold: 0.1
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
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
                Projects 
            </motion.h1>
            <motion.div>
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className='mb-8 flex flex-wrap lg:justify-center'
                        variants={itemVariants}
                    >
                        <motion.div 
                            className='w-full lg:w-1/4'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <motion.img 
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className='mb-6 rounded'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </motion.div>
                        <motion.div 
                            className='w-full max-w-xl lg:w-3/4'
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className='flex flex-wrap'>
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}