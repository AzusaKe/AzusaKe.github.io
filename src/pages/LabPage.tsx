import { labExperiments } from "../content/site";
import { GlassSurface } from "../components/GlassSurface";
import { Icon } from "../components/Icon";
import { LiquidCard } from "../components/LiquidCard";

export function LabPage() {
  return (
    <div className="page-content inner-page">
      <section className="page-intro" aria-labelledby="lab-title">
        <p className="eyebrow"><span className="eyebrow__line" aria-hidden="true" />EXPERIMENTAL ZONE</p>
        <h1 id="lab-title">实验室<span className="accent">.</span></h1>
        <p>一些不一定会变成产品的页面。早期实验保留原路径，新入口集中放在这里。</p>
      </section>

      <section className="lab-grid" aria-label="实验页面列表">
        {labExperiments.map((experiment, index) => (
          <LiquidCard className="lab-card" key={experiment.title}>
            <div className="card-meta">
              <span className="section-kicker">0{index + 1} / {experiment.label}</span>
              <span className="lab-card__mark" aria-hidden="true">↗</span>
            </div>
            <h2>{experiment.title}</h2>
            <p>{experiment.description}</p>
            <a className="text-link" href={experiment.url}>打开实验页面 <Icon name="arrow-up-right" size={16} /></a>
          </LiquidCard>
        ))}
      </section>

      <GlassSurface className="legacy-panel">
        <p className="section-kicker">LEGACY ROUTES</p>
        <h2>旧链接继续有效</h2>
        <p>构建时会把旧实验页及其必要资源复制到发布目录；首页不会加载 Galaxy 的大体积脚本。</p>
        <div className="route-list" aria-label="保留的旧路径">
          <a href="/galaxy/"><code>/galaxy/</code><Icon name="arrow-up-right" size={15} /></a>
          <a href="/hacker.html"><code>/hacker.html</code><Icon name="arrow-up-right" size={15} /></a>
        </div>
      </GlassSurface>
    </div>
  );
}
