import React from "react";

export type CarouselCardProps = {
  imageSrc: string;
  title: string;
};

export const CarouselCard: React.FC<CarouselCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <div className="p-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-80 object-cover mb-4 rounded-lg"
      />
    </div>
  );
};
