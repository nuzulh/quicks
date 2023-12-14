import { cn } from "@/helpers";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export function Button({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "py-2 px-4 rounded shadow font-lato font-bold text-white bg-blue hover:bg-blue/80 transition-all",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
