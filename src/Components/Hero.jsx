import React from 'react';
import profilePic from '../assets/about.jpg';
import { HERO_CONTENT } from '../constants/index';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-36"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
    >
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4">
            <h1 className="pb-10 text-5xl font-light tracking-tight sm:text-6xl lg:mt-16 lg:text-8xl">
              Yadhukrishna
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-medium tracking-tight text-transparent sm:text-4xl">
              Full Stack Developer
            </span>
            <p className="mt-6 max-w-xl text-center font-light tracking-tight text-neutral-300 lg:text-left">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-72 h-72 rounded-full object-cover shadow-lg lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
