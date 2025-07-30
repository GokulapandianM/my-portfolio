export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}