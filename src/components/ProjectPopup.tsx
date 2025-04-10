import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tags } from 'lucide-react';
import type { Project } from '../utils/types';

interface ProjectPopupProps {
  project: Project;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  // Close popup when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Project Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              {project.featured && (
                <span className="px-3 py-1 text-sm font-medium text-blue-100 bg-blue-500/20 rounded-full backdrop-blur-sm">
                  Featured Project
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">About the Project</h4>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPopup;