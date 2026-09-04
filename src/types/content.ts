export type ProjectStatus = "live" | "coming-soon";

export type IconName = "github" | "blog" | "discord" | "mail" | "arrow-up-right" | "spark" | "info";

export interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  url?: string;
  cover?: string;
}

export interface BlogFeature {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

export interface SocialLink {
  name: string;
  icon: IconName;
  url: string;
  newWindow?: boolean;
}
