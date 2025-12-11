import React from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { content } = useLanguage();
  const { testimonials, ui } = content;
  const headerRef = useScrollAnimation();

  return (
    <Section id={SectionId.TESTIMONIALS}>
      <div ref={headerRef} className="reveal space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{ui.testimonials.title}</h2>
        <div className="h-1 w-20 bg-accent shadow-neon-sm"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => {
          const cardRef = useScrollAnimation();
          return (
            <div 
              key={testimonial.id} 
              ref={cardRef}
              className={`reveal bg-surface p-8 rounded-lg border border-white/5 hover:border-accent/30 hover:shadow-neon-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group ${idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : ''}`}
            >
              <div className="space-y-6">
                <Quote size={32} className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <p className="text-secondary italic leading-relaxed group-hover:text-primary transition-colors">"{testimonial.text}"</p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                {testimonial.avatarUrl && (
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-accent transition-all" 
                  />
                )}
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-secondary uppercase tracking-wider">{testimonial.role}</div>
                  <div className="text-xs text-accent mt-0.5">{testimonial.company}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};