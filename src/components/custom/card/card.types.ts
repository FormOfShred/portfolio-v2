import type { ReactNode } from "react";

export interface CardProps {
  /** Title of the Card */
  title: string;
  /** Subtitle of the Card */
  subtitle?: string;
  /** Content of the Card */
  children?: ReactNode;
  /** Prepends to the content (including title and subtitle) of the Card */
  prepend?: ReactNode;
}