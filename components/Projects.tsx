import React from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;
  const sectionRef = useScrollAnimation();

  return (
    <Section id={SectionId.PROJECTS} isDark>
      <div ref={sectionRef} className="reveal space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{ui.projects.title}</h2>
        <div className="h-1 w-20 bg-accent shadow-neon-sm"></div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const projectRef = useScrollAnimation();
          return (
            <div 
              key={project.id} 
              ref={projectRef}
              className={`reveal flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Area - Interactive */}
              <div className="w-full md:w-3/5 group relative rounded-xl overflow-hidden border border-white/5 shadow-2xl cursor-pointer">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[400px] object-cover filter grayscale-[0.5] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]">{project.role}</span>
                  <h3 className="text-3xl font-bold text-white leading-tight">{project.title}</h3>
                </div>
                
                <p className="text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Data highlight */}
                {project.metrics && (
                  <div className="bg-background/50 p-4 border-l-2 border-accent backdrop-blur-sm rounded-r-lg hover:bg-white/5 transition-colors">
                    <p className="text-sm font-medium text-primary">
                      <span className="block text-xs text-secondary uppercase mb-1">{ui.projects.impact}</span>
                      {project.metrics}
                    </p>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-surface border border-white/10 text-secondary text-xs font-medium rounded-full hover:border-accent/50 hover:text-accent hover:shadow-neon-sm transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="group flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-all">
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform"/> 
                      {ui.projects.viewLive}
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="group flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors">
                      <Github size={16} className="group-hover:rotate-12 transition-transform"/> 
                      {ui.projects.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};