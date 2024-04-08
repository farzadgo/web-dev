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
  liveUrl: string;
  codeUrl: string;
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

export enum Language {
  EN = 'EN',
  DE = 'DE'
}

interface LingualContent {
  [Language.EN]: string;
  [Language.DE]: string;
}

export interface Modal {
  id: number;
  title: LingualContent;
  subtitle?: LingualContent;
  date?: string;
  description?: LingualContent;
  stack?: string[];
  type: ModalType;
}