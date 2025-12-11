import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background selection:bg-accent selection:text-background">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;