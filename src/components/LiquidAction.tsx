import type { AnchorHTMLAttributes } from "react";
import LiquidGlass from "liquid-glass-react";
import { useGlassSettings } from "./GlassSettings";
import type { IconName } from "../types/content";
import { Icon } from "./Icon";

interface LiquidActionProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: string;
  icon?: IconName;
  variant?: "primary" | "secondary";
}

export function LiquidAction({ children, icon = "arrow-up-right", variant = "primary", ...linkProps }: LiquidActionProps) {
  const { settings } = useGlassSettings();

  return (
    <span className="liquid-action-host">
      <LiquidGlass
        className="liquid-action-glass"
        mode={settings.mode}
        displacementScale={settings.displacementScale}
        blurAmount={settings.blurAmount}
        saturation={settings.saturation}
        aberrationIntensity={settings.aberrationIntensity}
        elasticity={settings.elasticity}
        cornerRadius={999}
        overLight={settings.overLight}
        padding="0"
      >
        <a className={`button button-${variant}`} {...linkProps}>
          <span>{children}</span>
          <Icon name={icon} size={16} />
        </a>
      </LiquidGlass>
    </span>
  );
}

export function PlainAction({ children, icon = "arrow-up-right", variant = "secondary", ...linkProps }: LiquidActionProps) {
  return (
    <a className={`button button-${variant}`} {...linkProps}>
      <span>{children}</span>
      <Icon name={icon} size={16} />
    </a>
  );
}
