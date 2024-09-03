import React from "react";

export type BrandNavigatorProps = {
  className?: string;
};

export const BrandNavigator: React.FC<BrandNavigatorProps> = ({
  className,
}) => {
  return <div className={className}></div>;
};
