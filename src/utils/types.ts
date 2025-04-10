export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}