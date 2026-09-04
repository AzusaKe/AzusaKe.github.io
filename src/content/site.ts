import type { BlogFeature, Project, SocialLink } from "../types/content";

export const profile = {
  name: "Azusa_Ke",
  eyebrow: "个人主页 · Minecraft 模组开发 · 代码实验",
  tagline: "时间停摆，往事归来...",
  intro: "在代码、方块和一些还没完成的想法之间持续迭代。",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/AzusaKe",
    newWindow: true,
  },
  {
    name: "博客",
    icon: "blog",
    url: "https://blog.azusake.network/",
    newWindow: true,
  },
  {
    name: "Discord",
    icon: "discord",
    url: "https://discord.gg/azusake",
    newWindow: true,
  },
  {
    name: "Email",
    icon: "mail",
    url: "mailto:zhuo9_9@outlook.com",
  },
];

export const projects: Project[] = [
  {
    title: "Halo",
    status: "live",
    description: "Halo 模组目前覆盖 Minecraft 1.20.1–26.2，包含 Fabric、Forge/NeoForge 共 8 个分支，以及 1 个网易适配分支。",
    tags: ["Java", "Fabric", "Forge/NeoForge", "网易适配"],
    url: "https://github.com/AzusaKe/Halo",
  },
  {
    title: "NoMoreBinding",
    status: "coming-soon",
    description: "",
    tags: [],
  },
];

export const featuredBlogs: BlogFeature[] = [
  {
    title: "期末大作业开发日志-2",
    date: "2025-06-08",
    excerpt: "期末大作业开发过程的第二篇记录。",
    url: "https://blog.azusake.network/2025/06/08/%E6%9C%9F%E6%9C%AB%E5%A4%A7%E4%BD%9C%E4%B8%9A%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97-2/",
  },
  {
    title: "期末大作业开发日志-1",
    date: "2025-05-14",
    excerpt: "从需求拆解开始记录一次课程项目的开发过程。",
    url: "https://blog.azusake.network/2025/05/14/%E6%9C%9F%E6%9C%AB%E5%A4%A7%E4%BD%9C%E4%B8%9A%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97-1/",
  },
  {
    title: "第一篇博客",
    date: "2025-05-02",
    excerpt: "从第一篇文章开始，留下持续写作的入口。",
    url: "https://blog.azusake.network/2025/05/02/%E7%AC%AC%E4%B8%80%E7%AF%87%E5%8D%9A%E5%AE%A2/",
  },
];

export const labExperiments = [
  {
    title: "Liquid Glass",
    label: "参数调试",
    description: "用滑块实时调整液态玻璃参数，观察色散、折射和弹性的变化。",
    url: "/lab/glass/",
  },
  {
    title: "Galaxy",
    label: "视觉实验",
    description: "保留原有的 Galaxy 视觉实验页，旧路径仍然可以直接访问。",
    url: "/galaxy/",
  },
  {
    title: "Hacker",
    label: "交互实验",
    description: "黑底字符雨页面，作为早期的赛博风格实验保留下来。",
    url: "/hacker.html",
  },
];
