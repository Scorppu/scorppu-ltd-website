export type SocialLinks = {
  linkedin?: string;
  github?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location?: string;
  workMode?: string;
  description: string[];
};

export type EducationEntry = {
  institution: string;
  credential: string;
  startDate: string;
  endDate: string;
  highlights?: string[];
};

export type Project = {
  name: string;
  year?: string;
  status?: string;
  description: string;
  githubURL: string | null;
};

export type Interest = {
  name: string;
  description: string;
};

export type Portfolio = {
  name: string;
  handle: string;
  location: string;
  role: string;
  company: string;
  shortIntro: string;
  about: string;
  email: string;
  portraitURL: string;
  featuredBuilding: {
    src: string;
    alt: string;
    caption: string;
  };
  socials: SocialLinks;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  projects: Project[];
  interests: Interest[];
  cvURL: string | null;
  cvFilename: string | null;
};
