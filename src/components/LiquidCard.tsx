import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";

interface LiquidCardProps extends PropsWithChildren {
  className?: string;
}

export function LiquidCard({ className = "", children }: LiquidCardProps) {
  return (
    <div className={`liquid-card-host ${className}`.trim()}>
      <LiquidGlass
        className="liquid-card-glass"
        mode="standard"
        displacementScale={100}
        blurAmount={0.5}
        saturation={140}
        aberrationIntensity={2}
        elasticity={0}
        cornerRadius={24}
        padding="0"
      >
        <div className="liquid-card-content">{children}</div>
      </LiquidGlass>
    </div>
  );
}
