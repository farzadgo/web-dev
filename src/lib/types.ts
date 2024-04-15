interface Image {
  id: number;
  alt: string;
  url: string;
};

export enum Language {
  EN = 'EN',
  DE = 'DE'
}

interface LingualContent {
  [Language.EN]: string;
  [Language.DE]: string;
}

export interface Project {
  id: number;
  title: LingualContent;
  date: string;
  endDate?: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  images?: Image[];
  employer?: string;
  designer?: string;
  description?: LingualContent;
}

export enum ModalType {
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  EDUCATION = 'education'
}

export interface Modal {
  id: number;
  title: LingualContent;
  subtitle?: LingualContent;
  date?: string;
  duration?: LingualContent;
  description?: LingualContent;
  stack?: string[];
  type: ModalType;
}