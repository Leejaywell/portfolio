import React from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const { content } = useLanguage();
  const { profile, ui } = content;
  const sectionRef = useScrollAnimation();

  return (
    <Section id={SectionId.ABOUT} isDark>
      <div className="max-w-3xl">
        <div ref={sectionRef} className="reveal mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{ui.about.title}</h2>
          <div className="prose prose-lg text-secondary">
            <p>{profile.about}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-8 reveal">{ui.about.experienceTitle}</h3>
        
        <div className="border-l border-white/10 pl-8 space-y-12">
          {profile.experience.map((exp, index) => {
            const itemRef = useScrollAnimation();
            return (
              <div key={index} ref={itemRef} className="reveal relative group">
                {/* Timeline Dot with Pulse */}
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-surface bg-accent shadow-neon group-hover:scale-125 transition-transform duration-300 z-10"></div>
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent opacity-0 group-hover:animate-ping"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h4>
                  <span className="text-sm font-mono text-secondary">{exp.year}</span>
                </div>
                
                <div className="text-sm font-semibold text-accent/80 mb-3">{exp.company}</div>
                <p className="text-secondary">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};