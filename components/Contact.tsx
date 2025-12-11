import React, { useState } from 'react';
import { Section } from './Section';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Github, Linkedin, ArrowUpRight, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { content } = useLanguage();
  const { profile, ui } = content;
  const sectionRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <ArrowUpRight size={20} />;
    }
  };

  return (
    <Section id={SectionId.CONTACT} className="pb-12" isDark>
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Info */}
        <div ref={sectionRef} className="reveal space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{ui.contact.title}</h2>
            <p className="text-lg text-secondary leading-relaxed">
              {ui.contact.subtitle}
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <a href={`mailto:${profile.contactEmail}`} className="flex items-center gap-3 text-lg font-medium text-white hover:text-accent transition-colors">
              <Mail size={22} className="text-accent" />
              {profile.contactEmail}
            </a>
            <div className="flex gap-4 pt-4">
              {profile.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-background text-secondary hover:text-white hover:bg-accent/20 hover:scale-110 hover:rotate-6 rounded-full transition-all border border-white/5"
                  aria-label={social.platform}
                >
                  {getIcon(social.iconName)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-background p-8 md:p-10 rounded-2xl shadow-xl border border-white/5 transform transition-all duration-300 hover:shadow-neon-sm">
          {formState === 'success' ? (
            <div className="h-80 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-2 shadow-neon">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">{ui.contact.successTitle}</h3>
              <p className="text-secondary">{ui.contact.successMessage}</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm font-semibold text-accent hover:text-white transition-colors"
              >
                {ui.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">{ui.contact.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">{ui.contact.emailLabel}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">{ui.contact.messageLabel}</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full py-4 bg-accent text-background font-bold rounded-lg hover:bg-white hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                {formState === 'submitting' ? (
                  <span>{ui.contact.sending}</span>
                ) : (
                  <>
                    <span>{ui.contact.sendButton}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/5 mt-24 pt-8 text-center text-sm text-secondary">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </Section>
  );
};