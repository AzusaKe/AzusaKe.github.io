import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { useGlassSettings } from "./GlassSettings";

interface GlassSurfaceProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  className?: string;
}

export function GlassSurface({ className = "", children, ...props }: GlassSurfaceProps) {
  const { settings } = useGlassSettings();
  const style = {
    ...props.style,
    "--glass-surface-blur": `${(settings.overLight ? 12 : 4) + settings.blurAmount * 32}px`,
    "--glass-surface-saturation": `${settings.saturation}%`,
    "--glass-surface-radius": `${settings.cornerRadius}px`,
  } as CSSProperties;

  return (
    <div className={`glass-surface ${className}`.trim()} {...props} style={style}>
      {children}
    </div>
  );
}
