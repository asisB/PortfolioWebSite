import React, { useEffect } from 'react'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs, FaAws } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Technologies = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div 
      ref={ref}
      className='border-b border-neutral-800 pb-24'
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h1 
        className="my-20 text-center text-4xl"
        variants={headerVariants}
      >
        Technologies
      </motion.h1>
      <motion.div 
        className='flex flex-wrap items-center justify-center gap-8'
        variants={containerVariants}
      >
        <TechIcon Icon={TbBrandReactNative} name="React Native" />
        <TechIcon Icon={FaNodeJs} name="Node.js" color="text-green-500" />
        <TechIcon Icon={TbBrandNextjs} name="Next.js" color="text-white-400" />
        <TechIcon Icon={SiMongodb} name="MongoDB" color="text-green-400" />
        <TechIcon Icon={FaAws} name="AWS" color="text-gray-400" />
      </motion.div>
    </motion.div>
  )
}

const TechIcon = ({ Icon, name, color }) => {
  const itemVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <motion.div 
      className='rounded-2xl border-4 border-green-800 p-8 flex flex-col items-center'
      variants={itemVariants}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: '0px 0px 8px rgb(34,197,94)',
        transition: {
          duration: 0.3,
          yoyo: Infinity
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          rotate: [0, 10, 0, -10, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <Icon className={`text-8xl ${color}`}/>
      </motion.div>
      <motion.p 
        className="mt-2 text-sm font-semibold"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5 } }
        }}
      >
        {name}
      </motion.p>
    </motion.div>
  )
}