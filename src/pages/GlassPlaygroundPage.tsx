import { useMemo } from "react";
import LiquidGlass from "liquid-glass-react";
import { useGlassSettings, type GlassMode, type GlassSettings } from "../components/GlassSettings";
import { GlassSurface } from "../components/GlassSurface";
import { Icon } from "../components/Icon";

type NumericSetting = keyof Pick<
  GlassSettings,
  "displacementScale" | "blurAmount" | "saturation" | "aberrationIntensity" | "elasticity" | "cornerRadius"
>;

const glassModes: Array<{ value: GlassMode; label: string }> = [
  { value: "standard", label: "standard · 通用" },
  { value: "polar", label: "polar · 极坐标" },
  { value: "prominent", label: "prominent · 强折射" },
  { value: "shader", label: "shader · 实验性" },
];

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
  const { settings, updateSettings, resetSettings } = useGlassSettings();

  const updateNumber = (key: NumericSetting, value: number) => {
    updateSettings({ [key]: value });
  };

  const configText = useMemo(
    () => [
      "<LiquidGlass",
      "  mode=\"" + settings.mode + "\"",
      "  displacementScale={" + settings.displacementScale + "}",
      "  blurAmount={" + settings.blurAmount.toFixed(2) + "}",
      "  saturation={" + settings.saturation + "}",
      "  aberrationIntensity={" + settings.aberrationIntensity.toFixed(0) + "}",
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
        <p className="playground-saved-note">当前参数会应用到全站玻璃面板，并保存到本机浏览器。</p>
      </section>

      <div className="glass-playground-layout">
        <GlassSurface className="glass-controls">
          <div className="playground-panel-heading">
            <div>
              <p className="section-kicker">PARAMETERS</p>
              <h2>参数面板</h2>
            </div>
            <button className="reset-button" type="button" onClick={resetSettings}>
              重置
            </button>
          </div>

          <fieldset className="mode-control">
            <legend>折射模式</legend>
            <div className="mode-options">
              {glassModes.map((mode) => (
                <label className="mode-option" htmlFor={"glass-mode-" + mode.value} key={mode.value}>
                  <input
                    id={"glass-mode-" + mode.value}
                    type="radio"
                    name="glass-mode"
                    value={mode.value}
                    checked={settings.mode === mode.value}
                    onChange={() => updateSettings({ mode: mode.value })}
                  />
                  <span>{mode.label}</span>
                </label>
              ))}
            </div>
            <p className="control-hint">控制折射计算方式</p>
          </fieldset>

          <div className="range-list">
            <RangeControl
              id="displacement-scale"
              label="位移强度"
              hint="displacementScale · 0 — 200"
              value={settings.displacementScale}
              min={0}
              max={200}
              step={1}
              onChange={(value) => updateNumber("displacementScale", value)}
            />
            <RangeControl
              id="blur-amount"
              label="模糊量"
              hint="blurAmount · 0 — 1.00"
              value={settings.blurAmount}
              min={0}
              max={1}
              step={0.01}
              formatValue={(value) => value.toFixed(2)}
              onChange={(value) => updateNumber("blurAmount", value)}
            />
            <RangeControl
              id="saturation"
              label="饱和度"
              hint="saturation · 100 — 300%"
              value={settings.saturation}
              min={100}
              max={300}
              step={10}
              formatValue={(value) => value + "%"}
              onChange={(value) => updateNumber("saturation", value)}
            />
            <RangeControl
              id="aberration-intensity"
              label="色散强度"
              hint="aberrationIntensity · 0 — 20"
              value={settings.aberrationIntensity}
              min={0}
              max={20}
              step={1}
              formatValue={(value) => value.toFixed(0)}
              onChange={(value) => updateNumber("aberrationIntensity", value)}
            />
            <RangeControl
              id="elasticity"
              label="回弹"
              hint="elasticity · 0 — 1"
              value={settings.elasticity}
              min={0}
              max={1}
              step={0.05}
              formatValue={(value) => value.toFixed(2)}
              onChange={(value) => updateNumber("elasticity", value)}
            />
            <RangeControl
              id="corner-radius"
              label="圆角"
              hint="cornerRadius · 0 — 100px"
              value={settings.cornerRadius}
              min={0}
              max={100}
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
              onChange={(event) => updateSettings({ overLight: event.target.checked })}
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
            <div className="glass-demo-scroll" aria-hidden="true">
              <div className="glass-demo-content">
                <span className="glass-demo-orb glass-demo-orb--cyan" />
                <span className="glass-demo-orb glass-demo-orb--purple" />
                <span className="glass-demo-orb glass-demo-orb--pink" />
                <span className="glass-demo-ribbon glass-demo-ribbon--cyan" />
                <span className="glass-demo-ribbon glass-demo-ribbon--purple" />
                <span className="glass-demo-ribbon glass-demo-ribbon--pink" />
                <div className="glass-demo-content__label">BACKDROP / COLOR FIELD</div>
                <div className="glass-demo-content__bars"><span /><span /><span /><span /></div>
              </div>
            </div>
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
        <p>这个调试页使用的是站点正式依赖的同一套 liquid-glass-react 组件；当前配置会直接驱动首页、作品集和实验室里的玻璃面板。</p>
      </div>
    </div>
  );
}
