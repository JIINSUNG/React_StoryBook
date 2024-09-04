import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

export type MenuListProps = {
  className?: string;
  children?: ReactNode[];
  direction?: "row" | "col";
};

const directionStyle = {
  row: "flex",
  col: "flex flex-col",
};

export const MenuList: React.FC<MenuListProps> = ({
  className,
  children,
  direction = "col",
}: MenuListProps) => {
  return (
    <ul className={twMerge(className, directionStyle[direction], "gap-4")}>
      {children}
    </ul>
  );
};
