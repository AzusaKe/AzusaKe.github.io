import type { PropsWithChildren } from "react";
import LiquidGlass from "liquid-glass-react";
import { useGlassSettings } from "./GlassSettings";

interface LiquidPanelProps extends PropsWithChildren {
  className?: string;
}

export function LiquidPanel({ className = "", children }: LiquidPanelProps) {
  const { settings } = useGlassSettings();

  return (
    <div className={`liquid-panel-host ${className}`.trim()}>
      <LiquidGlass
        className="liquid-panel-glass"
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
        <div className="liquid-panel-content">{children}</div>
      </LiquidGlass>
    </div>
  );
}
