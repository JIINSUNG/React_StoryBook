import React from "react";

export type BrandCardProps = {
  src: string;
  alt: string;
};

export const BrandCard: React.FC<BrandCardProps> = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="aspect-video rounded-lg m-10" />
    </div>
  );
};
