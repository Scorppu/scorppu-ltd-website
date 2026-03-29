export type SocialLinks = {
  linkedin?: string;
  github?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
};

export type WorkExperienceEntry = {
  startDate: string;
  endDate: string;
  role: string;
  description: string[];
};

export type Project = {
  name: string;
  description: string;
  githubURL: string | null;
};

export type Hobby = {
  name: string;
  description: string;
  youtubeVideoId?: string;
};

export type TeamMember = {
  slug: string;
  handle: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string;
  imageURL: string;
  socials: SocialLinks;
  workExperience: WorkExperienceEntry[];
  projects: Project[];
  hobbies: Hobby[];
  cvURL: string | null;
  cvFilename: string | null;
};
