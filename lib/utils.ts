import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isPositiveInt = (num?: string) =>
  typeof num !== "undefined" &&
  !isNaN(num as unknown as number) &&
  !isNaN(parseInt(num)) &&
  parseInt(num) > 0;
