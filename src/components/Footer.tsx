import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {[
              { href: personalInfo.github, Icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" }
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;