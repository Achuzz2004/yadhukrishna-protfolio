import React from 'react';
import aboutImg from '../assets/Profile.png';
import { ABOUT_TEXT } from '../constants/index.js';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="border-b border-neutral-900 pb-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Heading */}
      <motion.h1
        className="my-16 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      {/* Image + Text Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Animated Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 50 }}
        >
          <img
            className="rounded-2xl shadow-lg w-[220px] sm:w-[300px] lg:w-[320px] object-cover"
            src={aboutImg}
            alt="About me"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="flex-1 text-base leading-relaxed text-neutral-300 text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 50 }}
        >
          <p>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
