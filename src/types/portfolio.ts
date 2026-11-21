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
  /** Public product page URL (distinct from repo). Null or placeholder until live. */
  productURL?: string | null;
  /** True when productURL is a swap-ready placeholder, not a live link. */
  productURLIsPlaceholder?: boolean;
};

export type Interest = {
  name: string;
  description: string;
};

export type PhotoSlot = {
  id: string;
  label: string;
  alt: string;
  /** Set to a public path when the file is ready; null keeps the placeholder. */
  src: string | null;
  /** Suggested drop-in path for easy swapping later. */
  pathHint?: string;
  aspect: "4/5" | "3/4" | "1/1" | "16/9";
};

export type SignatureAsset = {
  /** Public path to the signature file (PNG/JPG/SVG). */
  src: string;
  alt: string;
  /** True while the checked-in file is still a placeholder graphic. */
  isPlaceholder: boolean;
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
  photos: PhotoSlot[];
  signature: SignatureAsset;
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
