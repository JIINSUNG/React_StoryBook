import { twMerge } from "tailwind-merge";
import React from "react";

export type MenuProps = {
  className?: string;
  title: string;
  key?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

export const Menu: React.FC<MenuProps> = ({
  className,
  title,
  key,
  onClick,
  src,
  alt,
}: MenuProps) => {
  return (
    <li
      key={key ?? title}
      className={twMerge(className, "flex items-center gap-10 cursor-pointer")}
      onClick={onClick}
    >
      {src && <img src={src} alt={alt ?? "icon"} />}
      <text className="text-2xl">{title}</text>
    </li>
  );
};
