import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Tags } from 'lucide-react';
import { projects } from '../utils/constants';
import type { Project } from '../utils/types';
import ProjectPopup from './ProjectPopup';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.featured;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => project.tags.includes(tag));
    return matchesFilter && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'featured'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Featured
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + selectedTags.join(',')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;