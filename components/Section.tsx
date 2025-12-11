import React from 'react';
import { SectionId } from '../types';

interface SectionProps {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', isDark = false }) => {
  return (
    <section 
      id={id} 
      className={`
        w-full min-h-screen flex flex-col justify-center py-24 md:py-32 px-6 
        ${isDark ? 'bg-surface text-primary' : 'bg-background text-primary'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto w-full h-full">
        {children}
      </div>
    </section>
  );
};