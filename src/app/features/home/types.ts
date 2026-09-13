export type TabType = "home" | "about" | "portfolio" | "contact" | "blog";

export type ThemeColor =
  | "yellow"
  | "blue"
  | "green"
  | "purple"
  | "red"
  | "goldenrod"
  | "magenta"
  | "orange"
  | "yellowgreen"
  | "blueviolet";

export interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "ai" | "mobile" | "uiux";
  categoryLabel: string;
  image: string;
  originalImage?: string;
  client: string;
  languages: string[];
  previewUrl: string;
  date: string;
  description: string;
  published?: boolean;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[] | string;
  published?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
  type: "experience" | "education";
}

export interface SkillItem {
  name: string;
  percentage: number;
}
