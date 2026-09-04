import type { Project } from "../types/content";
import { Icon } from "./Icon";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="project-card glass-surface">
      <div className="card-meta">
        <span className={`status-chip status-chip--${project.status}`}>
          <span className="status-chip__dot" aria-hidden="true" />
          {isComingSoon ? "即将公开" : "进行中"}
        </span>
        <span className="card-index" aria-hidden="true">0{index + 1}</span>
      </div>
      <div className="project-symbol" aria-hidden="true">
        {project.title === "Halo" ? "◌" : "···"}
      </div>
      <h3>{project.title}</h3>
      {!isComingSoon && <p>{project.description}</p>}
      {!isComingSoon && (
        <ul className="tag-list" aria-label={`${project.title} 技术标签`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
      <div className="card-action">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noreferrer">
            查看项目 <Icon name="arrow-up-right" size={16} />
          </a>
        ) : (
          <span className="card-action__muted">公开信息整理中</span>
        )}
      </div>
    </article>
  );
}
