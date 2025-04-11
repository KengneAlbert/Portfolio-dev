import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../utils/constants";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Parcours Académique</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 mt-1 w-4 h-4 rounded-full bg-blue-500">
                <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-blue-400 opacity-25" />
              </div>
              {index !== education.length - 1 && (
                <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gray-200" />
              )}

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-medium">{edu.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
