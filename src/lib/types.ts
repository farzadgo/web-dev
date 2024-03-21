export type Image = {
  id: number;
  alt: string;
  url: string;
};

export type Project = {
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