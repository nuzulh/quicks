import { cn } from "@/helpers";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Text({
  children,
  className,
}: TextProps) {
  return (
    <p className={cn("text-lato text-dark", className)}>
      {children}
    </p>
  );
}
