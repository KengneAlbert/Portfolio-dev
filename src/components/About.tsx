import React from "react";
import { Code2, Database, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../utils/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  const techStack = [
    {
      icon: Code2,
      title: "Frontend",
      skills: "React, TypeScript",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX",
      skills: "Tailwind, Material UI",
      color: "text-purple-500",
    },
    {
      icon: Database,
      title: "Tools",
      skills: "Git, Webpack, Jest",
      color: "text-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Frontend Developer specialized in creating
                modern and responsive web applications. With a strong foundation
                in React and TypeScript, I craft pixel-perfect user interfaces
                that provide exceptional user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise lies in translating design concepts into clean,
                efficient code while ensuring optimal performance and
                accessibility across all devices and browsers.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} mb-3`} />
                  <h3 className="font-semibold text-gray-800">{tech.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tech.skills}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-blue-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                variants={item}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl text-white"
              >
                <h4 className="text-3xl font-bold mb-2">2+</h4>
                <p className="text-blue-100">Years Experience</p>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl text-white"
              >
                <h4 className="text-3xl font-bold mb-2">10+</h4>
                <p className="text-purple-100">Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
