import React from "react";

export type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={className}></div>;
};
