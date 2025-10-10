export interface Profile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  score: string;
  startYear: string;
  endYear: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  year: string;
}

export interface Skill {
  id: string;
  category: string;
  skillsList: string;
}

export interface CodingPlatform {
  id: string;
  platform: string;
  profileUrl: string;
  rank: string;
  problemsSolved: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface ResumeData {
  profile: Profile;
  education: Education[];
  internships: Internship[];
  projects: Project[];
  skills: Skill[];
  codingPlatforms: CodingPlatform[];
  certifications: Certification[];
}