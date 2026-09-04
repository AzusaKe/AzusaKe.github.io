import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";
import { useGlassSettings } from "./GlassSettings";

export function LiquidHeroCard({ children }: PropsWithChildren) {
  const { settings } = useGlassSettings();

  return (
    <div className="hero-liquid-host">
      <LiquidGlass
        className="hero-liquid-glass"
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
        <div className="hero-card__inner">{children}</div>
      </LiquidGlass>
    </div>
  );
}
