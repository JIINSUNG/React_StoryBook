import React from "react";
import { Typography } from "../atoms/components/Typography.tsx";
import { Price } from "../atoms/components/Price.tsx";
import { twMerge } from "tailwind-merge";

export type PriceCardProps = {
  className?: string;
  product: string;
  price: number;
};

export const PriceCard: React.FC<PriceCardProps> = ({
  className,
  product,
  price,
}: PriceCardProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between p-4 rounded-md border shadow-sm",
        className,
      )}
    >
      <Typography size="paragraph">{product}</Typography>
      <Price price={price} size="head"></Price>
    </div>
  );
};
