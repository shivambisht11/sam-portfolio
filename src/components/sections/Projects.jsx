import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowRight, Layers, Globe, Smartphone } from 'lucide-react';
import { PROJECTS } from '../../constants';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProjects = activeTab === 'web' ? PROJECTS.web : PROJECTS.app;

  return (
    <section id="projects" className="section-padding relative bg-transparent">
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 leading-tight">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-xl">
              A selection of projects that showcase my engineering philosophy and technical depth.
            </p>
          </div>

          <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'web' 
                  ? 'bg-white text-indigo-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Web Solutions
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'app' 
                  ? 'bg-white text-indigo-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="wait">
            {activeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card group flex flex-col overflow-hidden bg-white border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                      {activeTab === 'web' ? <Globe size={24} /> : <Smartphone size={24} />}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <Github size={22} />
                      </a>
                      <a href={project.demo} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-[10px] uppercase font-bold tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12"
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl overflow-x-hidden no-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 p-3 rounded-full bg-white border border-slate-200 text-slate-900 z-50 hover:bg-slate-50 transition-colors"
                title="Close"
              >
                <X size={24} />
              </button>

              <div className="p-12 md:p-16">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
                  <div>
                    <div className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Case Study</div>
                    <h3 className="text-5xl font-display font-bold text-slate-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <div className="flex gap-4">
                    <a href={selectedProject.github} className="btn-secondary px-6">GitHub</a>
                    <a href={selectedProject.demo} className="btn-primary px-8">Live Demo</a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        <Globe size={18} />
                      </div>
                      Overview
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-lg mb-10 font-light">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                        <Layers size={18} />
                      </div>
                      Engineering Architecture
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-lg mb-12 font-light">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                      <h4 className="text-lg font-bold mb-6 text-slate-900">Key Features</h4>
                      <ul className="space-y-4">
                        {selectedProject.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-lg font-bold mt-10 mb-6 text-slate-900">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-md text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
