import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gradients } from '../utils/gradients';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl font-bold ${
              isScrolled
                ? gradients.text
                : 'text-white'
            }`}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-blue-500'
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isScrolled
                          ? 'bg-blue-50'
                          : 'bg-white/10'
                      }`}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/80 backdrop-blur-lg rounded-2xl mb-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-gray-800 hover:text-blue-500 hover:bg-blue-50/50 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;