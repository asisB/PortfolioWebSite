import React from 'react'
import aboutImg from '../assets/about.jpg'
import { motion } from 'framer-motion'

export const ABOUT_TEXT = `As a Master's graduate in Computer Software Engineering from the University of West London, my journey has melded rigorous academic training with real-world experience as an iOS App Developer at Code Comma Technology Pty Ltd. My core competencies lie in React Native and utilizing AWS to craft scalable mobile solutions, where my work has revolved around enhancing user interfaces and experiences.

My dedication to developing interactive applications is underpinned by a robust command of TypeScript and a meticulous approach to unit testing, ensuring quality and performance. Our team's collaborative efforts have consistently led to engaging and responsive designs, reflecting my commitment to continuous learning and contributing to projects that resonate with users and meet the highest standards of excellence. Knowledge of Python, JavaScript, and Swift, along with frameworks like React Native, Expo, and AWS amplify, further solidify my versatility and expertise in the field.`;

export const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About
                <span className="text-green-500"> Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lf:p-8'>
                    <motion.div 
                    whileInView={{x: 0, opacity: 1}}
                    initial={{opacity:0, x: -100}}
                    transition={{duration: 0.5}}
                    className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </motion.div>
                </div>

                <motion.div 
                whileInView={{x: 0, opacity: 1}}
                initial={{opacity:0, x: 100}}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

