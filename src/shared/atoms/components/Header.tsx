import React from "react";
import { twMerge } from "tailwind-merge";

export type HeaderProps = {
  className?: string;
  logo: string;
};

export const Header: React.FC<HeaderProps> = ({
  className,
  logo,
}: HeaderProps) => {
  return (
    <header
      className={twMerge(
        className,
        "flex w-full justify-between p-5 bg-blue-300",
      )}
    >
      <img src={logo} alt="logo" />
      {/* 추후 알림기능? */}
    </header>
  );
};
