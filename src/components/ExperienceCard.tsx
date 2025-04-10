import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../utils/types';

interface Props {
  experience: Experience;
  isEven: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex md:gap-8 items-center"
    >
      {/* Timeline dot */}
      <div className="absolute left-[5px] md:left-1/2 w-3 h-3 bg-blue-500 rounded-full md:-translate-x-[6px]" />
      
      {/* Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:ml-auto' : ''} 
          bg-white rounded-lg shadow-md p-6 ml-8 md:ml-0 relative`}
      >
        <div className="absolute top-7 -left-8 w-8 h-[2px] bg-gray-200 md:hidden" />
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
          {experience.period}
        </span>
        <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
        <p className="text-blue-500 font-medium">{experience.company}</p>
        <p className="mt-2 text-gray-600">{experience.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;