import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
//comments
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
