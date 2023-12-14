import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(
  date: Date,
  options?: Intl.DateTimeFormatOptions
) {
  return new Intl.DateTimeFormat(
    "id-ID",
    options || {
      dateStyle: "short",
      timeStyle: "short",
    }
  ).format(date);
}
