import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiDjango, SiTailwindcss, SiPython, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const techHoverEffect = {
  whileHover: {
    scale: 1.15,
    rotate: [0, 10],  // Simplified to two keyframes
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 px-4">
      <h1 className="my-20 text-center text-4xl md:text-5xl font-semibold">
        Technologies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {/* React */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors hover:border-cyan-400"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          {...techHoverEffect}
        >
          <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" />
        </motion.div>

        {/* Django */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors hover:border-green-600"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          {...techHoverEffect}
        >
          <SiDjango className="text-6xl md:text-7xl text-green-600" />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors hover:border-blue-600"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          {...techHoverEffect}
        >
          <SiTailwindcss className="text-6xl md:text-7xl text-blue-600" />
        </motion.div>

        {/* Python */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors hover:border-yellow-500"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          {...techHoverEffect}
        >
          <SiPython className="text-6xl md:text-7xl text-yellow-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors hover:border-[#00758F]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          {...techHoverEffect}
        >
          <SiMysql className="text-6xl md:text-7xl text-[#00758F]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
