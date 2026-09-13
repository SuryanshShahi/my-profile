import portfolioData from "@/data/portfolioData.json";
import { BlogItem, ProjectItem, SkillItem, TimelineItem } from "./types";

export const PERSONAL_INFO = portfolioData.personalInfo;
export const SKILLS: SkillItem[] = portfolioData.skills;
export const TIMELINE: TimelineItem[] = portfolioData.timeline as TimelineItem[];
export const PROJECTS: ProjectItem[] = (
  portfolioData.projects as ProjectItem[]
).filter((proj) => proj.published !== false);

export const BLOGS: BlogItem[] = (portfolioData.blogs as BlogItem[]).filter(
  (blog) => blog.published !== false
);

export default portfolioData;

