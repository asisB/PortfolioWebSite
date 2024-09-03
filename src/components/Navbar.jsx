import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BsTwitterX } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt='logo'/> 
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <SocialLink href="https://www.linkedin.com/in/a-shish/" icon={<FaLinkedin />} />
        <SocialLink href="https://github.com/asisB" icon={<FaGithub />} />
        <SocialLink href="https://x.com/AshishBasn33050" icon={<BsTwitterX />} />
      </div>
    </nav>
  );
}

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {icon}
  </motion.a>
);

export default Navbar;