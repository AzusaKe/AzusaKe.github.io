import { projects } from "../content/site";
import { GlassSurface } from "../components/GlassSurface";
import { Icon } from "../components/Icon";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage() {
  return (
    <div className="page-content inner-page">
      <section className="page-intro" aria-labelledby="projects-title">
        <p className="eyebrow"><span className="eyebrow__line" aria-hidden="true" />PROJECT ARCHIVE</p>
        <h1 id="projects-title">作品集<span className="accent">.</span></h1>
        <p>把想法做成可以运行的东西。这里记录已经公开，或正在走向公开的项目。</p>
      </section>

      <section className="project-grid project-grid--large" aria-label="项目列表">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </section>

      <GlassSurface className="note-panel">
        <div className="note-panel__icon" aria-hidden="true"><Icon name="spark" size={20} /></div>
        <div>
          <p className="section-kicker">A SMALL NOTE</p>
          <h2>项目会随着时间更新</h2>
          <p>项目状态和公开信息集中维护在这里；未公开的内容只保留必要的“即将公开”提示。</p>
        </div>
      </GlassSurface>
    </div>
  );
}
