import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";

export function LiquidHeroCard({ children }: PropsWithChildren) {
  return (
    <div className="hero-liquid-host">
      <LiquidGlass
        className="hero-liquid-glass"
        mode="standard"
        displacementScale={100}
        blurAmount={0.5}
        saturation={140}
        aberrationIntensity={2}
        elasticity={0}
        cornerRadius={32}
        padding="0"
      >
        <div className="hero-card__inner">{children}</div>
      </LiquidGlass>
    </div>
  );
}
