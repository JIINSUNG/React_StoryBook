import React from "react";
import { twMerge } from "tailwind-merge";

export type PriceProps = {
  className?: string;
  price: number;
  size?: "head" | "normal";
};

const PriceStyle = {
  head: "text-[1.5rem] font-bold",
  normal: "text-[1rem]",
};

export const Price: React.FC<PriceProps> = ({
  className,
  price,
  size = "normal",
}: PriceProps) => {
  const formattedPrice = price.toLocaleString("ko-KR");

  return (
    <text className={twMerge(className, PriceStyle[size])}>
      {formattedPrice}원권
    </text>
  );
};
