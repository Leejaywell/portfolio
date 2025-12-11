import { Profile, Project, SkillCategory, Testimonial, SectionId, UIStrings } from './types';

// SHARED DATA (Language Independent)
export const NAV_LINKS = [
  { id: SectionId.HOME },
  { id: SectionId.PROJECTS },
  { id: SectionId.SKILLS },
  { id: SectionId.ABOUT },
  { id: SectionId.TESTIMONIALS },
  { id: SectionId.CONTACT },
];

const SHARED_SOCIALS = [
  { platform: "GitHub", url: "https://github.com", iconName: "Github" as const },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" as const },
  { platform: "Email", url: "mailto:alex.chen.dev@example.com", iconName: "Mail" as const }
];

const RESUME_URL = "#";

// ENGLISH CONTENT
const EN_PROFILE: Profile = {
  name: "Alex Chen",
  title: "Senior Frontend Engineer",
  tagline: "Architecting scalable, high-performance web applications with a focus on user experience and code quality.",
  contactEmail: "alex.chen.dev@example.com",
  socials: SHARED_SOCIALS,
  resumeUrl: RESUME_URL,
  about: "I am a product-minded software engineer with over 6 years of experience specializing in the React ecosystem. My passion lies in bridging the gap between design and engineering. I don't just write code; I build systems that solve real business problems. I advocate for clean architecture, accessibility, and performance optimization.",
  experience: [
    {
      year: "2021 - Present",
      role: "Senior Frontend Engineer",
      company: "TechFlow Solutions",
      description: "Led a team of 5 developers in migrating a legacy monolith to a micro-frontend architecture, improving deployment frequency by 40%."
    },
    {
      year: "2018 - 2021",
      role: "Frontend Developer",
      company: "Creative Pulse Agency",
      description: "Delivered 15+ award-winning websites for Fortune 500 clients. Specialized in complex animations and interactive data visualizations."
    }
  ]
};

const EN_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Analytics Dashboard",
    description: "A real-time analytics platform processing over 1M events daily. Features customizable widgets, complex data visualization, and sub-second query responses.",
    role: "Lead Architect",
    technologies: ["React", "TypeScript", "D3.js", "GraphQL"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    priority: 1,
    metrics: "Reduced data load time by 60% via virtualization",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "p2",
    title: "SaaS Design System",
    description: "Built a comprehensive component library used across 4 different product lines. Includes extensive documentation, automated testing, and accessibility compliance (WCAG 2.1 AA).",
    role: "Core Maintainer",
    technologies: ["React", "Storybook", "Tailwind CSS", "Jest"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    priority: 2,
    metrics: "Increased dev velocity by 25%",
    repoUrl: "#"
  },
  {
    id: "p3",
    title: "AI Content Generator",
    description: "An interface for generative text and image creation. Implemented streaming responses and robust error handling for a seamless user experience.",
    role: "Frontend Lead",
    technologies: ["Next.js", "OpenAI API", "WebSockets"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    priority: 3,
    demoUrl: "#"
  }
];

const EN_SKILLS: SkillCategory[] = [
  {
    title: "Core Technologies",
    type: "hard",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "React 18", "Node.js"]
  },
  {
    title: "Frameworks & Tools",
    type: "hard",
    items: ["Next.js", "Tailwind CSS", "Redux Toolkit", "React Query", "Webpack/Vite", "Docker"]
  },
  {
    title: "Professional",
    type: "soft",
    items: ["Technical Leadership", "System Architecture", "Agile/Scrum", "Mentoring", "Code Review"]
  }
];

const EN_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow Solutions",
    text: "Alex transformed our complex data requirements into a seamless, intuitive dashboard. His attention to performance details saved us months of technical debt.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "t2",
    name: "Marcus Thorne",
    role: "CTO",
    company: "Creative Pulse",
    text: "One of the most reliable engineers I've worked with. Alex brings not just coding skills, but a product mindset that elevates the entire team's output.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "Senior Designer",
    company: "Freelance Client",
    text: "Bridging the gap between design and dev is rare, but Alex does it perfectly. The pixel-perfect implementation was exactly what my portfolio needed.",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const EN_UI: UIStrings = {
  nav: {
    [SectionId.HOME]: "Home",
    [SectionId.PROJECTS]: "Projects",
    [SectionId.SKILLS]: "Skills",
    [SectionId.ABOUT]: "About",
    [SectionId.TESTIMONIALS]: "Stories",
    [SectionId.CONTACT]: "Contact",
  },
  hero: {
    viewWork: "View Selected Works",
    resume: "Resume",
    location: "Based in San Francisco. Turning complex problems into elegant interfaces."
  },
  projects: {
    title: "Selected Projects",
    viewLive: "Live Demo",
    viewCode: "Code",
    impact: "Impact"
  },
  skills: {
    title: "Expertise",
    description: "My technical toolset is built on modern standards and best practices. I value code maintainability and user accessibility above all else."
  },
  about: {
    title: "About Me",
    experienceTitle: "Experience"
  },
  testimonials: {
    title: "Success Stories"
  },
  contact: {
    title: "Let's work together.",
    subtitle: "Currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi, I'm all ears.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successMessage: "Thanks for reaching out. I'll get back to you soon.",
    sendAnother: "Send another message"
  }
};

// CHINESE CONTENT
const ZH_PROFILE: Profile = {
  name: "Alex Chen",
  title: "高级前端工程师",
  tagline: "构建可扩展的高性能 Web 应用，专注于用户体验与代码质量。",
  contactEmail: "alex.chen.dev@example.com",
  socials: SHARED_SOCIALS,
  resumeUrl: RESUME_URL,
  about: "我是一名拥有超过6年 React 生态系统经验的产品导向型软件工程师。我的热情在于弥合设计与工程之间的鸿沟。我不仅编写代码，更构建能够解决实际业务问题的系统。我推崇整洁架构、无障碍设计以及性能优化。",
  experience: [
    {
      year: "2021 - 至今",
      role: "高级前端工程师",
      company: "TechFlow Solutions",
      description: "领导5人开发团队将遗留单体应用迁移至微前端架构，使部署频率提高了40%。"
    },
    {
      year: "2018 - 2021",
      role: "前端开发人员",
      company: "Creative Pulse Agency",
      description: "为世界500强客户交付了15+个获奖网站。专注于复杂动画与交互式数据可视化。"
    }
  ]
};

const ZH_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "电商数据分析仪表盘",
    description: "一个每日处理超过100万个事件的实时分析平台。具有可定制的小部件、复杂的数据可视化和亚秒级查询响应。",
    role: "首席架构师",
    technologies: ["React", "TypeScript", "D3.js", "GraphQL"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    priority: 1,
    metrics: "通过虚拟化将数据加载时间减少了60%",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "p2",
    title: "SaaS 设计系统",
    description: "构建了一个用于4个不同产品线的综合组件库。包括大量文档、自动化测试和无障碍合规 (WCAG 2.1 AA)。",
    role: "核心维护者",
    technologies: ["React", "Storybook", "Tailwind CSS", "Jest"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    priority: 2,
    metrics: "开发速度提高了25%",
    repoUrl: "#"
  },
  {
    id: "p3",
    title: "AI 内容生成器",
    description: "用于生成文本和图像的界面。实施了流式响应和强大的错误处理，以实现无缝的用户体验。",
    role: "前端负责人",
    technologies: ["Next.js", "OpenAI API", "WebSockets"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    priority: 3,
    demoUrl: "#"
  }
];

const ZH_SKILLS: SkillCategory[] = [
  {
    title: "核心技术",
    type: "hard",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "React 18", "Node.js"]
  },
  {
    title: "框架与工具",
    type: "hard",
    items: ["Next.js", "Tailwind CSS", "Redux Toolkit", "React Query", "Webpack/Vite", "Docker"]
  },
  {
    title: "专业能力",
    type: "soft",
    items: ["技术领导力", "系统架构", "敏捷/Scrum", "导师指导", "代码审查"]
  }
];

const ZH_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "产品经理",
    company: "TechFlow Solutions",
    text: "Alex 将我们复杂的数据需求转化为了一个无缝、直观的仪表盘。他对性能细节的关注为我们要回了数月的技术债务。",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "t2",
    name: "Marcus Thorne",
    role: "CTO",
    company: "Creative Pulse",
    text: "是我共事过的最可靠的工程师之一。Alex 不仅带来编码技能，更带来了提升整个团队产出的产品思维。",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "高级设计师",
    company: "自由职业客户",
    text: "弥合设计与开发之间的鸿沟很难，但 Alex 完美做到了。像素级的实现正是我作品集所需要的。",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const ZH_UI: UIStrings = {
  nav: {
    [SectionId.HOME]: "首页",
    [SectionId.PROJECTS]: "项目",
    [SectionId.SKILLS]: "技能",
    [SectionId.ABOUT]: "关于",
    [SectionId.TESTIMONIALS]: "评价",
    [SectionId.CONTACT]: "联系",
  },
  hero: {
    viewWork: "查看精选作品",
    resume: "简历",
    location: "常驻旧金山。将复杂问题转化为优雅的界面。"
  },
  projects: {
    title: "精选项目",
    viewLive: "在线演示",
    viewCode: "代码",
    impact: "影响力"
  },
  skills: {
    title: "专业技能",
    description: "我的技术工具栈建立在现代标准和最佳实践之上。我将代码可维护性和用户无障碍性视为重中之重。"
  },
  about: {
    title: "关于我",
    experienceTitle: "工作经历"
  },
  testimonials: {
    title: "成功案例"
  },
  contact: {
    title: "期待合作",
    subtitle: "目前对新机会持开放态度。无论您有项目构想、问题咨询，还是仅仅想打个招呼，我都乐意倾听。",
    nameLabel: "姓名",
    emailLabel: "邮箱",
    messageLabel: "留言内容",
    sendButton: "发送消息",
    sending: "发送中...",
    successTitle: "消息已发送！",
    successMessage: "感谢您的联系，我会尽快回复。",
    sendAnother: "发送另一条消息"
  }
};

export const CONTENT = {
  en: {
    profile: EN_PROFILE,
    projects: EN_PROJECTS,
    skills: EN_SKILLS,
    testimonials: EN_TESTIMONIALS,
    ui: EN_UI
  },
  zh: {
    profile: ZH_PROFILE,
    projects: ZH_PROJECTS,
    skills: ZH_SKILLS,
    testimonials: ZH_TESTIMONIALS,
    ui: ZH_UI
  }
};