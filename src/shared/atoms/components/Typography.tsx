import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TypographyProps = {
  className?: string;
  size?: "head" | "subhead" | "paragraph" | "title";
  children: ReactNode;
};

const TypographyStyle = {
  head: "text-[2rem] font-bold",
  subhead: "text-[1.5rem] font-bold",
  title: "text-[1rem] font-bold",
  paragraph: "text-[1rem]",
} as const;

export const Typography: React.FC<TypographyProps> = ({
  className,
  size = "paragraph",
  children,
}: TypographyProps) => {
  return (
    <text className={twMerge(TypographyStyle[size], className)}>
      {children}
    </text>
  );
};
