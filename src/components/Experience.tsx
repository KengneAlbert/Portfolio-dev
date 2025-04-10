import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import type { Experience as ExperienceType } from '../utils/types';

const experiences: ExperienceType[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Freelance',
    period: '2024 - Present',
    description: 'Specialized in building responsive web applications using React, Tailwind and TypeScript. Implemented modern UI/UX designs and improved performance optimization.',
  },
  {
    title: 'Frontend Developer',
    company: 'Gohdim Empire Sarl',
    period: '2022 - 2023',
    description: 'Developed and maintained client-side applications using React, Redux, and TypeScript. Led UI/UX improvements and implemented responsive designs.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'VDD22',
    period: '2021 - 2022',
    description: 'Created responsive websites using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect interfaces.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[6px] md:left-1/2 top-0 w-[2px] h-full bg-gray-200 md:-translate-x-px" />
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;