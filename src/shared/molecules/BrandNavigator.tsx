import React from "react";
import { Typography } from "../atoms/components/Typography.tsx";
import { twMerge } from "tailwind-merge";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export type BrandNavigatorProps = {
  className?: string;
  url: string;
};

export const BrandNavigator: React.FC<BrandNavigatorProps> = ({
  className,
  url,
}: BrandNavigatorProps) => {
  return (
    <div
      className={twMerge(className, "flex items-center gap-2 cursor-pointer")}
      onClick={() => {
        window.location.href = url;
      }}
    >
      <Typography size="title">상품 보러가기</Typography>
      <NavigateNextIcon />
    </div>
  );
};
