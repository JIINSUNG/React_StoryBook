import React from "react";

export type CarouselProps = {
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = ({ className }) => {
  return <div className={className}></div>;
};
