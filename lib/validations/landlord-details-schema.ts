import { z } from "zod";
import {
  requiredEmailSchema,
  requiredPhoneNoSchema,
  requiredStringSchema,
} from "./shared";

export const landlordSchema = z.object({
  fullname: requiredStringSchema,
  parentName: requiredStringSchema,
  email: requiredEmailSchema,
  phoneNo: requiredPhoneNoSchema,
  permenantAddress: requiredStringSchema,
  panNo: z.string().optional(),
});
export type LandLordSchema = z.infer<typeof landlordSchema>;

export const landlordsSchema = z.object({
  landlords: z.array(landlordSchema),
});
export type LandlordsSchema = z.infer<typeof landlordsSchema>;
