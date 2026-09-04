import { useMemo, useState } from "react";
import LiquidGlass from "liquid-glass-react";
import { GlassSurface } from "../components/GlassSurface";
import { Icon } from "../components/Icon";

type GlassMode = "standard" | "polar" | "prominent" | "shader";
type NumericSetting = "displacementScale" | "blurAmount" | "saturation" | "aberrationIntensity" | "elasticity" | "cornerRadius";

interface GlassSettings {
  mode: GlassMode;
  displacementScale: number;
  blurAmount: number;
  saturation: number;
  aberrationIntensity: number;
  elasticity: number;
  cornerRadius: number;
  overLight: boolean;
}

const defaultSettings: GlassSettings = {
  mode: "standard",
  displacementScale: 42,
  blurAmount: 0.08,
  saturation: 155,
  aberrationIntensity: 4,
  elasticity: 0.18,
  cornerRadius: 30,
  overLight: false,
};

interface RangeControlProps {
  id: string;
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  onChange: (value: number) => void;
}

function RangeControl({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  formatValue = String,
  onChange,
}: RangeControlProps) {
  return (
    <label className="range-control" htmlFor={id}>
      <span className="range-control__topline">
        <span>{label}</span>
        <output htmlFor={id}>{formatValue(value)}</output>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-describedby={id + "-hint"}
      />
      <span className="range-control__hint" id={id + "-hint"}>{hint}</span>
    </label>
  );
}

export function GlassPlaygroundPage() {
  const [settings, setSettings] = useState<GlassSettings>(defaultSettings);

  const updateNumber = (key: NumericSetting, value: number) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const configText = useMemo(
    () => [
      "<LiquidGlass",
      "  mode=\"" + settings.mode + "\"",
      "  displacementScale={" + settings.displacementScale + "}",
      "  blurAmount={" + settings.blurAmount.toFixed(2) + "}",
      "  saturation={" + settings.saturation + "}",
      "  aberrationIntensity={" + settings.aberrationIntensity.toFixed(1) + "}",
      "  elasticity={" + settings.elasticity.toFixed(2) + "}",
      "  cornerRadius={" + settings.cornerRadius + "}",
      "  overLight={" + settings.overLight + "}",
      "  padding=\"0\"",
      ">",
      "  ...",
      "</LiquidGlass>",
    ].join("\n"),
    [settings],
  );

  return (
    <div className="page-content inner-page glass-playground-page">
      <section className="page-intro" aria-labelledby="glass-playground-title">
        <p className="eyebrow"><span className="eyebrow__line" aria-hidden="true" />LIQUID GLASS LAB</p>
        <h1 id="glass-playground-title">液态玻璃调试<span className="accent">.</span></h1>
        <p>把色散、折射、模糊和回弹参数放到手边，拖动滑块就能即时观察效果。彩色背景是用来帮助辨认边缘色散的。</p>
      </section>

      <div className="glass-playground-layout">
        <GlassSurface className="glass-controls">
          <div className="playground-panel-heading">
            <div>
              <p className="section-kicker">PARAMETERS</p>
              <h2>参数面板</h2>
            </div>
            <button className="reset-button" type="button" onClick={() => setSettings(defaultSettings)}>
              重置
            </button>
          </div>

          <label className="mode-control" htmlFor="glass-mode">
            <span>折射模式</span>
            <select
              id="glass-mode"
              value={settings.mode}
              onChange={(event) => setSettings((current) => ({ ...current, mode: event.target.value as GlassMode }))}
            >
              <option value="standard">standard · 通用</option>
              <option value="polar">polar · 极坐标</option>
              <option value="prominent">prominent · 强折射</option>
              <option value="shader">shader · 实验性</option>
            </select>
          </label>

          <div className="range-list">
            <RangeControl
              id="displacement-scale"
              label="位移强度"
              hint="displacementScale · 0 — 100"
              value={settings.displacementScale}
              min={0}
              max={100}
              step={1}
              onChange={(value) => updateNumber("displacementScale", value)}
            />
            <RangeControl
              id="blur-amount"
              label="模糊量"
              hint="blurAmount · 0 — 0.30"
              value={settings.blurAmount}
              min={0}
              max={0.3}
              step={0.01}
              formatValue={(value) => value.toFixed(2)}
              onChange={(value) => updateNumber("blurAmount", value)}
            />
            <RangeControl
              id="saturation"
              label="饱和度"
              hint="saturation · 80 — 240%"
              value={settings.saturation}
              min={80}
              max={240}
              step={1}
              formatValue={(value) => value + "%"}
              onChange={(value) => updateNumber("saturation", value)}
            />
            <RangeControl
              id="aberration-intensity"
              label="色散强度"
              hint="aberrationIntensity · 0 — 10"
              value={settings.aberrationIntensity}
              min={0}
              max={10}
              step={0.1}
              formatValue={(value) => value.toFixed(1)}
              onChange={(value) => updateNumber("aberrationIntensity", value)}
            />
            <RangeControl
              id="elasticity"
              label="回弹"
              hint="elasticity · 0 — 1"
              value={settings.elasticity}
              min={0}
              max={1}
              step={0.01}
              formatValue={(value) => value.toFixed(2)}
              onChange={(value) => updateNumber("elasticity", value)}
            />
            <RangeControl
              id="corner-radius"
              label="圆角"
              hint="cornerRadius · 0 — 80px"
              value={settings.cornerRadius}
              min={0}
              max={80}
              step={1}
              formatValue={(value) => value + "px"}
              onChange={(value) => updateNumber("cornerRadius", value)}
            />
          </div>

          <label className="toggle-control" htmlFor="over-light">
            <input
              id="over-light"
              type="checkbox"
              checked={settings.overLight}
              onChange={(event) => setSettings((current) => ({ ...current, overLight: event.target.checked }))}
            />
            <span>
              <span>浅色背景模式</span>
              <small>overLight · 为亮色背景调整对比度</small>
            </span>
          </label>

          <p className="playground-license-note">
            实际效果取决于浏览器对 SVG displacement filter 的支持；Chrome 最完整，Firefox/Safari 会自动使用可读的 CSS 降级。<a href="/THIRD-PARTY-NOTICES.md">查看许可说明</a>
          </p>
        </GlassSurface>

        <section className="glass-preview-panel" aria-label="液态玻璃效果预览">
          <div className="glass-preview-backdrop">
            <span className="preview-grid-lines" aria-hidden="true" />
            <span className="preview-orb preview-orb--cyan" aria-hidden="true" />
            <span className="preview-orb preview-orb--purple" aria-hidden="true" />
            <span className="preview-orb preview-orb--pink" aria-hidden="true" />
            <p className="preview-stamp">LIVE PREVIEW / 01</p>
            <div className="playground-liquid-host">
              <LiquidGlass
                className="playground-liquid-glass"
                mode={settings.mode}
                displacementScale={settings.displacementScale}
                blurAmount={settings.blurAmount}
                saturation={settings.saturation}
                aberrationIntensity={settings.aberrationIntensity}
                elasticity={settings.elasticity}
                cornerRadius={settings.cornerRadius}
                overLight={settings.overLight}
                padding="0"
              >
                <div className="playground-glass-card">
                  <div className="playground-glass-card__meta">
                    <span>AZUSA_KE</span>
                    <Icon name="spark" size={18} />
                  </div>
                  <h2>See the light bend.</h2>
                  <p>移动指针或拖动左侧滑块，观察边缘颜色与背景纹理的变化。</p>
                  <div className="preview-swatch-row" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </LiquidGlass>
            </div>
            <span className="preview-card-caption">displacement / chromatic aberration / blur</span>
          </div>
        </section>
      </div>

      <GlassSurface className="playground-code-panel">
        <div>
          <p className="section-kicker">CURRENT PROPS</p>
          <h2 id="glass-config-title">当前配置</h2>
        </div>
        <pre><code>{configText}</code></pre>
      </GlassSurface>

      <div className="playground-note-panel" role="note">
        <Icon name="info" size={17} />
        <p>这个调试页使用的是站点正式依赖的同一套 liquid-glass-react 组件；调好参数后，可以把当前值复制回组件配置。</p>
      </div>
    </div>
  );
}
