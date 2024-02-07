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

export const isUniqueValue = (arr: unknown[]) =>
  arr.filter((item, index) => arr.indexOf(item) !== index).length === 0;

export const isEmptyString = (str: string) => str === "";
