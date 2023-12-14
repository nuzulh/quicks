import { cn } from "@/helpers";
import { ReactNode } from "react";

type ScrollAreaProps = {
  className?: string;
  children: ReactNode;
};

export function ScrollArea({
  className,
  children,
}: ScrollAreaProps) {
  return (
    <div
      className={cn(
        "overflow-y-auto scrollbar-thin scrollbar-track-light scrollbar-thumb-gray",
        "scrollbar-track-rounded-full scrollbar-thumb-rounded-full",
        className,
      )}
    >
      {children}
    </div>
  );
}
