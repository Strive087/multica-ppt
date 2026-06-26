import type { ReactNode } from "react";

export const INK = "#2a241d";
export const ACCENT = "#a94f1c";
export const OCHRE = "#b07d1f";
export const SAGE = "#5f6f4a";
export const PAPER = "#fbf6ec";

export type SvgProps = {
  title: string;
  className?: string;
};

export function VisualFrame({
  title,
  className,
  children,
}: SvgProps & { children: ReactNode }) {
  return (
    <figure className={className} role="img" aria-label={title}>
      <span className="sr-only">{title}</span>
      {children}
    </figure>
  );
}