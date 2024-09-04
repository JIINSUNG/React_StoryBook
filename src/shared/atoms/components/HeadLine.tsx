import React from "react";

export type HeadLineProps = {
  className?: string;
};

export const HeadLine: React.FC<HeadLineProps> = ({ className }) => {
  return <div className={className}></div>;
};
