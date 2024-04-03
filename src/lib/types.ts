interface Image {
  id: number;
  alt: string;
  url: string;
};

export interface Project {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  images?: Image[];
  employer?: string;
  designer?: string;
  description?: string;
}

export enum ModalType {
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  EDUCATION = 'education'
}

export interface Modal {
  id: number;
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  type: ModalType;
}