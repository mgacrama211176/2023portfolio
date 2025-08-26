export interface Project {
  title: string;
  about: string;
  image: string;
  source?: string;
  demo?: string;
  technologies: Array<{ title: string; image: string }>;
}

export interface Experiences {
  picture: string;
  position: string;
  companyName: string;
  techUsed: Array<string>;
  startedEnd: string;
  workLoad: Array<string>;
}

export type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
