import type { BlogFeature } from "../types/content";
import { Icon } from "./Icon";

interface BlogCardProps {
  article: BlogFeature;
  index: number;
}

export function BlogCard({ article, index }: BlogCardProps) {
  return (
    <a className="blog-card glass-surface" href={article.url} target="_blank" rel="noreferrer">
      <div className="card-meta">
        <span className="blog-card__number">0{index + 1}</span>
        <time dateTime={article.date}>{article.date.replaceAll("-", " / ")}</time>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="text-link">阅读文章 <Icon name="arrow-up-right" size={16} /></span>
    </a>
  );
}
