import React from "react";

export type PriceCardProps = {
  className?: string;
};

export const PriceCard: React.FC<PriceCardProps> = ({ className }) => {
  return <div className={className}></div>;
};
