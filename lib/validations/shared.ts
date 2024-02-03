import { z } from "zod";
import { isPositiveInt } from "@/lib/utils";

export const requiredStringSchema = z.string().min(1, "Required");
export const requiredEmailSchema = z.string().email("Invalid Email Format");
export const requiredPhoneNoSchema = z.coerce
  .string()
  .min(10, "Invalid Phone Number");

export const requiredIntSchema = z.coerce
  .string()
  .refine((value) => isPositiveInt(value), "Invalid value");
