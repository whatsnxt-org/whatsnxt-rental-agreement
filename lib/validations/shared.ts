import { z } from "zod";

export const requiredStringSchema = z.string().min(1, "Required");
export const requiredEmailSchema = z.string().email("Invalid Email Format");
export const requiredPhoneNoSchema = z.coerce
  .string()
  .min(10, "Invalid Phone Number");
