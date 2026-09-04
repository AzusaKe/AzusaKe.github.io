import type { HTMLAttributes, PropsWithChildren } from "react";

interface GlassSurfaceProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  className?: string;
}

export function GlassSurface({ className = "", children, ...props }: GlassSurfaceProps) {
  return (
    <div className={`glass-surface ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
