import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { gradients } from '../utils/gradients';
import { personalInfo } from '../utils/constants';

const Hero = () => {
  return (
    <div className={`relative min-h-screen flex flex-col justify-center ${gradients.primary} overflow-hidden`}>
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container relative mx-auto px-6 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">
          {/* Mobile Profile Image (shown only on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:hidden w-48 h-48 relative"
          >
            <div className={`relative ${gradients.glow}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl shadow-purple-500/30"
              >
                <img 
                  src="public\assets\albert.png?w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-8 flex-1"
          >
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-fuchsia-300 font-medium tracking-wide"
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className={`text-2xl md:text-4xl font-bold ${gradients.text}`}>
                  {personalInfo.title}
                </span>
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-purple-100 max-w-lg mx-auto md:mx-0"
            >
              Crafting elegant digital experiences through clean code and innovative solutions. 
              Specialized in building modern web applications that make a difference.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white rounded-lg font-medium hover:from-fuchsia-600 hover:to-indigo-600 transition text-center shadow-lg shadow-purple-500/30"
              >
                Get in Touch
              </motion.a>
              <motion.div className="flex gap-4">
                {[
                  { href: personalInfo.github, Icon: Github, label: "GitHub" },
                  { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" }
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 ${gradients.card} backdrop-blur-sm rounded-lg hover:bg-white/10 transition shadow-lg shadow-purple-500/20`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-purple-100" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Profile Image (hidden on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block flex-1 max-w-md"
          >
            <div className={`relative ${gradients.glow}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="w-full aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-2xl shadow-purple-500/30"
              >
                <img 
                  src="public\assets\albert.png?w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl" 
              />
              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl" 
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm hover:from-purple-500/30 hover:to-fuchsia-500/30 transition"
        >
          <ChevronDown className="w-6 h-6 text-purple-100" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;