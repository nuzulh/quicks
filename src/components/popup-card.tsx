import { cn } from "@/helpers";
import { ReactNode } from "react";

type PopupCardProps = {
  isOpen: boolean;
  children: ReactNode;
};

export function PopupCard({
  isOpen,
  children,
}: PopupCardProps) {
  return (
    <section
      className={cn(
        "absolute py-[24px] px-[32px] right-4 w-screen md:w-[640px] h-2/3 bg-white transition-all bottom-20 rounded",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      {children}
    </section>
  );
}
