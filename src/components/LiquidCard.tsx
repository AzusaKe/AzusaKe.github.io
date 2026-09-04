import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";
import { useGlassSettings } from "./GlassSettings";

interface LiquidCardProps extends PropsWithChildren {
  className?: string;
}

export function LiquidCard({ className = "", children }: LiquidCardProps) {
  const { settings } = useGlassSettings();

  return (
    <div className={`liquid-card-host ${className}`.trim()}>
      <LiquidGlass
        className="liquid-card-glass"
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
        <div className="liquid-card-content">{children}</div>
      </LiquidGlass>
    </div>
  );
}
