import { featuredBlogs, profile, projects, socialLinks } from "../content/site";
import { BlogCard } from "../components/BlogCard";
import { GlassSurface } from "../components/GlassSurface";
import { Icon } from "../components/Icon";
import { LiquidAction, PlainAction } from "../components/LiquidAction";
import { LiquidHeroCard } from "../components/LiquidHeroCard";
import { LiveClock } from "../components/LiveClock";
import { ProjectCard } from "../components/ProjectCard";

export function HomePage() {
  return (
    <div className="page-content page-home">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow__line" aria-hidden="true" />{profile.eyebrow}</p>
          <h1 id="hero-title">{profile.name}<span className="accent">.</span></h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions" aria-label="主要入口">
            <LiquidAction href="/projects/">探索作品集</LiquidAction>
            <PlainAction href="https://blog.azusake.network/" target="_blank" rel="noreferrer" icon="blog">阅读博客</PlainAction>
          </div>
          <p className="build-note"><span className="build-note__dot" aria-hidden="true" />持续建设中 · 这里会慢慢长出更多项目</p>
        </div>

        <LiquidHeroCard>
          <div className="hero-card-head">
            <span>LOCAL SIGNAL / 01</span>
            <span className="hero-card-status"><span aria-hidden="true" />ONLINE</span>
          </div>
          <div className="hero-card-time-wrap">
            <LiveClock />
            <span className="hero-card-time-zone">HKT · UTC+8</span>
          </div>
          <div className="hero-card-rule" aria-hidden="true" />
          <p className="hero-card-caption">把正在发生的事情记录下来，<br />也给下一次灵感留一个入口。</p>
          <div className="hero-card-footer">
            <span>AZUSA_KE</span>
            <Icon name="spark" size={18} />
          </div>
        </LiquidHeroCard>
      </section>

      <section className="content-section" aria-labelledby="projects-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2 id="projects-heading">正在做的事</h2>
          </div>
          <a className="text-link section-heading__link" href="/projects/">查看全部 <Icon name="arrow-up-right" size={16} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </div>
      </section>

      <section className="content-section blog-section" aria-labelledby="blog-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">FROM THE BLOG</p>
            <h2 id="blog-heading">最近写下的东西</h2>
          </div>
          <a className="text-link section-heading__link" href="https://blog.azusake.network/" target="_blank" rel="noreferrer">进入博客 <Icon name="arrow-up-right" size={16} /></a>
        </div>
        <div className="blog-grid">
          {featuredBlogs.map((article, index) => <BlogCard article={article} index={index} key={article.title} />)}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-heading">
        <GlassSurface className="contact-panel">
          <div>
            <p className="section-kicker">OPEN CHANNEL</p>
            <h2 id="contact-heading">找我，或者只是打个招呼。</h2>
          </div>
          <div className="social-grid">
            {socialLinks.map((link) => (
              <a className="social-link" href={link.url} target={link.newWindow ? "_blank" : undefined} rel={link.newWindow ? "noreferrer" : undefined} key={link.name}>
                <span className="social-link__icon"><Icon name={link.icon} size={18} /></span>
                <span>{link.name}</span>
                <Icon name="arrow-up-right" size={15} />
              </a>
            ))}
          </div>
        </GlassSurface>
      </section>
    </div>
  );
}
