export enum SectionId {
  HOME = 'home',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  ABOUT = 'about',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact',
}

export type Language = 'en' | 'zh';

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Github' | 'Linkedin' | 'Twitter' | 'Mail';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  priority: number;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
  type: 'hard' | 'soft';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  experience: {
    year: string;
    role: string;
    company: string;
    description: string;
  }[];
  contactEmail: string;
  socials: SocialLink[];
  resumeUrl: string;
}

export interface UIStrings {
  nav: { [key in SectionId]: string };
  hero: {
    viewWork: string;
    resume: string;
    location: string;
  };
  projects: {
    title: string;
    viewLive: string;
    viewCode: string;
    impact: string;
  };
  skills: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    experienceTitle: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
  };
}