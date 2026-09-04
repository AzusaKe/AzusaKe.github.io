import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";

export function LiquidHeroCard({ children }: PropsWithChildren) {
  return (
    <div className="hero-liquid-host">
      <LiquidGlass
        className="hero-liquid-glass"
        mode="standard"
        displacementScale={26}
        blurAmount={0.1}
        saturation={150}
        aberrationIntensity={1.5}
        elasticity={0.14}
        cornerRadius={32}
        padding="0"
      >
        <div className="hero-card__inner">{children}</div>
      </LiquidGlass>
    </div>
  );
}
