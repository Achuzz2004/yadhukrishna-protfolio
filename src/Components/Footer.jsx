import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants/index.js';

const Footer = () => {
  return (
    <motion.footer
      className="bg-neutral-900 text-white py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s Connect!
        </motion.h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {/* GitHub */}
          <motion.a
            href="https://github.com/Achuzz2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/yadhukrishna-s-a737882b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaLinkedin />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/yadhukrishna__5?utm_source=qr&igsh=MTcyd3Z5eGYyMzJieQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Contact Info */}
        <motion.div
          className="text-sm text-neutral-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="mb-2">
            <span className="font-medium text-white">Address:</span> {CONTACT.address}
          </p>
          <p className="mb-2">
            <span className="font-medium text-white">Phone:</span> {CONTACT.phoneNo}
          </p>
          <p>
            <span className="font-medium text-white">Email:</span>{' '}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-cyan-400 hover:underline transition-all duration-300"
            >
              {CONTACT.email}
            </a>
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Yadhukrishna. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
