import type { BlogFeature } from "../types/content";
import { Icon } from "./Icon";
import { LiquidCard } from "./LiquidCard";

interface BlogCardProps {
  article: BlogFeature;
  index: number;
}

export function BlogCard({ article, index }: BlogCardProps) {
  return (
    <LiquidCard className="blog-card-shell">
      <a className="blog-card" href={article.url} target="_blank" rel="noreferrer">
      <div className="card-meta">
        <span className="blog-card__number">0{index + 1}</span>
        <time dateTime={article.date}>{article.date.replaceAll("-", " / ")}</time>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="text-link">阅读文章 <Icon name="arrow-up-right" size={16} /></span>
      </a>
    </LiquidCard>
  );
}
