import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 select-none'>
      {/* YK Text Logo */}
      <motion.div
        className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        YK
      </motion.div>

      {/* Social Icons Section */}
      <div className='m-8 flex items-center justify-center gap-6 text-3xl'>
        <motion.a
          href="https://www.linkedin.com/in/yadhukrishna-s-a737882b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/Achuzz2004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/yadhukrishna__5?utm_source=qr&igsh=MTcyd3Z5eGYyMzJieQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
