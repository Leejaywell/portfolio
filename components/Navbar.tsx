import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
          {content.profile.name.toUpperCase()}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors uppercase tracking-widest relative group"
            >
              {content.ui.nav[link.id]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 hover:border-accent text-xs font-semibold text-white hover:text-accent transition-all"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'EN' : '中文'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-white hover:text-accent transition-colors font-medium text-sm"
          >
            {language === 'en' ? 'EN' : '中文'}
          </button>
          <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col space-y-4 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-lg font-medium text-primary py-2 border-b border-white/5 last:border-0 hover:text-accent hover:pl-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.ui.nav[link.id]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};