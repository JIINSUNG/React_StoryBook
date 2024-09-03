import React from "react";

export type CarouselCardProps = {
  className?: string;
};

export const CarouselCard: React.FC<CarouselCardProps> = ({ className }) => {
  return <div className={className}></div>;
};
