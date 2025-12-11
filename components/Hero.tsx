import React from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { profile, ui } = content;

  // Helper to render text with staggered char animation
  const renderTypewriterText = (text: string, baseDelay: number) => {
    let charIndexGlobal = 0;
    return text.split(' ').map((word, wordIndex) => {
      const wordElement = (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 lg:mr-3 last:mr-0">
          {word.split('').map((char, charIndex) => {
            const delay = baseDelay + (charIndexGlobal * 30); // 30ms per char
            charIndexGlobal++;
            return (
              <span
                key={charIndex}
                className="inline-block opacity-0 animate-type-reveal"
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      );
      charIndexGlobal++; // Add delay for implied space
      return wordElement;
    });
  };

  return (
    <Section id={SectionId.HOME} className="relative overflow-hidden">
      {/* Background Decor with Animation */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-30 pointer-events-none animate-float"></div>

      <div className="relative z-10 flex flex-col justify-center h-full space-y-6">
        
        {/* Role / Small Title */}
        <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm animate-fade-in-up">
          {profile.title}
        </p>

        {/* Animated Handwriting SVG Title */}
        <div className="w-full max-w-2xl -ml-2 py-4">
           {/* Key forces re-render/replay on language toggle */}
          <svg 
            key={`name-${profile.name}`} 
            viewBox="0 0 600 120" 
            className="w-full h-auto overflow-visible"
            aria-label={profile.name}
          >
            <text 
              x="0" 
              y="90" 
              fontFamily="'Sacramento', cursive" 
              fontSize="100" 
              className="handwritten-text"
            >
              {profile.name}
            </text>
          </svg>
        </div>

        {/* Typewriter Tagline */}
        <h1 
          key={`tagline-${content.profile.tagline}`} // Force re-render on lang change
          className="font-handwriting text-4xl md:text-6xl font-bold leading-tight text-white max-w-4xl tracking-tight"
        >
          {renderTypewriterText(profile.tagline, 1000)}
        </h1>

        {/* Location / Subtitle */}
        <p className="text-xl text-secondary max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:3000ms] opacity-0 fill-mode-forwards">
          {ui.hero.location}
        </p>
        
        {/* Buttons */}
        <div className="pt-8 flex flex-wrap gap-6 animate-fade-in-up [animation-delay:3200ms] opacity-0 fill-mode-forwards">
          <a 
            href={`#${SectionId.PROJECTS}`} 
            className="group inline-flex items-center space-x-2 bg-accent text-background px-8 py-3 rounded-full hover:shadow-neon transition-all duration-300 font-semibold"
          >
            <span>{ui.hero.viewWork}</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a 
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary border border-white/20 px-8 py-3 rounded-full hover:border-accent hover:text-accent hover:bg-white/5 transition-all duration-300"
          >
            <span>{ui.hero.resume}</span>
            <FileText size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
};