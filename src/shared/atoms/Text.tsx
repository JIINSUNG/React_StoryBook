import React from "react";

export type TextProps = {
  className?: string;
};

export const Text: React.FC<TextProps> = ({ className }) => {
  return <div className={className}></div>;
};
