import React from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;
  const sectionRef = useScrollAnimation();

  return (
    <Section id={SectionId.SKILLS}>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div ref={sectionRef} className="reveal sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{ui.skills.title}</h2>
            <p className="text-secondary leading-relaxed">
              {ui.skills.description}
            </p>
          </div>
        </div>

        <div className="md:col-span-8 grid gap-12 sm:grid-cols-2">
          {skills.map((category, idx) => {
            const cardRef = useScrollAnimation();
            return (
              <div 
                key={category.title} 
                ref={cardRef} 
                className={`reveal space-y-6 ${idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : ''}`}
              >
                <h3 className="text-xl font-bold text-primary border-b border-white/10 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-secondary group transform hover:translate-x-1 transition-transform duration-200">
                      <CheckCircle2 size={18} className="mt-1 text-accent group-hover:drop-shadow-neon-sm transition-all" />
                      <span className="group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};