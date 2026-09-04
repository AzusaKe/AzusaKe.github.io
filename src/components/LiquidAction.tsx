import type { AnchorHTMLAttributes } from "react";
import LiquidGlass from "liquid-glass-react";
import type { IconName } from "../types/content";
import { Icon } from "./Icon";

interface LiquidActionProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: string;
  icon?: IconName;
  variant?: "primary" | "secondary";
}

export function LiquidAction({ children, icon = "arrow-up-right", variant = "primary", ...linkProps }: LiquidActionProps) {
  return (
    <span className="liquid-action-host">
      <LiquidGlass
        className="liquid-action-glass"
        mode="standard"
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={999}
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
