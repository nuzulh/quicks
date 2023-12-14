import { cn } from "@/helpers";
import { Text } from "..";

type ChatSeparatorProps = {
  label: string;
  variant?: "warning" | "default";
};

export function ChatSeparator({
  label,
  variant,
}: ChatSeparatorProps) {
  return (
    <div className="flex w-full items-center justify-center gap-4 font-semibold text-sm">
      <div
        className={cn(
          "border-b-[1px] h-1 grow border-dark",
          variant === "warning" && "border-error",
        )}
      />
      <Text
        className={cn(
          variant === "warning" && "text-error",
        )}
      >
        {label}
      </Text>
      <div
        className={cn(
          "border-b-[1px] h-1 grow border-dark",
          variant === "warning" && "border-error",
        )}
      />
    </div>
  );
}
