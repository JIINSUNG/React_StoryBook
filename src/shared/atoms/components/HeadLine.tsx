import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "./Typography.tsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export type HeadLineProps = {
  className?: string;
  pName?: string;
  onClick?: () => void;
};

export const HeadLine: React.FC<HeadLineProps> = ({
  className,
  pName,
  onClick,
}: HeadLineProps) => {
  return (
    <header className={twMerge(className, "flex justify-between p-5")}>
      <KeyboardBackspaceIcon onClick={onClick} />
      {pName && <Typography size="subhead">{pName}</Typography>}
      <div className="invisible"></div>
    </header>
  );
};
